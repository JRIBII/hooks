import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from 'react-stars';
import { Data } from '../Data';
import AddMovie from './AddMovie';

const MyNavbar = ({ getMovie, getSearch, getRate }) => {


  const [movies, setMovies] = useState(Data)
  const zidMovie = (newMovie) => {
    getMovie(newMovie)
  }


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <AddMovie zidMovie={zidMovie} />
            </Nav>
          <ReactStars
            count={5}
            size={24}
            value={0}
            color2={'#ffd700'}
              onChange={getRate}/>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>getSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar