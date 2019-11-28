import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      float: "left",
      zIndex: 1,
      top: -30,
      left: 1100,
      right: 0,
      margin: '0 auto',
      backgroundColor: "green"
    },
    includeBox: {
      position: 'absolute',
      float: "left",
      zIndex: 1,
      top: -45,
      left: 30,
      right: 0,
      margin: '0 auto',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 1150,
      backgroundColor: "white"
    },
  }));

  export default useStyles