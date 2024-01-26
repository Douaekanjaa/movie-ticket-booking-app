import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgSlider from './ImgSlider';
import './DetailMovie.css';
import { Link } from 'react-router-dom'; 
import nowShowingMovies from '../nowshowing/data.json';
import Footer from '../Footer/Footer';

const DetailMovie = () => {
  const { id } = useParams();
  const [buttonColors, setButtonColors] = useState(['black', 'black', 'black', 'black', 'black']);
  const buttonLabels = ['2D', '3D', 'IMAX', 'IMAX 3D', 'CINEMA 4D'];
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = () => {
      const movie = nowShowingMovies.find((movie) => movie.id === parseInt(id, 10));
      setMovieDetails(movie);
    };

    fetchMovieDetails();
  }, [id]);

  const handleButtonClick = (index) => {
    const updatedColors = [...buttonColors];
    updatedColors[index] = updatedColors[index] === 'black' ? '#e50914' : 'black';
    setButtonColors(updatedColors);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="detail-movie">
      

      <div className="movie-details">
        <h4> <span>{movieDetails.imdbRating}</span> </h4>
        <h4 className="movie-title">{movieDetails.title}</h4>
        <p className="movie-info">{movieDetails.description}</p>
        <p className="movie-duration">Duration: {movieDetails.duration}</p>
      </div>

      <div className="movie-img">
        <img src={process.env.PUBLIC_URL +movieDetails.imageUrl} alt="movie img" />
        <Link to={`/buy-ticket/${id}`}>
          <button className="buy-ticket-button">Buy Ticket</button>
        </Link>
      </div>

      <div className="button-container">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className="color-button"
            style={{ backgroundColor: buttonColors[index] }}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </button>
        ))}
      
      </div>





      <div className="details-section">
        <div className="details">
          <h3>Details</h3>
          <hr className='hr1' />
          <div className="details-content">
            <p>COUNTRY <span>{movieDetails.country}</span></p>
            <hr />
            <p>LANGUAGE <span>{movieDetails.language}</span></p>
            <hr />
            <p>RELEASE DATE <span>{movieDetails.releaseDate}</span></p>
            <hr />
            <p>DIRECTORS <span>{movieDetails.directors ? movieDetails.directors.join(', ') : ''}</span></p>
            <hr />
          </div>
        </div>
        <div className="storyline">
          <h3>Storyline</h3>
          <hr className='hr2' />
          <div className="storyline-content">
            <p>{movieDetails.storyline}</p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="details">
          <h3>Cast</h3>
          <hr className='hr1' />
          <div className="details-content">
            {movieDetails.cast && Array.isArray(movieDetails.cast) ? (
              movieDetails.cast.map((actor, index) => (
                <p key={index}>
                  <img src={actor.image} alt="actor img" /> <span className='sp1'>{actor.name} </span>
                </p>
              ))
            ) : (
              <p>No cast information available</p>
            )}
          </div>
          <ImgSlider images={movieDetails.images} />

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DetailMovie;
