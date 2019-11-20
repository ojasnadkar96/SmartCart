
//front end code using material UI

import React from 'react';
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
import { red } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
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
    '& > *': {
      margin: theme.spacing(0.5),
  },
},
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));

function App(){

  const [Search_Query,set_Search_Query] = React.useState(null);
  const [Search_Query1,set_Search_Query1] = React.useState(null);
  const [Search_Query2,set_Search_Query2] = React.useState(null);
  const [Search_Query3,set_Search_Query3] = React.useState(null);
  const [Search_Query4,set_Search_Query4] = React.useState(null);
  const [Search_Query5,set_Search_Query5] = React.useState(null);

  const [Amazon_Title_Query1,set_Amazon_Title_Query1] = React.useState("Not Found");
  const [Amazon_Price_Query1,set_Amazon_Price_Query1] = React.useState(" - ");
  const [Amazon_Link_Query1,set_Amazon_Link_Query1] = React.useState(" - ");
  const [Amazon_Image_Query1,set_Amazon_Image_Query1] = React.useState(" - ");
  const [Walmart_Title_Query1,set_Walmart_Title_Query1] = React.useState("Not Found");
  const [Walmart_Price_Query1,set_Walmart_Price_Query1] = React.useState(" - ");
  const [Walmart_Link_Query1,set_Walmart_Link_Query1] = React.useState(" - ");
  const [Walmart_Image_Query1,set_Walmart_Image_Query1] = React.useState(" - ");
  const [Target_Title_Query1,set_Target_Title_Query1] = React.useState("Not Found");
  const [Target_Price_Query1,set_Target_Price_Query1] = React.useState(" - ");
  const [Target_Link_Query1,set_Target_Link_Query1] = React.useState(" - ");
  const [Target_Image_Query1,set_Target_Image_Query1] = React.useState(" - ");
  const [Costco_Title_Query1,set_Costco_Title_Query1] = React.useState("Not Found");
  const [Costco_Price_Query1,set_Costco_Price_Query1] = React.useState(" - ");
  const [Costco_Link_Query1,set_Costco_Link_Query1] = React.useState(" - ");
  const [Costco_Image_Query1,set_Costco_Image_Query1] = React.useState(" - ");
  
  const [Amazon_Title_Query2,set_Amazon_Title_Query2] = React.useState("Not Found");
  const [Amazon_Price_Query2,set_Amazon_Price_Query2] = React.useState(" - ");
  const [Amazon_Link_Query2,set_Amazon_Link_Query2] = React.useState(" - ");
  const [Amazon_Image_Query2,set_Amazon_Image_Query2] = React.useState(" - ");
  const [Walmart_Title_Query2,set_Walmart_Title_Query2] = React.useState("Not Found");
  const [Walmart_Price_Query2,set_Walmart_Price_Query2] = React.useState(" - ");
  const [Walmart_Link_Query2,set_Walmart_Link_Query2] = React.useState(" - ");
  const [Walmart_Image_Query2,set_Walmart_Image_Query2] = React.useState(" - ");
  const [Target_Title_Query2,set_Target_Title_Query2] = React.useState("Not Found");
  const [Target_Price_Query2,set_Target_Price_Query2] = React.useState(" - ");
  const [Target_Link_Query2,set_Target_Link_Query2] = React.useState(" - ");
  const [Target_Image_Query2,set_Target_Image_Query2] = React.useState(" - ");
  const [Costco_Title_Query2,set_Costco_Title_Query2] = React.useState("Not Found");
  const [Costco_Price_Query2,set_Costco_Price_Query2] = React.useState(" - ");
  const [Costco_Link_Query2,set_Costco_Link_Query2] = React.useState(" - ");
  const [Costco_Image_Query2,set_Costco_Image_Query2] = React.useState(" - ");

  const [Amazon_Title_Query3,set_Amazon_Title_Query3] = React.useState("Not Found");
  const [Amazon_Price_Query3,set_Amazon_Price_Query3] = React.useState(" - ");
  const [Amazon_Link_Query3,set_Amazon_Link_Query3] = React.useState(" - ");
  const [Amazon_Image_Query3,set_Amazon_Image_Query3] = React.useState(" - ");
  const [Walmart_Title_Query3,set_Walmart_Title_Query3] = React.useState("Not Found");
  const [Walmart_Price_Query3,set_Walmart_Price_Query3] = React.useState(" - ");
  const [Walmart_Link_Query3,set_Walmart_Link_Query3] = React.useState(" - ");
  const [Walmart_Image_Query3,set_Walmart_Image_Query3] = React.useState(" - ");
  const [Target_Title_Query3,set_Target_Title_Query3] = React.useState("Not Found");
  const [Target_Price_Query3,set_Target_Price_Query3] = React.useState(" - ");
  const [Target_Link_Query3,set_Target_Link_Query3] = React.useState(" - ");
  const [Target_Image_Query3,set_Target_Image_Query3] = React.useState(" - ");
  const [Costco_Title_Query3,set_Costco_Title_Query3] = React.useState("Not Found");
  const [Costco_Price_Query3,set_Costco_Price_Query3] = React.useState(" - ");
  const [Costco_Link_Query3,set_Costco_Link_Query3] = React.useState(" - ");
  const [Costco_Image_Query3,set_Costco_Image_Query3] = React.useState(" - ");

  const [Amazon_Title_Query4,set_Amazon_Title_Query4] = React.useState("Not Found");
  const [Amazon_Price_Query4,set_Amazon_Price_Query4] = React.useState(" - ");
  const [Amazon_Link_Query4,set_Amazon_Link_Query4] = React.useState(" - ");
  const [Amazon_Image_Query4,set_Amazon_Image_Query4] = React.useState(" - ");
  const [Walmart_Title_Query4,set_Walmart_Title_Query4] = React.useState("Not Found");
  const [Walmart_Price_Query4,set_Walmart_Price_Query4] = React.useState(" - ");
  const [Walmart_Link_Query4,set_Walmart_Link_Query4] = React.useState(" - ");
  const [Walmart_Image_Query4,set_Walmart_Image_Query4] = React.useState(" - ");
  const [Target_Title_Query4,set_Target_Title_Query4] = React.useState("Not Found");
  const [Target_Price_Query4,set_Target_Price_Query4] = React.useState(" - ");
  const [Target_Link_Query4,set_Target_Link_Query4] = React.useState(" - ");
  const [Target_Image_Query4,set_Target_Image_Query4] = React.useState(" - ");
  const [Costco_Title_Query4,set_Costco_Title_Query4] = React.useState("Not Found");
  const [Costco_Price_Query4,set_Costco_Price_Query4] = React.useState(" - ");
  const [Costco_Link_Query4,set_Costco_Link_Query4] = React.useState(" - ");
  const [Costco_Image_Query4,set_Costco_Image_Query4] = React.useState(" - ");

  const [Amazon_Title_Query5,set_Amazon_Title_Query5] = React.useState("Not Found");
  const [Amazon_Price_Query5,set_Amazon_Price_Query5] = React.useState(" - ");
  const [Amazon_Link_Query5,set_Amazon_Link_Query5] = React.useState(" - ");
  const [Amazon_Image_Query5,set_Amazon_Image_Query5] = React.useState(" - ");
  const [Walmart_Title_Query5,set_Walmart_Title_Query5] = React.useState("Not Found");
  const [Walmart_Price_Query5,set_Walmart_Price_Query5] = React.useState(" - ");
  const [Walmart_Link_Query5,set_Walmart_Link_Query5] = React.useState(" - ");
  const [Walmart_Image_Query5,set_Walmart_Image_Query5] = React.useState(" - ");
  const [Target_Title_Query5,set_Target_Title_Query5] = React.useState("Not Found");
  const [Target_Price_Query5,set_Target_Price_Query5] = React.useState(" - ");
  const [Target_Link_Query5,set_Target_Link_Query5] = React.useState(" - ");
  const [Target_Image_Query5,set_Target_Image_Query5] = React.useState(" - ");
  const [Costco_Title_Query5,set_Costco_Title_Query5] = React.useState("Not Found");
  const [Costco_Price_Query5,set_Costco_Price_Query5] = React.useState(" - ");
  const [Costco_Link_Query5,set_Costco_Link_Query5] = React.useState(" - ");
  const [Costco_Image_Query5,set_Costco_Image_Query5] = React.useState(" - ");

  const [result1,set_Result1] = React.useState(null);
  const [result2,set_Result2] = React.useState(null);
  const [result3,set_Result3] = React.useState(null);
  const [result4,set_Result4] = React.useState(null);
  const [result5,set_Result5] = React.useState(null);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
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

  const onSubmit = () => {
    alert('You clicked the submit button');
    
    if(Search_Query1 !== null)
    {
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
        set_Costco_Title_Query1(response.data.Costco_Title);
        set_Costco_Price_Query1(response.data.Costco_Price);
        set_Costco_Link_Query1(response.data.Costco_Link);
        set_Costco_Image_Query1(response.data.Costco_Image);
        set_Result1(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query2 !== null)
    {
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
        set_Costco_Title_Query2(response.data.Costco_Title);
        set_Costco_Price_Query2(response.data.Costco_Price);
        set_Costco_Link_Query2(response.data.Costco_Link);
        set_Costco_Image_Query2(response.data.Costco_Image);
        set_Result2(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query3 !== null)
    {
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
        set_Costco_Title_Query3(response.data.Costco_Title);
        set_Costco_Price_Query3(response.data.Costco_Price);
        set_Costco_Link_Query3(response.data.Costco_Link);
        set_Costco_Image_Query3(response.data.Costco_Image);
        set_Result3(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query4 !== null)
    {
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
        set_Costco_Title_Query4(response.data.Costco_Title);
        set_Costco_Price_Query4(response.data.Costco_Price);
        set_Costco_Link_Query4(response.data.Costco_Link);
        set_Costco_Image_Query4(response.data.Costco_Image);
        set_Result4(true);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    if(Search_Query5 !== null)
    {
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
        set_Costco_Title_Query5(response.data.Costco_Title);
        set_Costco_Price_Query5(response.data.Costco_Price);
        set_Costco_Link_Query5(response.data.Costco_Link);
        set_Costco_Image_Query5(response.data.Costco_Image);
        set_Result5(true);
      })
      .catch(function(error){
        console.log(error);
      })
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

  const CardStyleAmazon = {
    height: 32,
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
      <div className="App">
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
      <AppBar className={classes.appbar} position="static">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit">
            Smart Shopping Assistant
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <br></br>
    <br></br>
      <div>
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Search"
        style={{ margin: 14 }}
        placeholder="Enter the items here"
        helperText="*Required"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange = {onInputChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
      <div>
      <Button variant="contained" color="primary" style={{ margin: 18 }} onClick = {onAdd}>
        Add Item
      </Button>
      </div>
      <div>
      <h2>List of items</h2>
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
      <Button variant="contained" color="primary" style={{ margin: 18 }} onClick = {onSubmit}>
        Submit
      </Button>
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Amazon_Title_Query1}
        subheader={Amazon_Price_Query1}
      />
      <CardMedia 
        className={classes.media} 
        title={Amazon_Title_Query1} 
        image = {Amazon_Image_Query1}
        /> 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link_Query1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Walmart_Title_Query1}
        subheader={Walmart_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Walmart_Image_Query1}
        title = {Walmart_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link_Query1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Target_Title_Query1}
        subheader={Target_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Target_Image_Query1}
        title = {Target_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Target_Link_Query1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Costco_Title_Query1}
        subheader={Costco_Price_Query1}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Costco_Image_Query1}
        title = {Costco_Title_Query1}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Costco_Link_Query1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {Amazon_Title_Query2}
        subheader={Amazon_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://via.placeholder.com/350x150'}}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {Amazon_Image_Query2}
        title = {Amazon_Title_Query2}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link_Query2}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Walmart_Title_Query2}
        subheader={Walmart_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Walmart_Image_Query2}
        title = {Walmart_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link_Query2}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Target_Title_Query2}
        subheader={Target_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Target_Image_Query2}
        title = {Target_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Target_Link_Query2}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Costco_Title_Query2}
        subheader={Costco_Price_Query2}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Costco_Image_Query2}
        title = {Costco_Title_Query2}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Costco_Link_Query2}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {Amazon_Title_Query3}
        subheader={Amazon_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {Amazon_Image_Query3}
        title = {Amazon_Title_Query3}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link_Query3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Walmart_Title_Query3}
        subheader={Walmart_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Walmart_Image_Query3}
        title = {Walmart_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link_Query3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Target_Title_Query3}
        subheader={Target_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Target_Image_Query3}
        title = {Target_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Target_Link_Query3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Costco_Title_Query3}
        subheader={Costco_Price_Query3}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Costco_Image_Query3}
        title = {Costco_Title_Query3}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Costco_Link_Query3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {Amazon_Title_Query4}
        subheader={Amazon_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {Amazon_Image_Query4}
        title = {Amazon_Title_Query4}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link_Query4}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Walmart_Title_Query4}
        subheader={Walmart_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Walmart_Image_Query4}
        title = {Walmart_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link_Query4}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Target_Title_Query4}
        subheader={Target_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Target_Image_Query4}
        title = {Target_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Target_Link_Query4}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Costco_Title_Query4}
        subheader={Costco_Price_Query4}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Costco_Image_Query4}
        title = {Costco_Title_Query4}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Costco_Link_Query4}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {Amazon_Title_Query5}
        subheader={Amazon_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        image = {Amazon_Image_Query5}
        title = {Amazon_Title_Query5}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link_Query5}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Walmart_Title_Query5}
        subheader={Walmart_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        image = {Walmart_Image_Query5}
        title = {Walmart_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link_Query5}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Target_Title_Query5}
        subheader={Target_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        image = {Target_Image_Query5}
        title = {Target_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Target_Link_Query5}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Costco_Title_Query5}
        subheader={Costco_Price_Query5}
      />
      <CardMedia
        className={classes.media}
        //image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        image = {Costco_Image_Query5}
        title = {Costco_Title_Query5}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Costco_Link_Query5}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </Collapse>
    </Card>
        </Grid>
      </Grid>  
    </div>
    }
    </div>
      );
   }

export default App;
