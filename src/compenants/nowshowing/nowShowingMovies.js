import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './nowShowingMovies.css';
import nowShowingMovies from './data.json';


const formatShowtimes = (showtimes) =>
  showtimes.map((time) => (
    <span key={time} className="showtime">
      {time}
    </span>
  ));


const NowShowing = () => (
  <div>
    <div className='div1'>
      <h2 data-text="Now Showing">Now Showing</h2>
    </div>

    <hr style={{ color: "red" }} />
    <div className="now-showing-container justify-content-center justify-content-md-start">
      {nowShowingMovies.map((movie) => (
        <Card key={movie.id} className="movie-card1 my-2 my-md-4 mx-0 mx-md-4">
          <Card.Img className="movie-image" variant="top" src={process.env.PUBLIC_URL + movie.imageUrl} alt={movie.title} />

          <div className="movie-details">
            <Link to={`/movie/${movie.id}`} id='lk'>
              <Card.Title className='title1'>{movie.title}</Card.Title>
            </Link>
            <div className='movie-dt2'>
              <Card.Text className='card-text'>
                <strong id='sh'>Showtimes:</strong> {formatShowtimes(movie.showtimes)}
              </Card.Text>
              <Link to={`/buy-ticket/${movie.id}`} id='lk'>
                <Button variant="primary" id="buy1">Buy Ticket</Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  
  </div>
);

export default NowShowing;
