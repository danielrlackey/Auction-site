import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./HomePageHeader.styles.js";

const HomePageHeader = (props) => {

  const { classes } = props;

    return (
        <Jumbotron fluid>
  <Container className={classes.homePageHeader}>
    <h1>Finally a place for fight fans</h1>
    <p>
      Welcome to FightAuction a Place where fight fans can but and sell fight memorabilia!
      or you can just catch up on the latest news and rankings.
    </p>
  </Container>
</Jumbotron>
    );
}

export default (withStyles(styles, {withTheme: true})(HomePageHeader));
// export default HomePageHeader;