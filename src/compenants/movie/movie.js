import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './movie.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/movieData.json');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    return (
      (filter === 'all' || (filter === 'available' && movie.dispo === 'true')) &&
      (searchTerm === '' ||
        (movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (movie.category && movie.category.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  });

  return (
    <div className="movie-container4">
      <div className="filter-section">
        <label className='lb4'>Filter:</label>
        <select value={filter} className='sl4' onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="available">Available</option>
        </select>
        <label className='lb4'>Search:</label>
        <input
          type="text"
          className='ip4'
          placeholder="Search by title or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='bt4' onClick={() => setSearchTerm('')}>Clear</button>
      </div>
      <div className="movies-section4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie4">
            <div className='movie-img4'>
              <img src={movie.imageUrl} alt={movie.title} className="movie-img4" />
            </div>
            <div className="movie-details4">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              {movie.dispo === 'true' ? (
                <Link to={`/buy-ticket/${movie.id}`}>
                  <button className="buy-ticket-btn4">Buy Ticket</button>
                </Link>
              ) : (
                <button className="notify-btn4">Notify Me</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
