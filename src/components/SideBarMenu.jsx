import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./SideBarMenu.styles.js";
const SideBarMenu = (props) => {

  const {setSideBarMenuOpen,
         sell,
         facts,
         rankings,
         classes,
         sideBarMenuOpen
        } = props

  return (
    <div className={classes.sideBarMenu} >
    <Drawer 
        open={sideBarMenuOpen} 
        onClose={()=>setSideBarMenuOpen(false)
    }>
      {sell}
      {facts}
      {rankings}
      <p>Buy Sell or Browse</p>
    </Drawer>
    </div>
  );
}

export default withStyles(styles)(SideBarMenu);