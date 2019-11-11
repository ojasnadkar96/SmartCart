
//front end code using material UI

import React, {Component} from 'react';
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
  const [Amazon_Title,set_Amazon_Title] = React.useState("Not Found");
  const [Amazon_Price,set_Amazon_Price] = React.useState(" - ");
  const [Amazon_Link,set_Amazon_Link] = React.useState(" - ");
  const [Walmart_Title,set_Walmart_Title] = React.useState("Not Found");
  const [Walmart_Price,set_Walmart_Price] = React.useState(" - ");
  const [Walmart_Link,set_Walmart_Link] = React.useState(" - ");
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
  };

  const handleDelete2 = () => {
    set_Search_Query2(null);
  };

  const handleDelete3 = () => {
    set_Search_Query3(null);
  };

  const handleDelete4 = () => {
    set_Search_Query4(null);
  };

  const handleDelete5 = () => {
    set_Search_Query5(null);
  };

  const onSubmit = () => {
    alert('You clicked the submit button');
    axios.post('http://127.0.0.1:8000/findprice/',{item:"whole+milk"})
    .then(function(response){
      console.log(response);
      console.log(response.data.Walmart_Title);
      set_Amazon_Title(response.data.Amazon_Title);
      set_Amazon_Price(response.data.Amazon_Price);
      set_Amazon_Link(response.data.Amazon_Link);
      set_Walmart_Title(response.data.Walmart_Title);
      set_Walmart_Price(response.data.Walmart_Price);
      set_Walmart_Link(response.data.Walmart_Link);
    })
    .catch(function(error){
      console.log(error);
    })

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
      if(len ===5)
        set_Search_Query5(query[4]);   
    }
  };

  // componentDidMount(){
  //   this.callBackendAPI()
  //   .then(res => this.setState({data:res.express}))
  //   .catch(err => console.log(err));
  // }

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status!==200){
      throw Error(body.message);
    }
    console.log(body.express);
    return body;

  };

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
        title = {Amazon_Title}
        subheader={Amazon_Price}
      />
      <CardMedia
        className={classes.media}
        //image = {{uri:'https://m.media-amazon.com/images/I/51q509vv--L._AC_UL320_ML3_.jpg'}}
        image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/1.jpg")}
        title={Amazon_Title}  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Amazon_Link}
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
        title={Walmart_Title}
        subheader={Walmart_Price}
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/2.jpg")}
        title={Walmart_Title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Walmart_Link}
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/3.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/SmartCart/front-end/src/4.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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

    {/* --------------------------------------------------------------------------------------------------
     */}

    {/* <br></br>
    <br></br>
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/react-example/src/1.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/react-example/src/2.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/react-example/src/3.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/react-example/src/4.jpg")}
        title="Lamborghini"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          We will enter the details about the product here in this section
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
    </div> */}

    </div>
      );
   }

export default App;
