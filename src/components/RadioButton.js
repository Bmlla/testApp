import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: 1340,
        top: -30,
        backgroundColor: "red",
        position: 'absolute',
        zIndex: 1,
        margin: '0 auto',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Fab color="primary" aria-label="add" onClick={props.onClick}>
          <DeleteIcon />
        </Fab>
      </div>
    );
  }