from bs4 import BeautifulSoup
import json
import lxml
import requests
import re
from selenium import webdriver
import sys
from time import sleep

chrome_driver = 'C:/Users/Kevin/Desktop/CapStone/chromedriver.exe'
#chrome_driver = 'E:/Data/MCS/Academics/4Q/Capstone/chromedriver.exe'

def walmart_crawl(walmart_item):
	walmart_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}
	walmart_url = 'https://www.walmart.com/search/?page=1&query=' + walmart_item + '&sort=price_low'
	walmart_page = requests.get(url=walmart_url, headers=walmart_headers)
	walmart_soup = BeautifulSoup(walmart_page.content, 'lxml')
	walmart_product = walmart_soup.find('li', class_='Grid-col u-size-6-12 u-size-1-4-m u-size-1-5-xl search-gridview-first-col-item search-gridview-first-grid-row-item')
	walmart_price = walmart_product.find(class_="price-group").text
	walmart_image = walmart_product.find('img')['src']
	walmart_description = walmart_product.find('div', class_='search-result-product-title gridview')
	walmart_anchor = walmart_description.find('a', class_='product-title-link line-clamp line-clamp-2')
	walmart_link = 'https://www.walmart.com' + walmart_anchor['href']
	walmart_title = re.findall(r"title=\"(.*?)\"",str(walmart_anchor))[0]
	return walmart_title, walmart_price, walmart_link, walmart_image
	
def target_crawl(target_item):
	target_url = 'https://www.target.com/s?searchTerm=' + target_item + '&sortBy=PriceLow&Nao=0'
	target_driver = webdriver.Chrome(executable_path=chrome_driver)
	target_driver.get(target_url)
	sleep(1)
	target_innerHTML = target_driver.page_source
	target_page = BeautifulSoup(target_innerHTML,"lxml")
	target_price = target_page.find_all('span', class_='h-text-bs')[4].text
	target_product = target_page.find('div', class_='flex-grow-one full-width')
	target_picture = target_page.find('div', class_='Images__ImageContainer-sc-1gcxa3z-2 crxLuS')
	picture_source = target_picture.find('picture')
	target_image = picture_source.find('source')['srcset']
	target_anchor = target_product.find('a')
	target_title = target_anchor.text
	target_link = 'https://www.target.com/' + target_anchor['href']
	target_driver.quit()
	return target_title, target_price, target_link, target_image
	
def amazon_crawl(amazon_item):
	amazon_headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64;x64; rv:66.0) Gecko/20100101 Firefox/66.0", "Accept-Encoding":"gzip, deflate","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "DNT":"1","Connection":"close", "Upgrade-Insecure-Requests":"1"}
	amazon_url = 'https://www.amazon.com/s?k=' + amazon_item + '&s=price-asc-rank&ref=sr_st_price-asc-rank'
	amazon_page = requests.get(url=amazon_url, headers=amazon_headers)
	amazon_soup = BeautifulSoup(amazon_page.content, 'lxml')
	amazon_product = amazon_soup.find('span',class_='a-price')
	amazon_price = amazon_product.find('span',class_='a-offscreen').text
	amazon_title = amazon_soup.find('span',class_='a-size-base-plus a-color-base a-text-normal').text
	amazon_image = amazon_soup.find('img', class_='s-image')['src']
	amazon_link = 'https://www.amazon.com' + amazon_soup.find('a', class_='a-link-normal a-text-normal')['href']
	return amazon_title, amazon_price, amazon_link, amazon_image

def rite_crawl(rite_item):
	rite_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}
	rite_url = 'https://www.riteaid.com/shop/catalogsearch/result/index/?dir=asc&order=price&q=' + rite_item
	rite_page = requests.get(url=rite_url, headers=rite_headers)
	rite_soup = BeautifulSoup(rite_page.content, 'lxml')
	rite_items = rite_soup.find_all('li', class_='item')
	for each_item in rite_items:
		rite_span = each_item.find('span', class_='price')
		if rite_span is not None:
			rite_price = rite_span.text
			rite_product = each_item.find('h2', class_='product-name')
			rite_title = rite_product.find('a')['title']
			rite_link = rite_product.find('a')['href']
			return rite_title, rite_price, rite_link

def costco_crawl(costco_item):
	costco_url = 'https://www.costco.com/CatalogSearch?sortBy=PriceMin%7C0&keyword=' + costco_item + '&dept=All'
	costco_driver = webdriver.Chrome(executable_path=chrome_driver)
	costco_driver.get(costco_url)
	costco_innerHTML = costco_driver.page_source
	costco_soup = BeautifulSoup(costco_innerHTML,"lxml")
	costco_grid = costco_soup.find_all('div', class_='col-xs-6 col-md-6 col-lg-4 col-xl-3 product')
	for costco_item in costco_grid:
		costco_check = costco_item.find('div',class_="price")
		if(costco_check is not None):
			costco_image = costco_item.find('img', class_='img-responsive')['src']
			costco_price = costco_check.text
			costco_description = costco_item.find('p', class_='description')
			costco_title = costco_description.find('a').text
			costco_link = costco_description.find('a')['href']
			costco_number = re.findall(r"\d+-count",str(costco_title))
			length_count = len(costco_number)
			if length_count > 0:
				costco_count = re.findall(r"\d+",str(costco_number[0]))[0]
			else:
				costco_count = -1
			costco_driver.quit()
			return costco_title, costco_price, costco_link, costco_image

def ebay_crawl(ebay_item):
	ebay_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}
	ebay_url = 'https://www.ebay.com/sch/i.html?_from=R40&_nkw=' + ebay_item + '&_sop=15'
	ebay_page = requests.get(url=ebay_url, headers=ebay_headers)
	ebay_soup = BeautifulSoup(ebay_page.content, 'lxml')
	ebay_product = ebay_soup.find('div', class_='s-item__wrapper clearfix')
	ebay_anchor = ebay_product.find('a', class_='s-item__link')
	ebay_link = ebay_anchor['href']
	ebay_title = ebay_anchor.find('h3',class_='s-item__title').text
	ebay_image = ebay_product.find('img', class_='s-item__image-img')['src']
	ebay_money = ebay_product.find('span', class_='s-item__price').text
	ebay_price = ebay_money.split(' ')[0]
	return ebay_title, ebay_price, ebay_link, ebay_image

def heb_crawl(heb_item):
	heb_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}
	heb_url = 'https://www.heb.com/search/results?Ns=product.salePrice|0&q=' + heb_item
	heb_page = requests.get(url=heb_url, headers=heb_headers)
	heb_soup = BeautifulSoup(heb_page.content, 'lxml')
	heb_product = heb_soup.find('li', class_='responsivegriditem product-grid-large-fifth product-grid-small-6')
	heb_script = heb_product.find('script').text
	heb_json = json.loads(heb_script)
	heb_price = heb_json['price']
	heb_title = heb_json['name']
	heb_anchor = heb_product.find('a')['href']
	heb_link = 'https://www.heb.com' + heb_anchor
	heb_image = heb_product.find('img')['src']
	return heb_title, heb_price, heb_link, heb_image

def whole_crawl(whole_item):
	whole_url = "https://products.wholefoodsmarket.com/search?sort=price&store=10614&text=' + whole_item
	whole_driver = webdriver.Chrome(executable_path=chrome_driver)
	whole_driver.get(whole_url)
	whole_innerHTML = whole_driver.page_source
	whole_soup = BeautifulSoup(whole_innerHTML,"lxml")
	whole_product = whole_soup.find('a', class_='ProductCard-Root--3g5WI')
	whole_link = "https://products.wholefoodsmarket.com" + whole_product['href']
	whole_price = whole_product.find('div', class_='ProductCard-Price--1uInW').text
	whole_title = whole_product.find('div', class_='ProductCard-Name--1o2Gg').text
	whole_picture = whole_product.find('div', class_='LazyImage-Image--1HP-y')['style']
	whole_image = re.findall(r'(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+', str(whole_picture))[0]
	whole_driver.quit()
	return whole_title, whole_price, whole_link, whole_image

def convert_price_string_to_float(price):
	space_strip = price.strip()
	price_strip = space_strip.strip('$')
	float_price = float(price_strip)
	return float_price

def real_crawl(search_term):
	query_item = sys.argv[1]
	dict_query = {}
	dict_query['Item'] = query_item
	default_title = 'CANNOT FIND ITEM'
	default_price = 0.0
	default_image = 'NO IMAGE'
	try:
		w_title, w_cost, w_link, w_image = walmart_crawl(query_item)
		w_price = convert_price_string_to_float(w_cost)
		dict_query['Walmart_Title'] = w_title
		dict_query['Walmart_Price'] = w_price
		dict_query['Walmart_Link'] = w_link
		dict_query['Walmart_Image'] = w_image
	except:
		w_link = 'https://www.walmart.com'
		dict_query['Walmart_Title'] = default_title
		dict_query['Walmart_Price'] = default_price
		dict_query['Walmart_Link'] = w_link
		dict_query['Walmart_Image'] = default_image
	try:
		t_title, t_cost, t_link, t_image = target_crawl(query_item)
		t_price = convert_price_string_to_float(t_cost)
		dict_query['Target_Title'] = t_title
		dict_query['Target_Price'] = t_price
		dict_query['Target_Link'] = t_link
		dict_query['Target_Image'] = t_image
	except:
		t_link = 'https://www.target.com'
		dict_query['Target_Title'] = default_title
		dict_query['Target_Price'] = default_price
		dict_query['Target_Link'] = t_link
		dict_query['Target_Image'] = default_image
	try:
		a_title, a_cost, a_link, a_image = amazon_crawl(query_item)
		a_price = convert_price_string_to_float(a_cost)
		dict_query['Amazon_Title'] = a_title
		dict_query['Amazon_Price'] = a_price
		dict_query['Amazon_Link'] = a_link
		dict_query['Amazon_Image'] = a_image
	except:
		a_link = 'https://www.amazon.com'
		dict_query['Amazon_Title'] = default_title
		dict_query['Amazon_Price'] = default_price
		dict_query['Amazon_Link'] = a_link
		dict_query['Amazon_Image'] = default_image
	try:
		r_title, r_cost, r_link = rite_crawl(query_item)
		r_price = convert_price_string_to_float(r_cost)
		dict_query['Rite_Title'] = r_title
		dict_query['Rite_Price'] = r_price
		dict_query['Rite_Link'] = r_link
	except:
		r_link = 'https://www.riteaid.com'
		dict_query['Rite_Title'] = default_title
		dict_query['Rite_Price'] = default_price
		dict_query['Rite_Link'] = r_link
	try:
		c_title, c_cost, c_link, c_image = costco_crawl(query_item)
		c_price = convert_price_string_to_float(c_cost)
		dict_query['Costco_Title'] = c_title
		dict_query['Costco_Price'] = c_price
		dict_query['Costco_Link'] = c_link
		dict_query['Costco_Image'] = c_image
	except:
		c_link = 'https://www.costco.com'
		dict_query['Costco_Title'] = default_title
		dict_query['Costco_Price'] = default_price
		dict_query['Costco_Link'] = c_link
		dict_query['Costco_Image'] = default_image
	try:
		wf_title, wf_cost, wf_link, wf_image = whole_crawl(query_item)
		wf_price = convert_price_string_to_float(wf_cost)
		dict_query['Whole_Title'] = wf_title
		dict_query['Whole_Price'] = wf_price
		dict_query['Whole_Link'] = wf_link
		dict_query['Whole_Image'] = wf_image
	except:
		wf_link = 'https://products.wholefoodsmarket.com/search?sort=relevance&store=10614'
		dict_query['Whole_Title'] = default_title
		dict_query['Whole_Price'] = default_price
		dict_query['Whole_Link'] = wf_link
		dict_query['Whole_Image'] = default_image
	print(json.dumps(dict_query, indent=4, sort_keys=False))
	return dict_query

def connection_setup():
	myclient = pymongo.MongoClient()
	mydb = myclient.test
	mycollection = mydb.test_crawl
	return mycollection

def main():
	#handle = connection_setup()
	#indexed = handle.find_one({'Item' : sys.argv[1]})
	#if  indexed is not None:
		#return indexed
	#else:
	real_result = real_crawl(sys.argv[1])
		#try:
			#handle.insert_one(dict_query)
		#except:
			#print("CANNOT INSERT INTO DB")
	return real_result

if __name__ == "__main__":
	main()