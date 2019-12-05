
//front end code using material UI

import React from 'react';
import {useEffect} from 'react';
//import logo from './logo.svg';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LaunchIcon from '@material-ui/icons/Launch';
import { red } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import backgroundImage from './background_2.png';
import CloseIcon from '@material-ui/icons/Close';
import './App.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  //   '& > *': {
  //     margin: theme.spacing(0.5),
  // },
},
  card: {
    maxWidth: 345,
  },
  media: {
    height: 70,
    paddingTop: '56.25%', // 16:9
    width: '60%',
    marginLeft: '20%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  appbar: {
    alignItems: 'center',
  },
  link: {
    margin: theme.spacing(1),
  },
  bigAvatar: {
    margin:10,
    width:40,
    height:40,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "232f3e !important",
  },
}));

const closeButton = {
  backgroundColor: "#FFFFFF",
};

const buttonStyle = {
      backgroundColor: "#232f3e",
      margin: 18,
    };

const textFieldStyle = {
	borderColor: "#232f3e",
	margin: 14,
}

const CoverImage = backgroundImage;

const backgroundStyle = {
  backgroundImage: `url(${CoverImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

let Amazon_Flag_Query1 = false;
let Walmart_Flag_Query1 = false;
let Target_Flag_Query1 = false;
let Whole_Flag_Query1 = false;
let Amazon_Flag_Query2 = false;
let Walmart_Flag_Query2 = false;
let Target_Flag_Query2 = false;
let Whole_Flag_Query2 = false;
let Amazon_Flag_Query3 = false;
let Walmart_Flag_Query3 = false;
let Target_Flag_Query3 = false;
let Whole_Flag_Query3 = false;
let Amazon_Flag_Query4 = false;
let Walmart_Flag_Query4 = false;
let Target_Flag_Query4 = false;
let Whole_Flag_Query4 = false;
let Amazon_Flag_Query5 = false;
let Walmart_Flag_Query5 = false;
let Target_Flag_Query5 = false;
let Whole_Flag_Query5 = false;

function App(){

  //Used for the SortBy dropdown
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [sortType, set_sortType] = React.useState("None");
  const [btnColor, set_btnColor] = React.useState('theme.palette.grey[500]');

  let [Search_Query,set_Search_Query] = React.useState(null);
  let [Search_Query1,set_Search_Query1] = React.useState(null);
  let [Search_Query2,set_Search_Query2] = React.useState(null);
  let [Search_Query3,set_Search_Query3] = React.useState(null);
  let [Search_Query4,set_Search_Query4] = React.useState(null);
  let [Search_Query5,set_Search_Query5] = React.useState(null);

  const Logos = {
    AmazonLogo: require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/amazon_logo.jpg"),
    WalmartLogo: require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/walmart_logo.png"),
    TargetLogo: require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/target_logo.png"),
    WholeLogo: require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/whole_logo.jpg"),
    Logo: require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/logo.jpg"),
  };

  //const Logos = {
    //AmazonLogo: require("E:/Data/MCS/Academics/4Q/Capstone/smart_cart/SmartCart/front-end/src/amazon_logo.jpg"),
    //WalmartLogo: require("E:/Data/MCS/Academics/4Q/Capstone/smart_cart/SmartCart/front-end/src/walmart_logo.png"),
    //TargetLogo: require("E:/Data/MCS/Academics/4Q/Capstone/smart_cart/SmartCart/front-end/src/target_logo.png"),
    //WholeLogo: require("E:/Data/MCS/Academics/4Q/Capstone/smart_cart/SmartCart/front-end/src/whole_logo.jpg"),
    //Logo: require("E:/Data/MCS/Academics/4Q/Capstone/smart_cart/SmartCart/front-end/src/logo.jpg"),
  //};

  const [Amazon_Title_Query1,set_Amazon_Title_Query1] = React.useState("Not Found");
  const [Amazon_Price_Query1,set_Amazon_Price_Query1] = React.useState(" - ");
  const [Amazon_Link_Query1,set_Amazon_Link_Query1] = React.useState(" - ");
  const [Amazon_Image_Query1,set_Amazon_Image_Query1] = React.useState("Not Found");
  const [Walmart_Title_Query1,set_Walmart_Title_Query1] = React.useState("Not Found");
  const [Walmart_Price_Query1,set_Walmart_Price_Query1] = React.useState(" - ");
  const [Walmart_Link_Query1,set_Walmart_Link_Query1] = React.useState(" - ");
  const [Walmart_Image_Query1,set_Walmart_Image_Query1] = React.useState("Not Found");
  const [Target_Title_Query1,set_Target_Title_Query1] = React.useState("Not Found");
  const [Target_Price_Query1,set_Target_Price_Query1] = React.useState(" - ");
  const [Target_Link_Query1,set_Target_Link_Query1] = React.useState(" - ");
  const [Target_Image_Query1,set_Target_Image_Query1] = React.useState("Not Found");
  const [Whole_Title_Query1,set_Whole_Title_Query1] = React.useState("Not Found");
  const [Whole_Price_Query1,set_Whole_Price_Query1] = React.useState(" - ");
  const [Whole_Link_Query1,set_Whole_Link_Query1] = React.useState(" - ");
  const [Whole_Image_Query1,set_Whole_Image_Query1] = React.useState("Not Found");
  
  const [Amazon_Title_Query2,set_Amazon_Title_Query2] = React.useState("Not Found");
  const [Amazon_Price_Query2,set_Amazon_Price_Query2] = React.useState(" - ");
  const [Amazon_Link_Query2,set_Amazon_Link_Query2] = React.useState(" - ");
  const [Amazon_Image_Query2,set_Amazon_Image_Query2] = React.useState("Not Found");
  const [Walmart_Title_Query2,set_Walmart_Title_Query2] = React.useState("Not Found");
  const [Walmart_Price_Query2,set_Walmart_Price_Query2] = React.useState(" - ");
  const [Walmart_Link_Query2,set_Walmart_Link_Query2] = React.useState(" - ");
  const [Walmart_Image_Query2,set_Walmart_Image_Query2] = React.useState("Not Found");
  const [Target_Title_Query2,set_Target_Title_Query2] = React.useState("Not Found");
  const [Target_Price_Query2,set_Target_Price_Query2] = React.useState(" - ");
  const [Target_Link_Query2,set_Target_Link_Query2] = React.useState(" - ");
  const [Target_Image_Query2,set_Target_Image_Query2] = React.useState("Not Found");
  const [Whole_Title_Query2,set_Whole_Title_Query2] = React.useState("Not Found");
  const [Whole_Price_Query2,set_Whole_Price_Query2] = React.useState(" - ");
  const [Whole_Link_Query2,set_Whole_Link_Query2] = React.useState(" - ");
  const [Whole_Image_Query2,set_Whole_Image_Query2] = React.useState("Not Found");

  const [Amazon_Title_Query3,set_Amazon_Title_Query3] = React.useState("Not Found");
  const [Amazon_Price_Query3,set_Amazon_Price_Query3] = React.useState(" - ");
  const [Amazon_Link_Query3,set_Amazon_Link_Query3] = React.useState(" - ");
  const [Amazon_Image_Query3,set_Amazon_Image_Query3] = React.useState("Not Found");
  const [Walmart_Title_Query3,set_Walmart_Title_Query3] = React.useState("Not Found");
  const [Walmart_Price_Query3,set_Walmart_Price_Query3] = React.useState(" - ");
  const [Walmart_Link_Query3,set_Walmart_Link_Query3] = React.useState(" - ");
  const [Walmart_Image_Query3,set_Walmart_Image_Query3] = React.useState("Not Found");
  const [Target_Title_Query3,set_Target_Title_Query3] = React.useState("Not Found");
  const [Target_Price_Query3,set_Target_Price_Query3] = React.useState(" - ");
  const [Target_Link_Query3,set_Target_Link_Query3] = React.useState(" - ");
  const [Target_Image_Query3,set_Target_Image_Query3] = React.useState("Not Found");
  const [Whole_Title_Query3,set_Whole_Title_Query3] = React.useState("Not Found");
  const [Whole_Price_Query3,set_Whole_Price_Query3] = React.useState(" - ");
  const [Whole_Link_Query3,set_Whole_Link_Query3] = React.useState(" - ");
  const [Whole_Image_Query3,set_Whole_Image_Query3] = React.useState("Not Found");
  
  const [Amazon_Title_Query4,set_Amazon_Title_Query4] = React.useState("Not Found");
  const [Amazon_Price_Query4,set_Amazon_Price_Query4] = React.useState(" - ");
  const [Amazon_Link_Query4,set_Amazon_Link_Query4] = React.useState(" - ");
  const [Amazon_Image_Query4,set_Amazon_Image_Query4] = React.useState("Not Found");
  const [Walmart_Title_Query4,set_Walmart_Title_Query4] = React.useState("Not Found");
  const [Walmart_Price_Query4,set_Walmart_Price_Query4] = React.useState(" - ");
  const [Walmart_Link_Query4,set_Walmart_Link_Query4] = React.useState(" - ");
  const [Walmart_Image_Query4,set_Walmart_Image_Query4] = React.useState("Not Found");
  const [Target_Title_Query4,set_Target_Title_Query4] = React.useState("Not Found");
  const [Target_Price_Query4,set_Target_Price_Query4] = React.useState(" - ");
  const [Target_Link_Query4,set_Target_Link_Query4] = React.useState(" - ");
  const [Target_Image_Query4,set_Target_Image_Query4] = React.useState("Not Found");
  const [Whole_Title_Query4,set_Whole_Title_Query4] = React.useState("Not Found");
  const [Whole_Price_Query4,set_Whole_Price_Query4] = React.useState(" - ");
  const [Whole_Link_Query4,set_Whole_Link_Query4] = React.useState(" - ");
  const [Whole_Image_Query4,set_Whole_Image_Query4] = React.useState("Not Found");
  
  const [Amazon_Title_Query5,set_Amazon_Title_Query5] = React.useState("Not Found");
  const [Amazon_Price_Query5,set_Amazon_Price_Query5] = React.useState(" - ");
  const [Amazon_Link_Query5,set_Amazon_Link_Query5] = React.useState(" - ");
  const [Amazon_Image_Query5,set_Amazon_Image_Query5] = React.useState("Not Found");
  const [Walmart_Title_Query5,set_Walmart_Title_Query5] = React.useState("Not Found");
  const [Walmart_Price_Query5,set_Walmart_Price_Query5] = React.useState(" - ");
  const [Walmart_Link_Query5,set_Walmart_Link_Query5] = React.useState(" - ");
  const [Walmart_Image_Query5,set_Walmart_Image_Query5] = React.useState("Not Found");
  const [Target_Title_Query5,set_Target_Title_Query5] = React.useState("Not Found");
  const [Target_Price_Query5,set_Target_Price_Query5] = React.useState(" - ");
  const [Target_Link_Query5,set_Target_Link_Query5] = React.useState(" - ");
  const [Target_Image_Query5,set_Target_Image_Query5] = React.useState("Not Found");
  const [Whole_Title_Query5,set_Whole_Title_Query5] = React.useState("Not Found");
  const [Whole_Price_Query5,set_Whole_Price_Query5] = React.useState(" - ");
  const [Whole_Link_Query5,set_Whole_Link_Query5] = React.useState(" - ");
  const [Whole_Image_Query5,set_Whole_Image_Query5] = React.useState("Not Found");
  
  const [First_Title_Query1,set_First_Title_Query1] = React.useState("Not Found");
  const [First_Price_Query1,set_First_Price_Query1] = React.useState(" - ");
  const [First_Link_Query1,set_First_Link_Query1] = React.useState(" - ");
  const [First_Image_Query1,set_First_Image_Query1] = React.useState("Not Found");
  const [First_Logo_Query1,set_First_Logo_Query1] = React.useState("Not Found");
  const [Second_Title_Query1,set_Second_Title_Query1] = React.useState("Not Found");
  const [Second_Price_Query1,set_Second_Price_Query1] = React.useState(" - ");
  const [Second_Link_Query1,set_Second_Link_Query1] = React.useState(" - ");
  const [Second_Image_Query1,set_Second_Image_Query1] = React.useState("Not Found");
  const [Second_Logo_Query1,set_Second_Logo_Query1] = React.useState("Not Found");
  const [Third_Title_Query1,set_Third_Title_Query1] = React.useState("Not Found");
  const [Third_Price_Query1,set_Third_Price_Query1] = React.useState(" - ");
  const [Third_Link_Query1,set_Third_Link_Query1] = React.useState(" - ");
  const [Third_Image_Query1,set_Third_Image_Query1] = React.useState("Not Found");
  const [Third_Logo_Query1,set_Third_Logo_Query1] = React.useState("Not Found");
  const [Fourth_Title_Query1,set_Fourth_Title_Query1] = React.useState("Not Found");
  const [Fourth_Price_Query1,set_Fourth_Price_Query1] = React.useState(" - ");
  const [Fourth_Link_Query1,set_Fourth_Link_Query1] = React.useState(" - ");
  const [Fourth_Image_Query1,set_Fourth_Image_Query1] = React.useState("Not Found");
  const [Fourth_Logo_Query1,set_Fourth_Logo_Query1] = React.useState("Not Found");

  const [First_Title_Query2,set_First_Title_Query2] = React.useState("Not Found");
  const [First_Price_Query2,set_First_Price_Query2] = React.useState(" - ");
  const [First_Link_Query2,set_First_Link_Query2] = React.useState(" - ");
  const [First_Image_Query2,set_First_Image_Query2] = React.useState("Not Found");
  const [First_Logo_Query2,set_First_Logo_Query2] = React.useState("Not Found");
  const [Second_Title_Query2,set_Second_Title_Query2] = React.useState("Not Found");
  const [Second_Price_Query2,set_Second_Price_Query2] = React.useState(" - ");
  const [Second_Link_Query2,set_Second_Link_Query2] = React.useState(" - ");
  const [Second_Image_Query2,set_Second_Image_Query2] = React.useState("Not Found");
  const [Second_Logo_Query2,set_Second_Logo_Query2] = React.useState("Not Found");
  const [Third_Title_Query2,set_Third_Title_Query2] = React.useState("Not Found");
  const [Third_Price_Query2,set_Third_Price_Query2] = React.useState(" - ");
  const [Third_Link_Query2,set_Third_Link_Query2] = React.useState(" - ");
  const [Third_Image_Query2,set_Third_Image_Query2] = React.useState("Not Found");
  const [Third_Logo_Query2,set_Third_Logo_Query2] = React.useState("Not Found");
  const [Fourth_Title_Query2,set_Fourth_Title_Query2] = React.useState("Not Found");
  const [Fourth_Price_Query2,set_Fourth_Price_Query2] = React.useState(" - ");
  const [Fourth_Link_Query2,set_Fourth_Link_Query2] = React.useState(" - ");
  const [Fourth_Image_Query2,set_Fourth_Image_Query2] = React.useState("Not Found");
  const [Fourth_Logo_Query2,set_Fourth_Logo_Query2] = React.useState("Not Found");

  const [First_Title_Query3,set_First_Title_Query3] = React.useState("Not Found");
  const [First_Price_Query3,set_First_Price_Query3] = React.useState(" - ");
  const [First_Link_Query3,set_First_Link_Query3] = React.useState(" - ");
  const [First_Image_Query3,set_First_Image_Query3] = React.useState("Not Found");
  const [First_Logo_Query3,set_First_Logo_Query3] = React.useState("Not Found");
  const [Second_Title_Query3,set_Second_Title_Query3] = React.useState("Not Found");
  const [Second_Price_Query3,set_Second_Price_Query3] = React.useState(" - ");
  const [Second_Link_Query3,set_Second_Link_Query3] = React.useState(" - ");
  const [Second_Image_Query3,set_Second_Image_Query3] = React.useState("Not Found");
  const [Second_Logo_Query3,set_Second_Logo_Query3] = React.useState("Not Found");
  const [Third_Title_Query3,set_Third_Title_Query3] = React.useState("Not Found");
  const [Third_Price_Query3,set_Third_Price_Query3] = React.useState(" - ");
  const [Third_Link_Query3,set_Third_Link_Query3] = React.useState(" - ");
  const [Third_Image_Query3,set_Third_Image_Query3] = React.useState("Not Found");
  const [Third_Logo_Query3,set_Third_Logo_Query3] = React.useState("Not Found");
  const [Fourth_Title_Query3,set_Fourth_Title_Query3] = React.useState("Not Found");
  const [Fourth_Price_Query3,set_Fourth_Price_Query3] = React.useState(" - ");
  const [Fourth_Link_Query3,set_Fourth_Link_Query3] = React.useState(" - ");
  const [Fourth_Image_Query3,set_Fourth_Image_Query3] = React.useState("Not Found");
  const [Fourth_Logo_Query3,set_Fourth_Logo_Query3] = React.useState("Not Found");

  const [First_Title_Query4,set_First_Title_Query4] = React.useState("Not Found");
  const [First_Price_Query4,set_First_Price_Query4] = React.useState(" - ");
  const [First_Link_Query4,set_First_Link_Query4] = React.useState(" - ");
  const [First_Image_Query4,set_First_Image_Query4] = React.useState("Not Found");
  const [First_Logo_Query4,set_First_Logo_Query4] = React.useState("Not Found");
  const [Second_Title_Query4,set_Second_Title_Query4] = React.useState("Not Found");
  const [Second_Price_Query4,set_Second_Price_Query4] = React.useState(" - ");
  const [Second_Link_Query4,set_Second_Link_Query4] = React.useState(" - ");
  const [Second_Image_Query4,set_Second_Image_Query4] = React.useState("Not Found");
  const [Second_Logo_Query4,set_Second_Logo_Query4] = React.useState("Not Found");
  const [Third_Title_Query4,set_Third_Title_Query4] = React.useState("Not Found");
  const [Third_Price_Query4,set_Third_Price_Query4] = React.useState(" - ");
  const [Third_Link_Query4,set_Third_Link_Query4] = React.useState(" - ");
  const [Third_Image_Query4,set_Third_Image_Query4] = React.useState("Not Found");
  const [Third_Logo_Query4,set_Third_Logo_Query4] = React.useState("Not Found");
  const [Fourth_Title_Query4,set_Fourth_Title_Query4] = React.useState("Not Found");
  const [Fourth_Price_Query4,set_Fourth_Price_Query4] = React.useState(" - ");
  const [Fourth_Link_Query4,set_Fourth_Link_Query4] = React.useState(" - ");
  const [Fourth_Image_Query4,set_Fourth_Image_Query4] = React.useState("Not Found");
  const [Fourth_Logo_Query4,set_Fourth_Logo_Query4] = React.useState("Not Found");

  const [First_Title_Query5,set_First_Title_Query5] = React.useState("Not Found");
  const [First_Price_Query5,set_First_Price_Query5] = React.useState(" - ");
  const [First_Link_Query5,set_First_Link_Query5] = React.useState(" - ");
  const [First_Image_Query5,set_First_Image_Query5] = React.useState("Not Found");
  const [First_Logo_Query5,set_First_Logo_Query5] = React.useState("Not Found");
  const [Second_Title_Query5,set_Second_Title_Query5] = React.useState("Not Found");
  const [Second_Price_Query5,set_Second_Price_Query5] = React.useState(" - ");
  const [Second_Link_Query5,set_Second_Link_Query5] = React.useState(" - ");
  const [Second_Image_Query5,set_Second_Image_Query5] = React.useState("Not Found");
  const [Second_Logo_Query5,set_Second_Logo_Query5] = React.useState("Not Found");
  const [Third_Title_Query5,set_Third_Title_Query5] = React.useState("Not Found");
  const [Third_Price_Query5,set_Third_Price_Query5] = React.useState(" - ");
  const [Third_Link_Query5,set_Third_Link_Query5] = React.useState(" - ");
  const [Third_Image_Query5,set_Third_Image_Query5] = React.useState("Not Found");
  const [Third_Logo_Query5,set_Third_Logo_Query5] = React.useState("Not Found");
  const [Fourth_Title_Query5,set_Fourth_Title_Query5] = React.useState("Not Found");
  const [Fourth_Price_Query5,set_Fourth_Price_Query5] = React.useState(" - ");
  const [Fourth_Link_Query5,set_Fourth_Link_Query5] = React.useState(" - ");
  const [Fourth_Image_Query5,set_Fourth_Image_Query5] = React.useState("Not Found");
  const [Fourth_Logo_Query5,set_Fourth_Logo_Query5] = React.useState("Not Found");

  // const [Amazon_Flag_Query1,set_Amazon_Flag_Query1] = React.useState(false);
  // const [Walmart_Flag_Query1,set_Walmart_Flag_Query1] = React.useState(false);
  // const [Target_Flag_Query1,set_Target_Flag_Query1] = React.useState(false);
  // const [Whole_Flag_Query1,set_Whole_Flag_Query1] = React.useState(false);
  // const [Amazon_Flag_Query2,set_Amazon_Flag_Query2] = React.useState(false);
  // const [Walmart_Flag_Query2,set_Walmart_Flag_Query2] = React.useState(false);
  // const [Target_Flag_Query2,set_Target_Flag_Query2] = React.useState(false);
  // const [Whole_Flag_Query2,set_Whole_Flag_Query2] = React.useState(false);
  // const [Amazon_Flag_Query3,set_Amazon_Flag_Query3] = React.useState(false);
  // const [Walmart_Flag_Query3,set_Walmart_Flag_Query3] = React.useState(false);
  // const [Target_Flag_Query3,set_Target_Flag_Query3] = React.useState(false);
  // const [Whole_Flag_Query3,set_Whole_Flag_Query3] = React.useState(false);
  // const [Amazon_Flag_Query4,set_Amazon_Flag_Query4] = React.useState(false);
  // const [Walmart_Flag_Query4,set_Walmart_Flag_Query4] = React.useState(false);
  // const [Target_Flag_Query4,set_Target_Flag_Query4] = React.useState(false);
  // const [Whole_Flag_Query4,set_Whole_Flag_Query4] = React.useState(false);
  // const [Amazon_Flag_Query5,set_Amazon_Flag_Query5] = React.useState(false);
  // const [Walmart_Flag_Query5,set_Walmart_Flag_Query5] = React.useState(false);
  // const [Target_Flag_Query5,set_Target_Flag_Query5] = React.useState(false);
  // const [Whole_Flag_Query5,set_Whole_Flag_Query5] = React.useState(false);

  const [result1,set_Result1] = React.useState(null);
  const [result2,set_Result2] = React.useState(null);
  const [result3,set_Result3] = React.useState(null);
  const [result4,set_Result4] = React.useState(null);
  const [result5,set_Result5] = React.useState(null);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const axios = require('axios');

  const onInputChange = (event) => {
    set_Search_Query(event.target.value);
    console.log(Search_Query);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete1 = () => {
    set_Search_Query1(null);
    set_Result1(null);
  };

  const handleDelete2 = () => {
    set_Search_Query2(null);
    set_Result2(null);
  };

  const handleDelete3 = () => {
    set_Search_Query3(null);
    set_Result3(null);
  };

  const handleDelete4 = () => {
    set_Search_Query4(null);
    set_Result4(null);
  };

  const handleDelete5 = () => {
    set_Search_Query5(null);
    set_Result5(null);
  };

  function stringTrim(itemQuery) {
  	itemQuery = itemQuery.trim();
  	itemQuery = itemQuery.split(" ").join('+');
  	return itemQuery;
  }

  const onSubmit = () => {
    //alert('You clicked the submit button');
    
    if(Search_Query1 !== null)
    {
	  if (!loading) {
        setLoading(true);
      }	
      Search_Query1 = stringTrim(Search_Query1);
      axios.post('http://127.0.0.1:8000/findprice/',{item:Search_Query1}) 
      .then(function(response){
        console.log(response);
        set_Amazon_Title_Query1(response.data.Amazon_Title);
        set_Amazon_Price_Query1(response.data.Amazon_Price);
        set_Amazon_Link_Query1(response.data.Amazon_Link);
        set_Amazon_Image_Query1(response.data.Amazon_Image);
        set_Walmart_Title_Query1(response.data.Walmart_Title);
        set_Walmart_Price_Query1(response.data.Walmart_Price);
        set_Walmart_Link_Query1(response.data.Walmart_Link);
        set_Walmart_Image_Query1(response.data.Walmart_Image);
        set_Target_Title_Query1(response.data.Target_Title);
        set_Target_Price_Query1(response.data.Target_Price);
        set_Target_Link_Query1(response.data.Target_Link);
        set_Target_Image_Query1(response.data.Target_Image);
        set_Whole_Title_Query1(response.data.Whole_Title);
        set_Whole_Price_Query1(response.data.Whole_Price);
        set_Whole_Link_Query1(response.data.Whole_Link);
        set_Whole_Image_Query1(response.data.Whole_Image);

        //trying only 1 state
        set_First_Title_Query1(response.data.Amazon_Title);
        set_First_Price_Query1(response.data.Amazon_Price);
        set_First_Link_Query1(response.data.Amazon_Link);
        set_First_Image_Query1(response.data.Amazon_Image);
        if(response.data.Amazon_Title.trim() === "CANNOT FIND ITEM")
          set_First_Image_Query1(Logos.Logo);
        set_First_Logo_Query1(Logos.AmazonLogo);
        set_Second_Title_Query1(response.data.Walmart_Title);
        set_Second_Price_Query1(response.data.Walmart_Price);
        set_Second_Link_Query1(response.data.Walmart_Link);
        set_Second_Image_Query1(response.data.Walmart_Image);
        if(response.data.Walmart_Title.trim() === "CANNOT FIND ITEM")
          set_Second_Image_Query1(Logos.Logo);
        set_Second_Logo_Query1(Logos.WalmartLogo);
        set_Third_Title_Query1(response.data.Target_Title);
        set_Third_Price_Query1(response.data.Target_Price);
        set_Third_Link_Query1(response.data.Target_Link);
        set_Third_Image_Query1(response.data.Target_Image);
        if(response.data.Target_Title.trim() === "CANNOT FIND ITEM")
          set_Third_Image_Query1(Logos.Logo);
        set_Third_Logo_Query1(Logos.TargetLogo);
        set_Fourth_Title_Query1(response.data.Whole_Title);
        set_Fourth_Price_Query1(response.data.Whole_Price);
        set_Fourth_Link_Query1(response.data.Whole_Link);
        set_Fourth_Image_Query1(response.data.Whole_Image);
        if(response.data.Whole_Title.trim() === "CANNOT FIND ITEM")
          set_Fourth_Image_Query1(Logos.Logo);
        set_Fourth_Logo_Query1(Logos.WholeLogo);
		setLoading(false);
        set_Result1(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }
    
    if(Search_Query2 !== null)
    {
	  if (!loading) {
        setLoading(true);
      }
      Search_Query2 = stringTrim(Search_Query2);
      axios.post('http://127.0.0.1:8000/findprice/',{item:Search_Query2}) 
      .then(function(response){
        console.log(response);

        set_Amazon_Title_Query2(response.data.Amazon_Title);
        set_Amazon_Price_Query2(response.data.Amazon_Price);
        set_Amazon_Link_Query2(response.data.Amazon_Link);
        set_Amazon_Image_Query2(response.data.Amazon_Image);
        set_Walmart_Title_Query2(response.data.Walmart_Title);
        set_Walmart_Price_Query2(response.data.Walmart_Price);
        set_Walmart_Link_Query2(response.data.Walmart_Link);
        set_Walmart_Image_Query2(response.data.Walmart_Image);
        set_Target_Title_Query2(response.data.Target_Title);
        set_Target_Price_Query2(response.data.Target_Price);
        set_Target_Link_Query2(response.data.Target_Link);
        set_Target_Image_Query2(response.data.Target_Image);
        set_Whole_Title_Query2(response.data.Whole_Title);
        set_Whole_Price_Query2(response.data.Whole_Price);
        set_Whole_Link_Query2(response.data.Whole_Link);
        set_Whole_Image_Query2(response.data.Whole_Image);

        //replacing the state variables so that we can reuse the existing one
        set_First_Title_Query2(response.data.Amazon_Title);
        set_First_Price_Query2(response.data.Amazon_Price);
        set_First_Link_Query2(response.data.Amazon_Link);
        set_First_Image_Query2(response.data.Amazon_Image);
        if(response.data.Amazon_Title.trim() === "CANNOT FIND ITEM")
          set_First_Image_Query2(Logos.Logo);
        set_First_Logo_Query2(Logos.AmazonLogo);
        set_Second_Title_Query2(response.data.Walmart_Title);
        set_Second_Price_Query2(response.data.Walmart_Price);
        set_Second_Link_Query2(response.data.Walmart_Link);
        set_Second_Image_Query2(response.data.Walmart_Image);
        if(response.data.Walmart_Title.trim() === "CANNOT FIND ITEM")
          set_Second_Image_Query2(Logos.Logo);
        set_Second_Logo_Query2(Logos.WalmartLogo);
        set_Third_Title_Query2(response.data.Target_Title);
        set_Third_Price_Query2(response.data.Target_Price);
        set_Third_Link_Query2(response.data.Target_Link);
        set_Third_Image_Query2(response.data.Target_Image);
        if(response.data.Target_Title.trim() === "CANNOT FIND ITEM")
          set_Third_Image_Query2(Logos.Logo);
        set_Third_Logo_Query2(Logos.TargetLogo);
        set_Fourth_Title_Query2(response.data.Whole_Title);
        set_Fourth_Price_Query2(response.data.Whole_Price);
        set_Fourth_Link_Query2(response.data.Whole_Link);
        set_Fourth_Image_Query2(response.data.Whole_Image);
        if(response.data.Whole_Title.trim() === "CANNOT FIND ITEM")
          set_Fourth_Image_Query2(Logos.Logo);
        set_Fourth_Logo_Query2(Logos.WholeLogo);
		setLoading(false);
        set_Result2(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query3 !== null)
    {
	  if (!loading) {
        setLoading(true);
      }
      Search_Query3 = stringTrim(Search_Query3);
      axios.post('http://127.0.0.1:8000/findprice/',{item:Search_Query3}) 
      .then(function(response){
        console.log(response);

        set_Amazon_Title_Query3(response.data.Amazon_Title);
        set_Amazon_Price_Query3(response.data.Amazon_Price);
        set_Amazon_Link_Query3(response.data.Amazon_Link);
        set_Amazon_Image_Query3(response.data.Amazon_Image);
        set_Walmart_Title_Query3(response.data.Walmart_Title);
        set_Walmart_Price_Query3(response.data.Walmart_Price);
        set_Walmart_Link_Query3(response.data.Walmart_Link);
        set_Walmart_Image_Query3(response.data.Walmart_Image);
        set_Target_Title_Query3(response.data.Target_Title);
        set_Target_Price_Query3(response.data.Target_Price);
        set_Target_Link_Query3(response.data.Target_Link);
        set_Target_Image_Query3(response.data.Target_Image);
        set_Whole_Title_Query3(response.data.Whole_Title);
        set_Whole_Price_Query3(response.data.Whole_Price);
        set_Whole_Link_Query3(response.data.Whole_Link);
        set_Whole_Image_Query3(response.data.Whole_Image);

        set_First_Title_Query3(response.data.Amazon_Title);
        set_First_Price_Query3(response.data.Amazon_Price);
        set_First_Link_Query3(response.data.Amazon_Link);
        set_First_Image_Query3(response.data.Amazon_Image);
        if(response.data.Amazon_Title.trim() === "CANNOT FIND ITEM")
          set_First_Image_Query3(Logos.Logo);
        set_First_Logo_Query3(Logos.AmazonLogo);
        set_Second_Title_Query3(response.data.Walmart_Title);
        set_Second_Price_Query3(response.data.Walmart_Price);
        set_Second_Link_Query3(response.data.Walmart_Link);
        set_Second_Image_Query3(response.data.Walmart_Image);
        if(response.data.Walmart_Title.trim() === "CANNOT FIND ITEM")
          set_Second_Image_Query3(Logos.Logo);
        set_Second_Logo_Query3(Logos.WalmartLogo);
        set_Third_Title_Query3(response.data.Target_Title);
        set_Third_Price_Query3(response.data.Target_Price);
        set_Third_Link_Query3(response.data.Target_Link);
        set_Third_Image_Query3(response.data.Target_Image);
        if(response.data.Target_Title.trim() === "CANNOT FIND ITEM")
          set_Third_Image_Query3(Logos.Logo);
        set_Third_Logo_Query3(Logos.TargetLogo);
        set_Fourth_Title_Query3(response.data.Whole_Title);
        set_Fourth_Price_Query3(response.data.Whole_Price);
        set_Fourth_Link_Query3(response.data.Whole_Link);
        set_Fourth_Image_Query3(response.data.Whole_Image);
        if(response.data.Whole_Title.trim() === "CANNOT FIND ITEM")
          set_Fourth_Image_Query3(Logos.Logo);
        set_Fourth_Logo_Query3(Logos.WholeLogo);
		setLoading(false);
        set_Result3(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query4 !== null)
    {
	  if (!loading) {
        setLoading(true);
      }
      Search_Query4 = stringTrim(Search_Query4);
      axios.post('http://127.0.0.1:8000/findprice/',{item:Search_Query4}) 
      .then(function(response){
        console.log(response);

        set_Amazon_Title_Query4(response.data.Amazon_Title);
        set_Amazon_Price_Query4(response.data.Amazon_Price);
        set_Amazon_Link_Query4(response.data.Amazon_Link);
        set_Amazon_Image_Query4(response.data.Amazon_Image);
        set_Walmart_Title_Query4(response.data.Walmart_Title);
        set_Walmart_Price_Query4(response.data.Walmart_Price);
        set_Walmart_Link_Query4(response.data.Walmart_Link);
        set_Walmart_Image_Query4(response.data.Walmart_Image);
        set_Target_Title_Query4(response.data.Target_Title);
        set_Target_Price_Query4(response.data.Target_Price);
        set_Target_Link_Query4(response.data.Target_Link);
        set_Target_Image_Query4(response.data.Target_Image);
        set_Whole_Title_Query4(response.data.Whole_Title);
        set_Whole_Price_Query4(response.data.Whole_Price);
        set_Whole_Link_Query4(response.data.Whole_Link);
        set_Whole_Image_Query4(response.data.Whole_Image);

        set_First_Title_Query4(response.data.Amazon_Title);
        set_First_Price_Query4(response.data.Amazon_Price);
        set_First_Link_Query4(response.data.Amazon_Link);
        set_First_Image_Query4(response.data.Amazon_Image);
        if(response.data.Amazon_Title.trim() === "CANNOT FIND ITEM")
          set_First_Image_Query4(Logos.Logo);
        set_First_Logo_Query4(Logos.AmazonLogo);
        set_Second_Title_Query4(response.data.Walmart_Title);
        set_Second_Price_Query4(response.data.Walmart_Price);
        set_Second_Link_Query4(response.data.Walmart_Link);
        set_Second_Image_Query4(response.data.Walmart_Image);
        if(response.data.Walmart_Title.trim() === "CANNOT FIND ITEM")
          set_Second_Image_Query4(Logos.Logo);
        set_Second_Logo_Query4(Logos.WalmartLogo);
        set_Third_Title_Query4(response.data.Target_Title);
        set_Third_Price_Query4(response.data.Target_Price);
        set_Third_Link_Query4(response.data.Target_Link);
        set_Third_Image_Query4(response.data.Target_Image);
        if(response.data.Target_Title.trim() === "CANNOT FIND ITEM")
          set_Third_Image_Query4(Logos.Logo);
        set_Third_Logo_Query4(Logos.TargetLogo);
        set_Fourth_Title_Query4(response.data.Whole_Title);
        set_Fourth_Price_Query4(response.data.Whole_Price);
        set_Fourth_Link_Query4(response.data.Whole_Link);
        set_Fourth_Image_Query4(response.data.Whole_Image);
        if(response.data.Whole_Title.trim() === "CANNOT FIND ITEM")
          set_Fourth_Image_Query4(Logos.Logo);
        set_Fourth_Logo_Query4(Logos.WholeLogo);
		setLoading(false);
        set_Result4(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query5 !== null)
    {
	  if (!loading) {
        setLoading(true);
      }
      Search_Query5 = stringTrim(Search_Query5);
      axios.post('http://127.0.0.1:8000/findprice/',{item:Search_Query5}) 
      .then(function(response){
        console.log(response);

        set_Amazon_Title_Query5(response.data.Amazon_Title);
        set_Amazon_Price_Query5(response.data.Amazon_Price);
        set_Amazon_Link_Query5(response.data.Amazon_Link);
        set_Amazon_Image_Query5(response.data.Amazon_Image);
        set_Walmart_Title_Query5(response.data.Walmart_Title);
        set_Walmart_Price_Query5(response.data.Walmart_Price);
        set_Walmart_Link_Query5(response.data.Walmart_Link);
        set_Walmart_Image_Query5(response.data.Walmart_Image);
        set_Target_Title_Query5(response.data.Target_Title);
        set_Target_Price_Query5(response.data.Target_Price);
        set_Target_Link_Query5(response.data.Target_Link);
        set_Target_Image_Query5(response.data.Target_Image);
        set_Whole_Title_Query5(response.data.Whole_Title);
        set_Whole_Price_Query5(response.data.Whole_Price);
        set_Whole_Link_Query5(response.data.Whole_Link);
        set_Whole_Image_Query5(response.data.Whole_Image);

        set_First_Title_Query5(response.data.Amazon_Title);
        set_First_Price_Query5(response.data.Amazon_Price);
        set_First_Link_Query5(response.data.Amazon_Link);
        set_First_Image_Query5(response.data.Amazon_Image);
        if(response.data.Amazon_Title.trim() === "CANNOT FIND ITEM")
          set_First_Image_Query5(Logos.Logo);
        set_First_Logo_Query5(Logos.AmazonLogo);
        set_Second_Title_Query5(response.data.Walmart_Title);
        set_Second_Price_Query5(response.data.Walmart_Price);
        set_Second_Link_Query5(response.data.Walmart_Link);
        set_Second_Image_Query5(response.data.Walmart_Image);
        if(response.data.Walmart_Title.trim() === "CANNOT FIND ITEM")
          set_Second_Image_Query5(Logos.Logo);
        set_Second_Logo_Query5(Logos.WalmartLogo);
        set_Third_Title_Query5(response.data.Target_Title);
        set_Third_Price_Query5(response.data.Target_Price);
        set_Third_Link_Query5(response.data.Target_Link);
        set_Third_Image_Query5(response.data.Target_Image);
        if(response.data.Target_Title.trim() === "CANNOT FIND ITEM")
          set_Third_Image_Query5(Logos.Logo);
        set_Third_Logo_Query5(Logos.TargetLogo);
        set_Fourth_Title_Query5(response.data.Whole_Title);
        set_Fourth_Price_Query5(response.data.Whole_Price);
        set_Fourth_Link_Query5(response.data.Whole_Link);
        set_Fourth_Image_Query5(response.data.Whole_Image);
        if(response.data.Whole_Title.trim() === "CANNOT FIND ITEM")
          set_Fourth_Image_Query5(Logos.Logo);
        set_Fourth_Logo_Query5(Logos.WholeLogo);
		setLoading(false);
        set_Result5(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  };

  var Obj;
  var AmazonObject = {};
  var WalmartObject = {};
  var TargetObject = {};
  var WholeObject = {};

  const sortByCumulativePrice = () => {
    var countAmazon = 0; 
    var priceAmazon = 0;
    var countWalmart = 0;
    var priceWalmart = 0;
    var countTarget = 0;
    var priceTarget = 0;
    var countWhole = 0;
    var priceWhole = 0;

    AmazonObject.name = "Amazon";
    WalmartObject.name = "Walmart";
    TargetObject.name = "Target";
    WholeObject.name = "WholeFoods";
  
    if(Search_Query1!==null)
    {
      if(Amazon_Price_Query1 === '0.0' || Amazon_Flag_Query1 === true)
        countAmazon++;
      if(Walmart_Price_Query1 === '0.0' || Walmart_Flag_Query1 === true)
        countWalmart++;
      if(Target_Price_Query1 === '0.0' || Target_Flag_Query1 === true)
        countTarget++
      if(Whole_Price_Query1 === '0.0' || Whole_Flag_Query1 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query1);
      priceWalmart += parseFloat(Walmart_Price_Query1);
      priceTarget += parseFloat(Target_Price_Query1);
      priceWhole += parseFloat(Whole_Price_Query1);
      
      setDataForQuery1();
    }
    
    if(Search_Query2!==null)
    {
      if(Amazon_Price_Query2 === '0.0' || Amazon_Flag_Query2 === true)
        countAmazon++;
      if(Walmart_Price_Query2 === '0.0' || Walmart_Flag_Query2 === true)
        countWalmart++;
      if(Target_Price_Query2 === '0.0' || Target_Flag_Query2 === true)
        countTarget++
      if(Whole_Price_Query2 === '0.0' || Whole_Flag_Query2 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query2);
      priceWalmart += parseFloat(Walmart_Price_Query2);
      priceTarget += parseFloat(Target_Price_Query2);
      priceWhole += parseFloat(Whole_Price_Query2);
       
      setDataForQuery2();
    }

    if(Search_Query3!==null)
    {
      if(Amazon_Price_Query3 === '0.0' || Amazon_Flag_Query3 === true)
        countAmazon++;
      if(Walmart_Price_Query3 === '0.0' || Walmart_Flag_Query3 === true)
        countWalmart++;
      if(Target_Price_Query3 === '0.0' || Target_Flag_Query3 === true)
        countTarget++
      if(Whole_Price_Query3 === '0.0' || Whole_Flag_Query3 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query3);
      priceWalmart += parseFloat(Walmart_Price_Query3);
      priceTarget += parseFloat(Target_Price_Query3);
      priceWhole += parseFloat(Whole_Price_Query3);
       
      setDataForQuery3();
    }

    if(Search_Query4!==null)
    {
      if(Amazon_Price_Query4 === '0.0' || Amazon_Flag_Query4 === true)
        countAmazon++;
      if(Walmart_Price_Query4 === '0.0' || Walmart_Flag_Query4 === true)
        countWalmart++;
      if(Target_Price_Query4 === '0.0' || Target_Flag_Query4 === true)
        countTarget++
      if(Whole_Price_Query4 === '0.0' || Whole_Flag_Query4 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query4);
      priceWalmart += parseFloat(Walmart_Price_Query4);
      priceTarget += parseFloat(Target_Price_Query4);
      priceWhole += parseFloat(Whole_Price_Query4);
       
      setDataForQuery4();
    }

    if(Search_Query5!==null)
    {
      if(Amazon_Price_Query5 === '0.0' || Amazon_Flag_Query5 === true)
        countAmazon++;
      if(Walmart_Price_Query5 === '0.0' || Walmart_Flag_Query5 === true)
        countWalmart++;
      if(Target_Price_Query5 === '0.0' || Target_Flag_Query5 === true)
        countTarget++
      if(Whole_Price_Query5 === '0.0' || Whole_Flag_Query5 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query5);
      priceWalmart += parseFloat(Walmart_Price_Query5);
      priceTarget += parseFloat(Target_Price_Query5);
      priceWhole += parseFloat(Whole_Price_Query5);

      setDataForQuery5();
    }

    console.log('Amazon Flag',countAmazon);
    console.log('Walmart Flag',countWalmart);
    console.log('Target Flag',countTarget);
    console.log('Whole Flag',countWhole);

    AmazonObject.count = countAmazon; 
    AmazonObject.price = priceAmazon;
    WalmartObject.count = countWalmart; 
    WalmartObject.price = priceWalmart;
    TargetObject.count = countTarget
    TargetObject.price = priceTarget;
    WholeObject.count = countWhole;
    WholeObject.price = priceWhole;

    Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
    Obj.sort(customComparator);

    setDataForCumulativeSorting();
    console.log(Obj);

  };

  const customComparator = (Item1, Item2) => {
      if(Item1.count === Item2.count)
        return Item1.price - Item2.price;

      return Item1.count - Item2.count;
  };

  const setDataForCumulativeSorting = () => {

    if(Search_Query1 !== null)
    {
      set_First_Title_Query1(Obj[0].Title_Query1);
      set_First_Price_Query1(Obj[0].Price_Query1);
      set_First_Image_Query1(Obj[0].Image_Query1);
      if(Obj[0].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query1(Logos.Logo);
      set_First_Link_Query1(Obj[0].Link_Query1);
      set_First_Logo_Query1(Obj[0].Logo_Query1);
      set_Second_Title_Query1(Obj[1].Title_Query1);
      set_Second_Price_Query1(Obj[1].Price_Query1);
      set_Second_Image_Query1(Obj[1].Image_Query1);
      if(Obj[1].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query1(Logos.Logo);
      set_Second_Link_Query1(Obj[1].Link_Query1);
      set_Second_Logo_Query1(Obj[1].Logo_Query1);
      set_Third_Title_Query1(Obj[2].Title_Query1);
      set_Third_Price_Query1(Obj[2].Price_Query1);
      set_Third_Image_Query1(Obj[2].Image_Query1);
      if(Obj[2].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query1(Logos.Logo);
      set_Third_Link_Query1(Obj[2].Link_Query1);
      set_Third_Logo_Query1(Obj[2].Logo_Query1);
      set_Fourth_Title_Query1(Obj[3].Title_Query1);
      set_Fourth_Price_Query1(Obj[3].Price_Query1);
      set_Fourth_Image_Query1(Obj[3].Image_Query1);
      if(Obj[3].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query1(Logos.Logo);
      set_Fourth_Link_Query1(Obj[3].Link_Query1);
      set_Fourth_Logo_Query1(Obj[3].Logo_Query1);
    }

    if(Search_Query2 !== null)
    {
      set_First_Title_Query2(Obj[0].Title_Query2);
      set_First_Price_Query2(Obj[0].Price_Query2);
      set_First_Image_Query2(Obj[0].Image_Query2);
      if(Obj[0].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query2(Logos.Logo);
      set_First_Link_Query2(Obj[0].Link_Query2);
      set_First_Logo_Query2(Obj[0].Logo_Query2);
      set_Second_Title_Query2(Obj[1].Title_Query2);
      set_Second_Price_Query2(Obj[1].Price_Query2);
      set_Second_Image_Query2(Obj[1].Image_Query2);
      if(Obj[1].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query2(Logos.Logo);
      set_Second_Link_Query2(Obj[1].Link_Query2);
      set_Second_Logo_Query2(Obj[1].Logo_Query2);
      set_Third_Title_Query2(Obj[2].Title_Query2);
      set_Third_Price_Query2(Obj[2].Price_Query2);
      set_Third_Image_Query2(Obj[2].Image_Query2);
      if(Obj[2].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query2(Logos.Logo);
      set_Third_Link_Query2(Obj[2].Link_Query2);
      set_Third_Logo_Query2(Obj[2].Logo_Query2);
      set_Fourth_Title_Query2(Obj[3].Title_Query2);
      set_Fourth_Price_Query2(Obj[3].Price_Query2);
      set_Fourth_Image_Query2(Obj[3].Image_Query2);
      if(Obj[3].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query2(Logos.Logo);
      set_Fourth_Link_Query2(Obj[3].Link_Query2);
      set_Fourth_Logo_Query2(Obj[3].Logo_Query2);
    }

    if(Search_Query3 !== null)
    {
      set_First_Title_Query3(Obj[0].Title_Query3);
      set_First_Price_Query3(Obj[0].Price_Query3);
      set_First_Image_Query3(Obj[0].Image_Query3);
      if(Obj[0].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query3(Logos.Logo);
      set_First_Link_Query3(Obj[0].Link_Query3);
      set_First_Logo_Query3(Obj[0].Logo_Query3);
      set_Second_Title_Query3(Obj[1].Title_Query3);
      set_Second_Price_Query3(Obj[1].Price_Query3);
      set_Second_Image_Query3(Obj[1].Image_Query3);
      if(Obj[1].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query3(Logos.Logo);
      set_Second_Link_Query3(Obj[1].Link_Query3);
      set_Second_Logo_Query3(Obj[1].Logo_Query3);
      set_Third_Title_Query3(Obj[2].Title_Query3);
      set_Third_Price_Query3(Obj[2].Price_Query3);
      set_Third_Image_Query3(Obj[2].Image_Query3);
      if(Obj[2].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query3(Logos.Logo);
      set_Third_Link_Query3(Obj[2].Link_Query3);
      set_Third_Logo_Query3(Obj[2].Logo_Query3);
      set_Fourth_Title_Query3(Obj[3].Title_Query3);
      set_Fourth_Price_Query3(Obj[3].Price_Query3);
      set_Fourth_Image_Query3(Obj[3].Image_Query3);
      if(Obj[3].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query3(Logos.Logo);
      set_Fourth_Link_Query3(Obj[3].Link_Query3);
      set_Fourth_Logo_Query3(Obj[3].Logo_Query3);
    }

    if(Search_Query4 !== null)
    {
      set_First_Title_Query4(Obj[0].Title_Query4);
      set_First_Price_Query4(Obj[0].Price_Query4);
      set_First_Image_Query4(Obj[0].Image_Query4);
      if(Obj[0].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query4(Logos.Logo);
      set_First_Link_Query4(Obj[0].Link_Query4);
      set_First_Logo_Query4(Obj[0].Logo_Query4);
      set_Second_Title_Query4(Obj[1].Title_Query4);
      set_Second_Price_Query4(Obj[1].Price_Query4);
      set_Second_Image_Query4(Obj[1].Image_Query4);
      if(Obj[1].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query4(Logos.Logo);
      set_Second_Link_Query4(Obj[1].Link_Query4);
      set_Second_Logo_Query4(Obj[1].Logo_Query4);
      set_Third_Title_Query4(Obj[2].Title_Query4);
      set_Third_Price_Query4(Obj[2].Price_Query4);
      set_Third_Image_Query4(Obj[2].Image_Query4);
      if(Obj[2].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query4(Logos.Logo);
      set_Third_Link_Query4(Obj[2].Link_Query4);
      set_Third_Logo_Query4(Obj[2].Logo_Query4);
      set_Fourth_Title_Query4(Obj[3].Title_Query4);
      set_Fourth_Price_Query4(Obj[3].Price_Query4);
      set_Fourth_Image_Query4(Obj[3].Image_Query4);
      if(Obj[3].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query4(Logos.Logo);
      set_Fourth_Link_Query4(Obj[3].Link_Query4);
      set_Fourth_Logo_Query4(Obj[3].Logo_Query4);
    }

    if(Search_Query5 !== null)
    {
      set_First_Title_Query5(Obj[0].Title_Query5);
      set_First_Price_Query5(Obj[0].Price_Query5);
      set_First_Image_Query5(Obj[0].Image_Query5);
      if(Obj[0].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query5(Logos.Logo);
      set_First_Link_Query5(Obj[0].Link_Query5);
      set_First_Logo_Query5(Obj[0].Logo_Query5);
      set_Second_Title_Query5(Obj[1].Title_Query5);
      set_Second_Price_Query5(Obj[1].Price_Query5);
      set_Second_Image_Query5(Obj[1].Image_Query5);
      if(Obj[1].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query5(Logos.Logo);
      set_Second_Link_Query5(Obj[1].Link_Query5)
      set_Second_Logo_Query5(Obj[1].Logo_Query5);
      set_Third_Title_Query5(Obj[2].Title_Query5);
      set_Third_Price_Query5(Obj[2].Price_Query5);
      set_Third_Image_Query5(Obj[2].Image_Query5);
      if(Obj[2].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query5(Logos.Logo);
      set_Third_Link_Query5(Obj[2].Link_Query5);
      set_Third_Logo_Query5(Obj[2].Logo_Query5);
      set_Fourth_Title_Query5(Obj[3].Title_Query5);
      set_Fourth_Price_Query5(Obj[3].Price_Query5);
      set_Fourth_Image_Query5(Obj[3].Image_Query5);
      if(Obj[3].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query5(Logos.Logo);
      set_Fourth_Link_Query5(Obj[3].Link_Query5);
      set_Fourth_Logo_Query5(Obj[3].Logo_Query5);
    }
  };

  const sortByIndividualPrice = () => {

    var countAmazon = 0;
    var priceAmazon = 0;
    var countWalmart = 0;
    var priceWalmart = 0;
    var countTarget = 0;
    var priceTarget = 0;
    var countWhole = 0;
    var priceWhole = 0;

    if(Search_Query1!==null)
    {
      if(Amazon_Price_Query1 === '0.0' || Amazon_Flag_Query1 === true)
        countAmazon++;
      if(Walmart_Price_Query1 === '0.0' || Walmart_Flag_Query1 === true)
        countWalmart++;
      if(Target_Price_Query1 === '0.0' || Target_Flag_Query1 === true)
        countTarget++
      if(Whole_Price_Query1 === '0.0' || Whole_Flag_Query1 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query1);
      priceWalmart += parseFloat(Walmart_Price_Query1);
      priceTarget += parseFloat(Target_Price_Query1);
      priceWhole += parseFloat(Whole_Price_Query1);
      
      AmazonObject.name = "Amazon";
      WalmartObject.name = "Walmart";
      TargetObject.name = "Target";
      WholeObject.name = "WholeFoods";

      setDataForQuery1();

      AmazonObject.count = countAmazon; 
      AmazonObject.price = priceAmazon;
      WalmartObject.count = countWalmart; 
      WalmartObject.price = priceWalmart;
      TargetObject.count = countTarget
      TargetObject.price = priceTarget;
      WholeObject.count = countWhole;
      WholeObject.price = priceWhole;

      Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
      Obj.sort(customComparator);
      setDataForIndividualSorting1();
      console.log(Obj);
    }

    countAmazon = 0;
    priceAmazon = 0;
    countWalmart = 0;
    priceWalmart = 0;
    countTarget = 0;
    priceTarget = 0;
    countWhole = 0;
    priceWhole = 0;

    if(Search_Query2!==null)
    {
      if(Amazon_Price_Query2 === '0.0' || Amazon_Flag_Query2 === true)
        countAmazon++;
      if(Walmart_Price_Query2 === '0.0' || Walmart_Flag_Query2 === true)
        countWalmart++;
      if(Target_Price_Query2 === '0.0' || Target_Flag_Query2 === true)
        countTarget++
      if(Whole_Price_Query2 === '0.0' || Whole_Flag_Query2 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query2);
      priceWalmart += parseFloat(Walmart_Price_Query2);  
      priceTarget += parseFloat(Target_Price_Query2);
      priceWhole += parseFloat(Whole_Price_Query2);
      
      AmazonObject.name = "Amazon";
      WalmartObject.name = "Walmart";
      TargetObject.name = "Target";
      WholeObject.name = "WholeFoods";

      setDataForQuery2();

      AmazonObject.count = countAmazon; 
      AmazonObject.price = priceAmazon;
      WalmartObject.count = countWalmart; 
      WalmartObject.price = priceWalmart;
      TargetObject.count = countTarget
      TargetObject.price = priceTarget;
      WholeObject.count = countWhole;
      WholeObject.price = priceWhole;

      Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
      Obj.sort(customComparator);
      setDataForIndividualSorting2();
      console.log(Obj);
    }

    countAmazon = 0;
    priceAmazon = 0;
    countWalmart = 0;
    priceWalmart = 0;
    countTarget = 0;
    priceTarget = 0;
    countWhole = 0;
    priceWhole = 0;

    if(Search_Query3!==null)
    {
      if(Amazon_Price_Query3 === '0.0' || Amazon_Flag_Query3 === true)
        countAmazon++;
      if(Walmart_Price_Query3 === '0.0' || Walmart_Flag_Query3 === true)
        countWalmart++;
      if(Target_Price_Query3 === '0.0' || Target_Flag_Query3 === true)
        countTarget++
      if(Whole_Price_Query3 === '0.0' || Whole_Flag_Query3 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query3);
      priceWalmart += parseFloat(Walmart_Price_Query3); 
      priceTarget += parseFloat(Target_Price_Query3);
      priceWhole += parseFloat(Whole_Price_Query3);
      
      AmazonObject.name = "Amazon";
      WalmartObject.name = "Walmart";
      TargetObject.name = "Target";
      WholeObject.name = "WholeFoods";

      setDataForQuery3();

      AmazonObject.count = countAmazon; 
      AmazonObject.price = priceAmazon;
      WalmartObject.count = countWalmart; 
      WalmartObject.price = priceWalmart;
      TargetObject.count = countTarget
      TargetObject.price = priceTarget;
      WholeObject.count = countWhole;
      WholeObject.price = priceWhole;

      Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
      Obj.sort(customComparator);
      setDataForIndividualSorting3();
      console.log(Obj);
    }

    countAmazon = 0;
    priceAmazon = 0;
    countWalmart = 0;
    priceWalmart = 0;
    countTarget = 0;
    priceTarget = 0;
    countWhole = 0;
    priceWhole = 0;

    if(Search_Query4!==null)
    {
      if(Amazon_Price_Query4 === '0.0' || Amazon_Flag_Query4 === true)
        countAmazon++;
      if(Walmart_Price_Query4 === '0.0' || Walmart_Flag_Query4 === true)
        countWalmart++;
      if(Target_Price_Query4 === '0.0' || Target_Flag_Query4 === true)
        countTarget++
      if(Whole_Price_Query4 === '0.0' || Whole_Flag_Query4 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query4);
      priceWalmart += parseFloat(Walmart_Price_Query4);
      priceTarget += parseFloat(Target_Price_Query4);
      priceWhole += parseFloat(Whole_Price_Query4);
      
      AmazonObject.name = "Amazon";
      WalmartObject.name = "Walmart";
      TargetObject.name = "Target";
      WholeObject.name = "WholeFoods";

      setDataForQuery4();

      AmazonObject.count = countAmazon; 
      AmazonObject.price = priceAmazon;
      WalmartObject.count = countWalmart; 
      WalmartObject.price = priceWalmart;
      TargetObject.count = countTarget
      TargetObject.price = priceTarget;
      WholeObject.count = countWhole;
      WholeObject.price = priceWhole;

      Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
      Obj.sort(customComparator);
      setDataForIndividualSorting4();
      console.log(Obj);
    }

    countAmazon = 0;
    priceAmazon = 0;
    countWalmart = 0;
    priceWalmart = 0;
    countTarget = 0;
    priceTarget = 0;
    countWhole = 0;
    priceWhole = 0;

    if(Search_Query5!==null)
    {
      if(Amazon_Price_Query5 === '0.0' || Amazon_Flag_Query5 === true)
        countAmazon++;
      if(Walmart_Price_Query5 === '0.0' || Walmart_Flag_Query5 === true)
        countWalmart++;
      if(Target_Price_Query5 === '0.0' || Target_Flag_Query5 === true)
        countTarget++
      if(Whole_Price_Query5 === '0.0' || Whole_Flag_Query5 === true)
        countWhole++;
      
      priceAmazon += parseFloat(Amazon_Price_Query5);
      priceWalmart += parseFloat(Walmart_Price_Query5);
      priceTarget += parseFloat(Target_Price_Query5);
      priceWhole += parseFloat(Whole_Price_Query5);
      
      AmazonObject.name = "Amazon";
      WalmartObject.name = "Walmart";
      TargetObject.name = "Target";
      WholeObject.name = "WholeFoods";

      setDataForQuery5();

      AmazonObject.count = countAmazon; 
      AmazonObject.price = priceAmazon;
      WalmartObject.count = countWalmart; 
      WalmartObject.price = priceWalmart;
      TargetObject.count = countTarget
      TargetObject.price = priceTarget;
      WholeObject.count = countWhole;
      WholeObject.price = priceWhole;

      Obj = [AmazonObject,WalmartObject,TargetObject,WholeObject];
      Obj.sort(customComparator);
      setDataForIndividualSorting5();
      console.log(Obj);
    }
  };

  const setDataForIndividualSorting1 = () => {
    set_First_Title_Query1(Obj[0].Title_Query1);
    set_First_Price_Query1(Obj[0].Price_Query1);
    set_First_Image_Query1(Obj[0].Image_Query1);
    if(Obj[0].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query1(Logos.Logo);
    set_First_Link_Query1(Obj[0].Link_Query1);
    set_First_Logo_Query1(Obj[0].Logo_Query1);
    set_Second_Title_Query1(Obj[1].Title_Query1);
    set_Second_Price_Query1(Obj[1].Price_Query1);
    set_Second_Image_Query1(Obj[1].Image_Query1);
    if(Obj[1].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query1(Logos.Logo);
    set_Second_Link_Query1(Obj[1].Link_Query1);
    set_Second_Logo_Query1(Obj[1].Logo_Query1);
    set_Third_Title_Query1(Obj[2].Title_Query1);
    set_Third_Price_Query1(Obj[2].Price_Query1);
    set_Third_Image_Query1(Obj[2].Image_Query1);
    if(Obj[2].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query1(Logos.Logo);
    set_Third_Link_Query1(Obj[2].Link_Query1);
    set_Third_Logo_Query1(Obj[2].Logo_Query1);
    set_Fourth_Title_Query1(Obj[3].Title_Query1);
    set_Fourth_Price_Query1(Obj[3].Price_Query1);
    set_Fourth_Image_Query1(Obj[3].Image_Query1);
    if(Obj[3].Title_Query1.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query1(Logos.Logo);
    set_Fourth_Link_Query1(Obj[3].Link_Query1);
    set_Fourth_Logo_Query1(Obj[3].Logo_Query1);
  };

  const setDataForIndividualSorting2 = () => {
    set_First_Title_Query2(Obj[0].Title_Query2);
    set_First_Price_Query2(Obj[0].Price_Query2);
    set_First_Image_Query2(Obj[0].Image_Query2);
    if(Obj[0].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query2(Logos.Logo);
    set_First_Link_Query2(Obj[0].Link_Query2);
    set_First_Logo_Query2(Obj[0].Logo_Query2);
    set_Second_Title_Query2(Obj[1].Title_Query2);
    set_Second_Price_Query2(Obj[1].Price_Query2);
    set_Second_Image_Query2(Obj[1].Image_Query2);
    if(Obj[1].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query2(Logos.Logo);
    set_Second_Link_Query2(Obj[1].Link_Query2);
    set_Second_Logo_Query2(Obj[1].Logo_Query2);
    set_Third_Title_Query2(Obj[2].Title_Query2);
    set_Third_Price_Query2(Obj[2].Price_Query2);
    set_Third_Image_Query2(Obj[2].Image_Query2);
    if(Obj[2].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query2(Logos.Logo);
    set_Third_Link_Query2(Obj[2].Link_Query2);
    set_Third_Logo_Query2(Obj[2].Logo_Query2);
    set_Fourth_Title_Query2(Obj[3].Title_Query2);
    set_Fourth_Price_Query2(Obj[3].Price_Query2);
    set_Fourth_Image_Query2(Obj[3].Image_Query2);
    if(Obj[3].Title_Query2.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query2(Logos.Logo);
    set_Fourth_Link_Query2(Obj[3].Link_Query2);
    set_Fourth_Logo_Query2(Obj[3].Logo_Query2);
  };

  const setDataForIndividualSorting3 = () => {
    set_First_Title_Query3(Obj[0].Title_Query3);
    set_First_Price_Query3(Obj[0].Price_Query3);
    set_First_Image_Query3(Obj[0].Image_Query3);
    if(Obj[0].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query3(Logos.Logo);
    set_First_Link_Query3(Obj[0].Link_Query3);
    set_First_Logo_Query3(Obj[0].Logo_Query3);
    set_Second_Title_Query3(Obj[1].Title_Query3);
    set_Second_Price_Query3(Obj[1].Price_Query3);
    set_Second_Image_Query3(Obj[1].Image_Query3);
    if(Obj[1].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query3(Logos.Logo);
    set_Second_Link_Query3(Obj[1].Link_Query3);
    set_Second_Logo_Query3(Obj[1].Logo_Query3);
    set_Third_Title_Query3(Obj[2].Title_Query3);
    set_Third_Price_Query3(Obj[2].Price_Query3);
    set_Third_Image_Query3(Obj[2].Image_Query3);
    if(Obj[2].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query3(Logos.Logo);
    set_Third_Link_Query3(Obj[2].Link_Query3);
    set_Third_Logo_Query3(Obj[2].Logo_Query3);
    set_Fourth_Title_Query3(Obj[3].Title_Query3);
    set_Fourth_Price_Query3(Obj[3].Price_Query3);
    set_Fourth_Image_Query3(Obj[3].Image_Query3);
    if(Obj[3].Title_Query3.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query3(Logos.Logo);
    set_Fourth_Link_Query3(Obj[3].Link_Query3);
    set_Fourth_Logo_Query3(Obj[3].Logo_Query3);
  };

  const setDataForIndividualSorting4 = () => {
    set_First_Title_Query4(Obj[0].Title_Query4);
    set_First_Price_Query4(Obj[0].Price_Query4);
    set_First_Image_Query4(Obj[0].Image_Query4);
    if(Obj[0].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query4(Logos.Logo);
    set_First_Link_Query4(Obj[0].Link_Query4);
    set_First_Logo_Query4(Obj[0].Logo_Query4);
    set_Second_Title_Query4(Obj[1].Title_Query4);
    set_Second_Price_Query4(Obj[1].Price_Query4);
    set_Second_Image_Query4(Obj[1].Image_Query4);
    if(Obj[1].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query4(Logos.Logo);
    set_Second_Link_Query4(Obj[1].Link_Query4);
    set_Second_Logo_Query4(Obj[1].Logo_Query4);
    set_Third_Title_Query4(Obj[2].Title_Query4);
    set_Third_Price_Query4(Obj[2].Price_Query4);
    set_Third_Image_Query4(Obj[2].Image_Query4);
    if(Obj[2].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query4(Logos.Logo);
    set_Third_Link_Query4(Obj[2].Link_Query4);
    set_Third_Logo_Query4(Obj[2].Logo_Query4);
    set_Fourth_Title_Query4(Obj[3].Title_Query4);
    set_Fourth_Price_Query4(Obj[3].Price_Query4);
    set_Fourth_Image_Query4(Obj[3].Image_Query4);
    if(Obj[3].Title_Query4.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query4(Logos.Logo);
    set_Fourth_Link_Query4(Obj[3].Link_Query4);
    set_Fourth_Logo_Query4(Obj[3].Logo_Query4);
  };

  const setDataForIndividualSorting5 = () => {
    set_First_Title_Query5(Obj[0].Title_Query5);
    set_First_Price_Query5(Obj[0].Price_Query5);
    set_First_Image_Query5(Obj[0].Image_Query5);
    if(Obj[0].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_First_Image_Query5(Logos.Logo);
    set_First_Link_Query5(Obj[0].Link_Query5);
    set_First_Logo_Query5(Obj[0].Logo_Query5);
    set_Second_Title_Query5(Obj[1].Title_Query5);
    set_Second_Price_Query5(Obj[1].Price_Query5);
    set_Second_Image_Query5(Obj[1].Image_Query5);
    if(Obj[1].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Second_Image_Query5(Logos.Logo);
    set_Second_Link_Query5(Obj[1].Link_Query5)
    set_Second_Logo_Query5(Obj[1].Logo_Query5);
    set_Third_Title_Query5(Obj[2].Title_Query5);
    set_Third_Price_Query5(Obj[2].Price_Query5);
    set_Third_Image_Query5(Obj[2].Image_Query5);
    if(Obj[2].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Third_Image_Query5(Logos.Logo);
    set_Third_Link_Query5(Obj[2].Link_Query5);
    set_Third_Logo_Query5(Obj[2].Logo_Query5);
    set_Fourth_Title_Query5(Obj[3].Title_Query5);
    set_Fourth_Price_Query5(Obj[3].Price_Query5);
    set_Fourth_Image_Query5(Obj[3].Image_Query5);
    if(Obj[3].Title_Query5.trim() === "CANNOT FIND ITEM")
        set_Fourth_Image_Query5(Logos.Logo);
    set_Fourth_Link_Query5(Obj[3].Link_Query5);
    set_Fourth_Logo_Query5(Obj[3].Logo_Query5);
  };

  const setDataForQuery1 = () => {
    if(Amazon_Flag_Query1 !== true)
    {
      AmazonObject.Title_Query1 = Amazon_Title_Query1;
      AmazonObject.Price_Query1 = Amazon_Price_Query1;
      AmazonObject.Image_Query1 = Amazon_Image_Query1;
      AmazonObject.Link_Query1 = Amazon_Link_Query1;
      AmazonObject.Logo_Query1 = Logos.AmazonLogo;
    }
    else
    {
      AmazonObject.Title_Query1 = "ITEM REMOVED";
      AmazonObject.Price_Query1 = " - ";
      AmazonObject.Image_Query1 = Logos.Logo;
      AmazonObject.Link_Query1 = " - ";
      AmazonObject.Logo_Query1 = Logos.AmazonLogo;
    }

    if(Walmart_Flag_Query1 !== true)
    {
      WalmartObject.Title_Query1 = Walmart_Title_Query1;
      WalmartObject.Price_Query1 = Walmart_Price_Query1;
      WalmartObject.Image_Query1 = Walmart_Image_Query1;
      WalmartObject.Link_Query1 = Walmart_Link_Query1;
      WalmartObject.Logo_Query1 = Logos.WalmartLogo;
    }
    else
    {
      WalmartObject.Title_Query1 = "ITEM REMOVED";
      WalmartObject.Price_Query1 = " - ";
      WalmartObject.Image_Query1 = Logos.Logo;
      WalmartObject.Link_Query1 = " - ";
      WalmartObject.Logo_Query1 = Logos.WalmartLogo;
    }

    if(Target_Flag_Query1 !== true)
    {
      TargetObject.Title_Query1 = Target_Title_Query1;
      TargetObject.Price_Query1 = Target_Price_Query1;
      TargetObject.Image_Query1 = Target_Image_Query1;
      TargetObject.Link_Query1 = Target_Link_Query1;
      TargetObject.Logo_Query1 = Logos.TargetLogo;
    }
    else
    {
      TargetObject.Title_Query1 = "ITEM REMOVED";
      TargetObject.Price_Query1 = " - ";
      TargetObject.Image_Query1 = Logos.Logo;
      TargetObject.Link_Query1 = " - ";
      TargetObject.Logo_Query1 = Logos.TargetLogo;
    }

    if(Whole_Flag_Query1 !== true)
    {
      WholeObject.Title_Query1 = Whole_Title_Query1;
      WholeObject.Price_Query1 = Whole_Price_Query1;
      WholeObject.Image_Query1 = Whole_Image_Query1;
      WholeObject.Link_Query1 = Whole_Link_Query1;
      WholeObject.Logo_Query1 = Logos.WholeLogo;
    }
    else
    {
      WholeObject.Title_Query1 = "ITEM REMOVED";
      WholeObject.Price_Query1 = " - ";
      WholeObject.Image_Query1 = Logos.Logo;
      WholeObject.Link_Query1 = " - ";
      WholeObject.Logo_Query1 = Logos.WholeLogo;
    }

    //trying using only 1 state
    // AmazonObject.Title_Query1 = First_Title_Query1;
    // AmazonObject.Price_Query1 = First_Price_Query1;
    // AmazonObject.Image_Query1 = First_Image_Query1;
    // AmazonObject.Link_Query1 = First_Link_Query1;
    // AmazonObject.Logo_Query1 = First_Logo_Query1;
    // WalmartObject.Title_Query1 = Second_Title_Query1;
    // WalmartObject.Price_Query1 = Second_Price_Query1;
    // WalmartObject.Image_Query1 = Second_Image_Query1;
    // WalmartObject.Link_Query1 = Second_Link_Query1;
    // WalmartObject.Logo_Query1 = Second_Logo_Query1;
    // TargetObject.Title_Query1 = Third_Title_Query1;
    // TargetObject.Price_Query1 = Third_Price_Query1;
    // TargetObject.Image_Query1 = Third_Image_Query1;
    // TargetObject.Link_Query1 = Third_Link_Query1;
    // TargetObject.Logo_Query1 = Third_Logo_Query1;
    // WholeObject.Title_Query1 = Fourth_Title_Query1;
    // WholeObject.Price_Query1 = Fourth_Price_Query1;
    // WholeObject.Image_Query1 = Fourth_Image_Query1;
    // WholeObject.Link_Query1 = Fourth_Link_Query1;
    // WholeObject.Logo_Query1 = Fourth_Logo_Query1;
  };

  const setDataForQuery2 = () => {
    
    if(Amazon_Flag_Query2 !== true)
    {
      AmazonObject.Title_Query2 = Amazon_Title_Query2;
      AmazonObject.Price_Query2 = Amazon_Price_Query2;
      AmazonObject.Image_Query2 = Amazon_Image_Query2;
      AmazonObject.Link_Query2 = Amazon_Link_Query2;
      AmazonObject.Logo_Query2 = Logos.AmazonLogo;
    }
    else
    {
      AmazonObject.Title_Query2 = "ITEM REMOVED";
      AmazonObject.Price_Query2 = " - ";
      AmazonObject.Image_Query2 = Logos.Logo;
      AmazonObject.Link_Query2 = " - ";
      AmazonObject.Logo_Query2 = Logos.AmazonLogo;
    }

    if(Walmart_Flag_Query2 !== true)
    {
      WalmartObject.Title_Query2 = Walmart_Title_Query2;
      WalmartObject.Price_Query2 = Walmart_Price_Query2;
      WalmartObject.Image_Query2 = Walmart_Image_Query2;
      WalmartObject.Link_Query2 = Walmart_Link_Query2;
      WalmartObject.Logo_Query2 = Logos.WalmartLogo;
    }
    else
    {
      WalmartObject.Title_Query2 = "ITEM REMOVED";
      WalmartObject.Price_Query2 = " - ";
      WalmartObject.Image_Query2 = Logos.Logo;
      WalmartObject.Link_Query2 = " - ";
      WalmartObject.Logo_Query2 = Logos.WalmartLogo;
    }

    if(Target_Flag_Query2 !== true)
    {
      TargetObject.Title_Query2 = Target_Title_Query2;
      TargetObject.Price_Query2 = Target_Price_Query2;
      TargetObject.Image_Query2 = Target_Image_Query2;
      TargetObject.Link_Query2 = Target_Link_Query2;
      TargetObject.Logo_Query2 = Logos.TargetLogo;
    }
    else
    {
      TargetObject.Title_Query2 = "ITEM REMOVED";
      TargetObject.Price_Query2 = " - ";
      TargetObject.Image_Query2 = Logos.Logo;
      TargetObject.Link_Query2 = " - ";
      TargetObject.Logo_Query2 = Logos.TargetLogo;
    }

    if(Whole_Flag_Query2 !== true)
    {
      WholeObject.Title_Query2 = Whole_Title_Query2;
      WholeObject.Price_Query2 = Whole_Price_Query2;
      WholeObject.Image_Query2 = Whole_Image_Query2;
      WholeObject.Link_Query2 = Whole_Link_Query2;
      WholeObject.Logo_Query2 = Logos.WholeLogo;
    }
    else
    {
      WholeObject.Title_Query2 = "ITEM REMOVED";
      WholeObject.Price_Query2 = " - ";
      WholeObject.Image_Query2 = Logos.Logo;
      WholeObject.Link_Query2 = " - ";
      WholeObject.Logo_Query2 = Logos.WholeLogo;
    }
  };

  const setDataForQuery3 = () => {
    if(Amazon_Flag_Query3 !== true)
    {
      AmazonObject.Title_Query3 = Amazon_Title_Query3;
      AmazonObject.Price_Query3 = Amazon_Price_Query3;
      AmazonObject.Image_Query3 = Amazon_Image_Query3;
      AmazonObject.Link_Query3 = Amazon_Link_Query3;
      AmazonObject.Logo_Query3 = Logos.AmazonLogo;
    }
    else
    {
      AmazonObject.Title_Query3 = "ITEM REMOVED";
      AmazonObject.Price_Query3 = " - ";
      AmazonObject.Image_Query3 = Logos.Logo;
      AmazonObject.Link_Query3 = " - ";
      AmazonObject.Logo_Query3 = Logos.AmazonLogo;
    }

    if(Walmart_Flag_Query3 !== true)
    {
      WalmartObject.Title_Query3 = Walmart_Title_Query3;
      WalmartObject.Price_Query3 = Walmart_Price_Query3;
      WalmartObject.Image_Query3 = Walmart_Image_Query3;
      WalmartObject.Link_Query3 = Walmart_Link_Query3;
      WalmartObject.Logo_Query3 = Logos.WalmartLogo;
    }
    else
    {
      WalmartObject.Title_Query3 = "ITEM REMOVED";
      WalmartObject.Price_Query3 = " - ";
      WalmartObject.Image_Query3 = Logos.Logo;
      WalmartObject.Link_Query3 = " - ";
      WalmartObject.Logo_Query3 = Logos.WalmartLogo;
    }

    if(Target_Flag_Query3 !== true)
    {
      TargetObject.Title_Query3 = Target_Title_Query3;
      TargetObject.Price_Query3 = Target_Price_Query3;
      TargetObject.Image_Query3 = Target_Image_Query3;
      TargetObject.Link_Query3 = Target_Link_Query3;
      TargetObject.Logo_Query3 = Logos.TargetLogo;
    }
    else
    {
      TargetObject.Title_Query3 = "ITEM REMOVED";
      TargetObject.Price_Query3 = " - ";
      TargetObject.Image_Query3 = Logos.Logo;
      TargetObject.Link_Query3 = " - ";
      TargetObject.Logo_Query3 = Logos.TargetLogo;
    }

    if(Whole_Flag_Query3 !== true)
    {
      WholeObject.Title_Query3 = Whole_Title_Query3;
      WholeObject.Price_Query3 = Whole_Price_Query3;
      WholeObject.Image_Query3 = Whole_Image_Query3;
      WholeObject.Link_Query3 = Whole_Link_Query3;
      WholeObject.Logo_Query3 = Logos.WholeLogo;
    }
    else
    {
      WholeObject.Title_Query3 = "ITEM REMOVED";
      WholeObject.Price_Query3 = " - ";
      WholeObject.Image_Query3 = Logos.Logo;
      WholeObject.Link_Query3 = " - ";
      WholeObject.Logo_Query3 = Logos.WholeLogo;
    }
  };

  const setDataForQuery4 = () => {
    if(Amazon_Flag_Query4 !== true)
    {
      AmazonObject.Title_Query4 = Amazon_Title_Query4;
      AmazonObject.Price_Query4 = Amazon_Price_Query4;
      AmazonObject.Image_Query4 = Amazon_Image_Query4;
      AmazonObject.Link_Query4 = Amazon_Link_Query4;
      AmazonObject.Logo_Query4 = Logos.AmazonLogo;
    }
    else
    {
      AmazonObject.Title_Query4 = "ITEM REMOVED";
      AmazonObject.Price_Query4 = " - ";
      AmazonObject.Image_Query4 = Logos.Logo;
      AmazonObject.Link_Query4 = " - ";
      AmazonObject.Logo_Query4 = Logos.AmazonLogo;
    }

    if(Walmart_Flag_Query4 !== true)
    {
      WalmartObject.Title_Query4 = Walmart_Title_Query4;
      WalmartObject.Price_Query4 = Walmart_Price_Query4;
      WalmartObject.Image_Query4 = Walmart_Image_Query4;
      WalmartObject.Link_Query4 = Walmart_Link_Query4;
      WalmartObject.Logo_Query4 = Logos.WalmartLogo;
    }
    else
    {
      WalmartObject.Title_Query4 = "ITEM REMOVED";
      WalmartObject.Price_Query4 = " - ";
      WalmartObject.Image_Query4 = Logos.Logo;
      WalmartObject.Link_Query4 = " - ";
      WalmartObject.Logo_Query4 = Logos.WalmartLogo;
    }

    if(Target_Flag_Query4 !== true)
    {
      TargetObject.Title_Query4 = Target_Title_Query4;
      TargetObject.Price_Query4 = Target_Price_Query4;
      TargetObject.Image_Query4 = Target_Image_Query4;
      TargetObject.Link_Query4 = Target_Link_Query4;
      TargetObject.Logo_Query4 = Logos.TargetLogo;
    }
    else
    {
      TargetObject.Title_Query4 = "ITEM REMOVED";
      TargetObject.Price_Query4 = " - ";
      TargetObject.Image_Query4 = Logos.Logo;
      TargetObject.Link_Query4 = " - ";
      TargetObject.Logo_Query4 = Logos.TargetLogo;
    }

    if(Whole_Flag_Query4 !== true)
    {
      WholeObject.Title_Query4 = Whole_Title_Query4;
      WholeObject.Price_Query4 = Whole_Price_Query4;
      WholeObject.Image_Query4 = Whole_Image_Query4;
      WholeObject.Link_Query4 = Whole_Link_Query4;
      WholeObject.Logo_Query4 = Logos.WholeLogo;
    }
    else
    {
      WholeObject.Title_Query4 = "ITEM REMOVED";
      WholeObject.Price_Query4 = " - ";
      WholeObject.Image_Query4 = Logos.Logo;
      WholeObject.Link_Query4 = " - ";
      WholeObject.Logo_Query4 = Logos.WholeLogo;
    }
  };

  const setDataForQuery5 = () => {
    if(Amazon_Flag_Query5 !== true)
    {
      AmazonObject.Title_Query5 = Amazon_Title_Query5;
      AmazonObject.Price_Query5 = Amazon_Price_Query5;
      AmazonObject.Image_Query5 = Amazon_Image_Query5;
      AmazonObject.Link_Query5 = Amazon_Link_Query5;
      AmazonObject.Logo_Query5 = Logos.AmazonLogo;
    }
    else
    {
      AmazonObject.Title_Query5 = "ITEM REMOVED";
      AmazonObject.Price_Query5 = " - ";
      AmazonObject.Image_Query5 = Logos.Logo;
      AmazonObject.Link_Query5 = " - ";
      AmazonObject.Logo_Query5 = Logos.AmazonLogo;
    }

    if(Walmart_Flag_Query5 !== true)
    {
      WalmartObject.Title_Query5 = Walmart_Title_Query5;
      WalmartObject.Price_Query5 = Walmart_Price_Query5;
      WalmartObject.Image_Query5 = Walmart_Image_Query5;
      WalmartObject.Link_Query5 = Walmart_Link_Query5;
      WalmartObject.Logo_Query5 = Logos.WalmartLogo;
    }
    else
    {
      WalmartObject.Title_Query5 = "ITEM REMOVED";
      WalmartObject.Price_Query5 = " - ";
      WalmartObject.Image_Query5 = Logos.Logo;
      WalmartObject.Link_Query5 = " - ";
      WalmartObject.Logo_Query5 = Logos.WalmartLogo;
    }

    if(Target_Flag_Query5 !== true)
    {
      TargetObject.Title_Query5 = Target_Title_Query5;
      TargetObject.Price_Query5 = Target_Price_Query5;
      TargetObject.Image_Query5 = Target_Image_Query5;
      TargetObject.Link_Query5 = Target_Link_Query5;
      TargetObject.Logo_Query5 = Logos.TargetLogo;
    }
    else
    {
      TargetObject.Title_Query5 = "ITEM REMOVED";
      TargetObject.Price_Query5 = " - ";
      TargetObject.Image_Query5 = Logos.Logo;
      TargetObject.Link_Query5 = " - ";
      TargetObject.Logo_Query5 = Logos.TargetLogo;
    }

    if(Whole_Flag_Query5 !== true)
    {
      WholeObject.Title_Query5 = Whole_Title_Query5;
      WholeObject.Price_Query5 = Whole_Price_Query5;
      WholeObject.Image_Query5 = Whole_Image_Query5;
      WholeObject.Link_Query5 = Whole_Link_Query5;
      WholeObject.Logo_Query5 = Logos.WholeLogo;
    }
    else
    {
      WholeObject.Title_Query5 = "ITEM REMOVED";
      WholeObject.Price_Query5 = " - ";
      WholeObject.Image_Query5 = Logos.Logo;
      WholeObject.Link_Query5 = " - ";
      WholeObject.Logo_Query5 = Logos.WholeLogo;
    }
  };

  const onAdd = () => {
    if(Search_Query !== null)
    {
      var query = Search_Query.split(",");
      var len = query.length;
      set_Search_Query1(query[0]);
      if(len>=2)
        set_Search_Query2(query[1]);
      if(len>=3)
        set_Search_Query3(query[2]);
      if(len>=4)
        set_Search_Query4(query[3]);
      if(len===5)
        set_Search_Query5(query[4]);   
    }
  };

  const handleSort = (event) => {

    if(event.target.value === '')
    {
      onSubmit();
      set_sortType("None");
    }
    if(event.target.value === 1)
    {
      sortByCumulativePrice();
      set_sortType("Cumulative");
    }
    if(event.target.value === 2)
    {
      sortByIndividualPrice();
      set_sortType("Individual");
    }    
  };

  const onCloseQuery1Card1 = () => {
    if(First_Link_Query1.includes("https://www.amazon.com"))
      Amazon_Flag_Query1 = true;
    if(First_Link_Query1.includes("https://www.walmart.com"))
      Walmart_Flag_Query1 = true;
    if(First_Link_Query1.includes("https://www.target.com"))
      Target_Flag_Query1 = true;
    if(First_Link_Query1.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query1 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery1Card2 = () => {
    if(Second_Link_Query1.includes("https://www.amazon.com"))
      Amazon_Flag_Query1 = true;
    if(Second_Link_Query1.includes("https://www.walmart.com"))
      Walmart_Flag_Query1 = true;
    if(Second_Link_Query1.includes("https://www.target.com"))
      Target_Flag_Query1 = true;
    if(Second_Link_Query1.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query1 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery1Card3 = () => {
    if(Third_Link_Query1.includes("https://www.amazon.com"))
      Amazon_Flag_Query1 = true;
    if(Third_Link_Query1.includes("https://www.walmart.com"))
      Walmart_Flag_Query1 = true;
    if(Third_Link_Query1.includes("https://www.target.com"))
      Target_Flag_Query1 = true;
    if(Third_Link_Query1.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query1 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery1Card4 = () => {
    if(Fourth_Link_Query1.includes("https://www.amazon.com"))
      Amazon_Flag_Query1 = true;
    if(Fourth_Link_Query1.includes("https://www.walmart.com"))
      Walmart_Flag_Query1 = true;
    if(Fourth_Link_Query1.includes("https://www.target.com"))
      Target_Flag_Query1 = true;
    if(Fourth_Link_Query1.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query1 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery2Card1 = () => {
    if(First_Link_Query2.includes("https://www.amazon.com"))
      Amazon_Flag_Query2 = true;
    if(First_Link_Query2.includes("https://www.walmart.com"))
      Walmart_Flag_Query2 = true;
    if(First_Link_Query2.includes("https://www.target.com"))
      Target_Flag_Query2 = true;
    if(First_Link_Query2.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query2 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery2Card2 = () => {
    if(Second_Link_Query2.includes("https://www.amazon.com"))
      Amazon_Flag_Query2 = true;
    if(Second_Link_Query2.includes("https://www.walmart.com"))
      Walmart_Flag_Query2 = true;
    if(Second_Link_Query2.includes("https://www.target.com"))
      Target_Flag_Query2 = true;
    if(Second_Link_Query2.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query2 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery2Card3 = () => {
    if(Third_Link_Query2.includes("https://www.amazon.com"))
      Amazon_Flag_Query2 = true;
    if(Third_Link_Query2.includes("https://www.walmart.com"))
      Walmart_Flag_Query2 = true;
    if(Third_Link_Query2.includes("https://www.target.com"))
      Target_Flag_Query2 = true;
    if(Third_Link_Query2.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query2 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery2Card4 = () => {
    if(Fourth_Link_Query2.includes("https://www.amazon.com"))
      Amazon_Flag_Query2 = true;
    if(Fourth_Link_Query2.includes("https://www.walmart.com"))
      Walmart_Flag_Query2 = true;
    if(Fourth_Link_Query2.includes("https://www.target.com"))
      Target_Flag_Query2 = true;
    if(Fourth_Link_Query2.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query2 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery3Card1 = () => {
    if(First_Link_Query3.includes("https://www.amazon.com"))
      Amazon_Flag_Query3 = true;
    if(First_Link_Query3.includes("https://www.walmart.com"))
      Walmart_Flag_Query3 = true;
    if(First_Link_Query3.includes("https://www.target.com"))
      Target_Flag_Query3 = true;
    if(First_Link_Query3.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query3 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery3Card2 = () => {
    if(Second_Link_Query3.includes("https://www.amazon.com"))
      Amazon_Flag_Query3 = true;
    if(Second_Link_Query3.includes("https://www.walmart.com"))
      Walmart_Flag_Query3 = true;
    if(Second_Link_Query3.includes("https://www.target.com"))
      Target_Flag_Query3 = true;
    if(Second_Link_Query3.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query3 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery3Card3 = () => {
    if(Third_Link_Query3.includes("https://www.amazon.com"))
      Amazon_Flag_Query3 = true;
    if(Third_Link_Query3.includes("https://www.walmart.com"))
      Walmart_Flag_Query3 = true;
    if(Third_Link_Query3.includes("https://www.target.com"))
      Target_Flag_Query3 = true;
    if(Third_Link_Query3.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query3 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery3Card4 = () => {
    if(Fourth_Link_Query3.includes("https://www.amazon.com"))
      Amazon_Flag_Query3 = true;
    if(Fourth_Link_Query3.includes("https://www.walmart.com"))
      Walmart_Flag_Query3 = true;
    if(Fourth_Link_Query3.includes("https://www.target.com"))
      Target_Flag_Query3 = true;
    if(Fourth_Link_Query3.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query3 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery4Card1 = () => {
    if(First_Link_Query4.includes("https://www.amazon.com"))
      Amazon_Flag_Query4 = true;
    if(First_Link_Query4.includes("https://www.walmart.com"))
      Walmart_Flag_Query4 = true;
    if(First_Link_Query4.includes("https://www.target.com"))
      Target_Flag_Query4 = true;
    if(First_Link_Query4.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query4 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery4Card2 = () => {
    if(Second_Link_Query4.includes("https://www.amazon.com"))
      Amazon_Flag_Query4 = true;
    if(Second_Link_Query4.includes("https://www.walmart.com"))
      Walmart_Flag_Query4 = true;
    if(Second_Link_Query4.includes("https://www.target.com"))
      Target_Flag_Query4 = true;
    if(Second_Link_Query4.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query4 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery4Card3 = () => {
    if(Third_Link_Query4.includes("https://www.amazon.com"))
      Amazon_Flag_Query4 = true;
    if(Third_Link_Query4.includes("https://www.walmart.com"))
      Walmart_Flag_Query4 = true;
    if(Third_Link_Query4.includes("https://www.target.com"))
      Target_Flag_Query4 = true;
    if(Third_Link_Query4.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query4 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery4Card4 = () => {
    if(Fourth_Link_Query4.includes("https://www.amazon.com"))
      Amazon_Flag_Query4 = true;
    if(Fourth_Link_Query4.includes("https://www.walmart.com"))
      Walmart_Flag_Query4 = true;
    if(Fourth_Link_Query4.includes("https://www.target.com"))
      Target_Flag_Query4 = true;
    if(Fourth_Link_Query4.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query4 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery5Card1 = () => {
    if(First_Link_Query5.includes("https://www.amazon.com"))
      Amazon_Flag_Query5 = true;
    if(First_Link_Query5.includes("https://www.walmart.com"))
      Walmart_Flag_Query5 = true;
    if(First_Link_Query5.includes("https://www.target.com"))
      Target_Flag_Query5 = true;
    if(First_Link_Query5.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query5 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery5Card2 = () => {
    if(Second_Link_Query5.includes("https://www.amazon.com"))
      Amazon_Flag_Query5 = true;
    if(Second_Link_Query5.includes("https://www.walmart.com"))
      Walmart_Flag_Query5 = true;
    if(Second_Link_Query5.includes("https://www.target.com"))
      Target_Flag_Query5 = true;
    if(Second_Link_Query5.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query5 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery5Card3 = () => {
    if(Third_Link_Query5.includes("https://www.amazon.com"))
      Amazon_Flag_Query5 = true;
    if(Third_Link_Query5.includes("https://www.walmart.com"))
      Walmart_Flag_Query5 = true;
    if(Third_Link_Query5.includes("https://www.target.com"))
      Target_Flag_Query5 = true;
    if(Third_Link_Query5.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query5 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };

  const onCloseQuery5Card4 = () => {
    if(Fourth_Link_Query5.includes("https://www.amazon.com"))
      Amazon_Flag_Query5 = true;
    if(Fourth_Link_Query5.includes("https://www.walmart.com"))
      Walmart_Flag_Query5 = true;
    if(Fourth_Link_Query5.includes("https://www.target.com"))
      Target_Flag_Query5 = true;
    if(Fourth_Link_Query5.includes("https://products.wholefoodsmarket.com"))
      Whole_Flag_Query5 = true;

    if(sortType === "None")
      onSubmit();
    if(sortType === "Cumulative")
      sortByCumulativePrice();
    if(sortType === "Individual")
      sortByIndividualPrice();
  };
  
  // componentDidMount(){
  //   this.callBackendAPI()
  //   .then(res => this.setState({data:res.express}))
  //   .catch(err => console.log(err));
  // }

  // const callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if(response.status!==200){
  //     throw Error(body.message);
  //   }
  //   console.log(body.express);
  //   return body;
  // };

    return (
      <div className="App" style={backgroundStyle}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" style={{ backgroundColor: '#232f3e' }}>
        <Toolbar variant="regular">
		<Typography variant="h5" style={{color: '#ffa500'}}>
            SMART
          </Typography>
          <Typography variant="h5" style={{color: '#ffffff'}}>
            CART
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    {/* <br></br>
    <br></br> */}
      <div>
        <br></br>
        <br></br>
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Search"
        style={textFieldStyle}
        placeholder="Enter the items here"
        helperText="*Required"
        fullWidth
        margin="orange"
        variant="outlined"
        onChange = {onInputChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
        classes: {
        	notchedOutline: classes.notchedOutline
        }
    }}
        // <style={{backgroundColor: "#ffffff"}}>
      />
      </form>
      <div>
       <Button variant="contained" style={buttonStyle} onClick = {onAdd}>
       	<Typography variant="button" style={{color: '#ffa500'}}>
            ADD TO GROCERY LIST
          </Typography>
      </Button>
      </div>
      <div>
      <h2>GROCERY LIST</h2>
      { Search_Query1 !== null &&
      <Chip
        label={Search_Query1}
        onDelete={handleDelete1}
        variant="outlined"
      />
      }
      { Search_Query2 !== null &&
      <Chip
        label={Search_Query2}
        onDelete={handleDelete2}
        variant="outlined"
      />
      }
      { Search_Query3 !== null &&
      <Chip
        label={Search_Query3}
        onDelete={handleDelete3}
        variant="outlined"
      />
      }
      { Search_Query4 !== null &&
      <Chip
        label={Search_Query4}
        onDelete={handleDelete4}
        variant="outlined"
      />
      }
      { Search_Query5 !== null &&
      <Chip
        label={Search_Query5}
        onDelete={handleDelete5}
        variant="outlined"
      />
      }
      </div>
      <div>
      <Button variant="contained" color="primary" style={buttonStyle} onClick = {onSubmit} disabled={loading}>
        <Typography variant="button" style={{color: '#ffa500'}}>
            GET THE BEST DEALS!
          </Typography>
      </Button>
	  {loading && <CircularProgress size={24} className={classes.buttonStyle} />}
      </div>
      <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          SORT BY
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value=''
          onChange={handleSort}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Sort By Store</MenuItem>
          <MenuItem value={2}>Sort By Item</MenuItem>
        </Select>
      </FormControl>
      </div>
      </div>
      <br></br>
      { result1 !== null &&
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          // <Avatar aria-label="recipe" className={classes.avatar}>
          //   1
          // </Avatar>
          <Avatar 
            alt="Amazon_Logo" 
            src={First_Logo_Query1} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery1Card1}>
            <CloseIcon />
          </IconButton>  
        }
        
        title={First_Title_Query1}
        subheader={First_Price_Query1}
      />
      <CardMedia 
        className={classes.media} 
        title={First_Title_Query1} 
        image = {First_Image_Query1}
        /> 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link href={First_Link_Query1} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          // <Avatar aria-label="recipe" className={classes.avatar}>
          //   2
          // </Avatar>
          <Avatar 
            alt="Walmart_Logo" 
            src={Second_Logo_Query1} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery1Card2}>
            <CloseIcon/>
          </IconButton>
        }
        title={Second_Title_Query1}
        subheader={Second_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Second_Image_Query1}
        title = {Second_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Second_Link_Query1} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          // <Avatar aria-label="recipe" className={classes.avatar}>
          //   3
          // </Avatar>
          <Avatar 
            alt="Target_Logo" 
            src={Third_Logo_Query1} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery1Card3}>
            <CloseIcon />
          </IconButton>
        }
        title={Third_Title_Query1}
        subheader={Third_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Third_Image_Query1}
        title = {Third_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Third_Link_Query1} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          // <Avatar aria-label="recipe" className={classes.avatar}>
          //   4
          // </Avatar>
          <Avatar 
            alt="Whole_Logo" 
            src={Fourth_Logo_Query1} 
            className={classes.bigAvatar} 
            />
          }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery1Card4}>
            <CloseIcon />
          </IconButton>
        }
        title={Fourth_Title_Query1}
        subheader={Fourth_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Fourth_Image_Query1}
        title = {Fourth_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Fourth_Link_Query1} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show   more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
      </Grid>  
    </div>
    }

    {/* --------------------------------------------------------------------------------------------------
     */}

<br></br>
    { result2 !== null &&
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Amazon_Logo" 
            src={First_Logo_Query2} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery2Card1}>
            <CloseIcon />
          </IconButton>
        }
        title = {First_Title_Query2}
        subheader={First_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://via.placeholder.com/350x150'}}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {First_Image_Query2}
        title = {First_Title_Query2}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={First_Link_Query2} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Walmart_Logo" 
            src={Second_Logo_Query2} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery2Card2}>
            <CloseIcon />
          </IconButton>
        }
        title={Second_Title_Query2}
        subheader={Second_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Second_Image_Query2}
        title = {Second_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Second_Link_Query2} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Target_Logo" 
            src={Third_Logo_Query2} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery2Card3}>
            <CloseIcon />
          </IconButton>
        }
        title={Third_Title_Query2}
        subheader={Third_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Third_Image_Query2}
        title = {Third_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Third_Link_Query2} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Whole_Logo" 
            src={Fourth_Logo_Query2} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery2Card4}>
            <CloseIcon />
          </IconButton>
        }
        title={Fourth_Title_Query2}
        subheader={Fourth_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Fourth_Image_Query2}
        title = {Fourth_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Fourth_Link_Query2} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
      </Grid>  
    </div>
    }

    {/* --------------------------------------------------------------------------------------------------
     */}

<br></br>
     { result3 !== null &&
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Amazon_Logo" 
            src={First_Logo_Query3} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery3Card1}>
            <CloseIcon />
          </IconButton>
        }
        title = {First_Title_Query3}
        subheader={First_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {First_Image_Query3}
        title = {First_Title_Query3}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={First_Link_Query3} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Walmart_Logo" 
            src={Second_Logo_Query3} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery3Card2}>
            <CloseIcon />
          </IconButton>
        }
        title={Second_Title_Query3}
        subheader={Second_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Second_Image_Query3}
        title = {Second_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Second_Link_Query3} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Target_Logo" 
            src={Third_Logo_Query3} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery3Card3}>
            <CloseIcon />
          </IconButton>
        }
        title={Third_Title_Query3}
        subheader={Third_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Third_Image_Query3}
        title = {Third_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Third_Link_Query3} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Whole_Logo" 
            src={Fourth_Logo_Query3} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery3Card4}>
            <CloseIcon />
          </IconButton>
        }
        title={Fourth_Title_Query3}
        subheader={Fourth_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Fourth_Image_Query3}
        title = {Fourth_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Fourth_Link_Query3} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
      </Grid>  
    </div>
     }

    {/* ------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------------ */}

    <br></br>
    { result4 !== null && 
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Amazon_Logo" 
            src={First_Logo_Query4} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery4Card1}>
            <CloseIcon />
          </IconButton>
        }
        title = {First_Title_Query4}
        subheader={First_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {First_Image_Query4}
        title = {First_Title_Query4}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={First_Link_Query4} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Walmart_Logo" 
            src={Second_Logo_Query4} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery4Card2}>
            <CloseIcon />
          </IconButton>
        }
        title={Second_Title_Query4}
        subheader={Second_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Second_Image_Query4}
        title = {Second_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Second_Link_Query4} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Target_Logo" 
            src={Third_Logo_Query4} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery4Card3}>
            <CloseIcon />
          </IconButton>
        }
        title={Third_Title_Query4}
        subheader={Third_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Third_Image_Query4}
        title = {Third_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Third_Link_Query4} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Whole_Logo" 
            src={Fourth_Logo_Query4} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery4Card4}>
            <CloseIcon />
          </IconButton>
        }
        title={Fourth_Title_Query4}
        subheader={Fourth_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Fourth_Image_Query4}
        title = {Fourth_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Fourth_Link_Query4} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
      </Grid>  
    </div>
    }

  {/* ---------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------- */}

<br></br>
  { result5 !== null && 
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Amazon_Logo" 
            src={First_Logo_Query5} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery5Card1}>
            <CloseIcon />
          </IconButton>
        }
        title = {First_Title_Query5}
        subheader={First_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {First_Image_Query5}
        title = {First_Title_Query5}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={First_Link_Query5} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Walmart_Logo" 
            src={Second_Logo_Query5} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery5Card2}>
            <CloseIcon />
          </IconButton>
        }
        title={Second_Title_Query5}
        subheader={Second_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Second_Image_Query5}
        title = {Second_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Second_Link_Query5} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Target_Logo" 
            src={Third_Logo_Query5} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery5Card3}>
            <CloseIcon />
          </IconButton>
        }
        title={Third_Title_Query5}
        subheader={Third_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Third_Image_Query5}
        title = {Third_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Third_Link_Query5} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Whole_Logo" 
            src={Fourth_Logo_Query5} 
            className={classes.bigAvatar} 
            />
        }
        action={
          <IconButton aria-label="settings" onClick={onCloseQuery5Card4}>
            <CloseIcon />
          </IconButton>
        }
        title={Fourth_Title_Query5}
        subheader={Fourth_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Fourth_Image_Query5}
        title = {Fourth_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Link href={Fourth_Link_Query5} className={classes.link}>
            Link to Product
            <IconButton>
              <LaunchIcon style={{fontSize:15}}/>
            </IconButton>
          </Link>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon/> 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Enter more details here.
          </Typography>
          <Typography paragraph>
            Add some more details here.
          </Typography>
          <Typography paragraph>
            We can add some more details here.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
        </Grid>
      </Grid>  
    </div>
    }
    </div>
      );
   }

export default App;
