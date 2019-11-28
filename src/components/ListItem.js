import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import FloatingActionButtons from "./RadioButton"
import TextField from '@material-ui/core/TextField';
import useStyles from "../styles/buttonField"
import Checkbox from '@material-ui/core/Checkbox';
import SearchAppBar from "./AppBar";

const backupFilter = []
const markedMessages = [];


const BottomAppBar = props => {
  const classes = useStyles();

  const [typedText,setTypedText] = useState("")
  const [typedFilter,setTypedFilter] = useState("")
  const [message,setMessage] = useState([])


  const removeArrayElement = (id, array) =>  {
    delete array[id]
  }

  const handleChange = id => event => {
    
    if(event.target.checked){
      markedMessages.push(id)
    }else{
      removeArrayElement(id, markedMessages)
    }
  }

  const handleAddText = e => {
    setTypedText(e.target.value)
  }

  const handleDeleteText = id => {
    setTypedText(
      markedMessages.forEach(item => removeArrayElement(item, message)) || []
    )
  }

  const handleAddClick = (e) => {
    setTypedText(message.push({
      id: message.length , 
      primary: "Teste",
      secondary: typedText,
      person: ""
    }))

    setTypedText("")
  }

  const wordFIlter = (value) => {
    console.log(value.secondary.includes(typedFilter))
    return value.secondary.includes(typedFilter)
  }

  const handleFilter = e => {
    setTypedFilter(e.target.value)

      setMessage(
          message.filter(wordFIlter)
        )
    
    console.log(message)
  }

  return (
    <React.Fragment>
      <SearchAppBar onChange={handleFilter} />
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Lista de Registros
        </Typography>
        <List className={classes.list}>
          {message.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              <ListItem button>
                  <Checkbox
                        onChange={handleChange(id)}
                        value={true}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
        </Toolbar>
        <div className={classes.includeBox}>
        <TextField 
                id="outlined-search"
                label="Digite o registro"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="filled"
                onChange={handleAddText}
                value={typedText}
            />
        </div>
        <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handleAddClick}>
            <AddIcon />
        </Fab>
        <FloatingActionButtons onClick={handleDeleteText}/>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomAppBar