
import React, { useState, useEffect } from 'react';
import './FirstSlider.css';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const movies = [
  {
    id: 1,
    title: 'Avengers Endgame',
    date: '2023-01-01',
    details: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
    imageUrl: `${process.env.PUBLIC_URL}/images/avengers_endgame_cv1.png`,
    type: 'Action',
    duration: '2h 30m',
    videoId: 'TcMBFSGVi1c',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    date: '2023-06-21',
    details: 'A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bomb, thus helping end World War 2. We see his life from university days all the way to post-WW2, where his fame saw him embroiled in political machinations.',
    imageUrl: `${process.env.PUBLIC_URL}/images/oppenheimer_cv1.png`,
    type: 'Thriller/Thriller',
    duration: '3h 00m',
    videoId: 'uYPbbksJxIg',
  },
  {
    id: 5,
    title: 'Inception',
    date: '2010-07-08',
    details: 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.',
    imageUrl: `${process.env.PUBLIC_URL}/images/inception_cv1.png`,
    type: 'Sci-fi/Action',
    duration: '2h 28m',
    videoId: 'YoHD9XEInc0',
  },
  {
    id: 6,
    title: 'Interstellar',
    date: '2023-01-15',
    details: 'In Earth\'s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth\'s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind\'s new home.',
    imageUrl: `${process.env.PUBLIC_URL}/images/interstella_cv1.png`,
    type: 'Sci-Fi',
    duration: '2h 49m',
    videoId: '2LqzF5WauAw',
  },
];

export default function FirstSlider() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentMovieIndex + 1) % movies.length;
    setCurrentMovieIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentMovieIndex - 1 + movies.length) % movies.length;
    setCurrentMovieIndex(previousIndex);
  };

  const handleWatchTrailer = () => {
    const youtubeVideoId = movies[currentMovieIndex].videoId;
    const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
    
    window.open(youtubeVideoUrl, '_blank');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(intervalId);
  }, [currentMovieIndex]);

  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-12 w-50 ">
          <div className="movie-details mt-5">
            <h1 className='mb-5'>{movies[currentMovieIndex].title}</h1>
            <p className='px-2'> <strong id='sp' >Genre</strong>: {movies[currentMovieIndex].type}</p>
            <p className='px-2'> <strong id='sp'>Duration</strong>: {movies[currentMovieIndex].duration}</p>
            <p className='px-2'> <strong id='sp'>StoryLine</strong>: {movies[currentMovieIndex].details}</p>
          </div>
          <div className='test'>
            <div className='pos2'>
              <Link to={`/buy-ticket/${movies[currentMovieIndex].id}`} id='lk'>
                <button className="buy-ticket-button ms-3 ms-md-5 px-2 px-md-5 btn ">Buy Ticket</button>
              </Link>
              <button className="buy-ticket-button btn px-md-4  mx-2 mx-md-5" onClick={handleWatchTrailer}>
                Watch Trailer
              </button>
            </div>
            <div className='pos1'>
              <button className="previous-button  me-3 px-2 px-md-3 py-1 py-md-2" onClick={handlePrevious}>
                {' < '}
              </button>
              <button className="next-button    px-2 px-md-3 py-1 py-md-2" onClick={handleNext}>
                {' > '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container aa">
        <img
          src={movies[currentMovieIndex].imageUrl}
          alt={movies[currentMovieIndex].title}
          className="movie-image img-fluid aa p-0 m-0"
        />
      </div>
    </div>
  );
}
