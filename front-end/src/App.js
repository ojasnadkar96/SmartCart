
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
  
  const [data, setData] = React.useState(" ");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const onSubmit = () => {
    alert('You clicked the submit button');    
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
    setData(`${body.express}`);
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
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
      <div>
      <h2>List of items</h2>
      <Chip
        label="Item 1"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Item 2"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Item 3"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Item 4"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Item 5"
        onDelete={handleDelete}
        variant="outlined"
      />
      </div>
      <div>
      <Button variant="contained" color="primary" style={{ margin: 18 }} onClick = {callBackendAPI}>
        Submit
      </Button>
      </div>
      </div>
      <div>
        <p> Before clicking the submit button: {data} </p>
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
        title="Lamborghini"
        subheader="Target for 2022"
      />
      <CardMedia
        className={classes.media}
        image={require ("/Users/Kevin/Desktop/CapStone/express-react/frontend/src/1.jpg")}
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
        image={require ("/Users/Kevin/Desktop/CapStone/express-react/frontend/src/2.jpg")}
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
        image={require ("/Users/Kevin/Desktop/CapStone/express-react/frontend/src/3.jpg")}
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
        image={require ("/Users/Kevin/Desktop/CapStone/express-react/frontend/src/4.jpg")}
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
