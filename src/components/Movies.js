import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


const Movies = ({aflam,search,NewRate}) => {
console.log(NewRate)
  return (
    <div className='filma'>
      {aflam.filter((element) => element && element.title && element.title.includes(search)).filter((element)=>element.rate>=NewRate).map((film)=><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={film.posterUrl} />
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Link to={`/trailer/${film.id}`}>trailer</Link>
          <Card.Text style={{overflowY: "hidden", height: "100px"}}>
            {film.description}
          </Card.Text>
          <ReactStars
            count={5}
            edit={false}
          size={24}
          value={film.rate}
          color2={'#ffd700'} />
        </Card.Body>
      </Card>)}
    </div>
  )
}

export default Movies