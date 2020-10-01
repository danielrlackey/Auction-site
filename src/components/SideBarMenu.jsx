import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {styles} from "./SideBarMenu.styles.js";
import { withStyles } from '@material-ui/core/styles';



const SideBarMenu = (props) => {

  const {setSideBarMenuOpen,
         sell,
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
      {rankings}
      <p>Buy Sell or Browse</p>
    </Drawer>
    </div>
  );
}

export default withStyles(styles)(SideBarMenu);