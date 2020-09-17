import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import {styles} from "./SideBarMenu.styles.js";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navbar = (props) => {

  const {setSideBarMenuOpen, classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
              onClick={()=>setSideBarMenuOpen(true)} 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu">
          <MenuIcon />
          </IconButton>
          <Typography 
              variant="h6" 
              className={classes.title}
          >
              FightAuction
          </Typography>
          <NavLink 
              to="browse-items" 
              className={classes.link}>
          <Button 
            className={classes.btnColor}
              >Browse
          </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);