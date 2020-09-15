import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// styles below need to be separated later
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
}));

const Navbar = (props) => {


  const classes = useStyles();
  const {setSideBarMenuOpen} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={()=>setSideBarMenuOpen(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FightAuction
          </Typography>
          <NavLink to="browse-items" className={classes.link}>
          <Button color="inherit">Browse</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;