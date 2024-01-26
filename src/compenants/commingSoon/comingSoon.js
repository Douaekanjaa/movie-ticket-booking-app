// comingSoon.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './comingSoon.css';
import comingSoonMovies from './comingSoonData.json';


export default function comingSoon() {
  return (
    <div>
      <div className='div1'>
        <h2 data-text="Coming Soon">Coming Soon</h2>
      </div>
      
      <hr style={{width:"100% !important"}} />  
      <div className="coming-soon-container justify-content-center justify-content-md-start ">
        {comingSoonMovies.map((movie) => (
          <Card key={movie.id} className="movie-card2 my-2 my-md-4 mx-0 mx-md-4">

            <div className="card-inner">
              <div className="card-face front">
                <Card.Img className="movie-image2" variant="top" src={process.env.PUBLIC_URL +movie.imageUrl} alt={movie.title} />
                <div className="movie-details2">
                  <Card.Title className='title1'>{movie.title}</Card.Title>
                  <div className='movie-dt2'>
                    <Card.Text className='card-text' >
                      <strong id='release'>Release Date:</strong> {movie.releaseDate}
                    </Card.Text>
                    <Button variant="primary" id="notify">Notify Me</Button>
                  </div>
                </div>
              </div>

              <div className="card-face back p-2">
                <Card.Text className='card-text' style={{textAlign: "left"}}><strong>Story Line:</strong>{movie.description}</Card.Text>
                <Button variant="primary" id="notify">Notify Me</Button>
              </div>
            </div>
            
          </Card>
        ))}
      </div>
    </div>
  )
}
