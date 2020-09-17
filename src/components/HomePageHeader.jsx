import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const HomePageHeader = () => {

    return (
        <Jumbotron fluid>
  <Container>
    <h1>A place for fight fans!</h1>
    <p>
      finally a place to buy and sell fight memorabilia!
    </p>
  </Container>
</Jumbotron>
    );
}

export default HomePageHeader;