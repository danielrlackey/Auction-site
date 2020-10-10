import React from "react";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SellItemForm from "./SellItemForm.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./SellItemPage.styles.js"

const SellItemPage = (props) => {

    const { classes } = props

    return (
        <div className={classes.background}>
            <Navbar />
            <div className={classes.header}>
                <p>This is the page where stuff is sold</p> 
                <Link 
                to="/"
                className={classes.link}
                >
                Home
                </Link>
            </div>
            <div className={classes.form}>
                <SellItemForm
                    className={classes.mainForm}
                 />
            </div>
            
            <FooterPage />
        </div>
    );
}

export default (withStyles(styles, {withTheme: false})(SellItemPage));