import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  return (
    <div>
      <h1> welcome to home page </h1>
      <LinkContainer to={'/Body'}>
        <Button variant="outline-primary">SHOW MOVIES</Button>
      </LinkContainer>
    </div>
  )
}

export default Home