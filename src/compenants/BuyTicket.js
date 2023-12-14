import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import nowShowingMovies from './nowshowing/data.json';
import { addToPurchaseHistory } from './reducers/action';
import Seat from './Seats/Seat';
import './BuyTicket.css'

const BuyTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieDetails = nowShowingMovies.find((movie) => movie.id === parseInt(id, 10));

  const { title, price, imageUrl, description, language, showtimes, duration, date } = movieDetails;

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedShowtime, setSelectedShowtime] = useState(showtimes[0]);
  const [selectedDate, setSelectedDate] = useState(date[0]);

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(parseInt(e.target.value, 10));
  };

  const handleShowtimeChange = (e) => {
    setSelectedShowtime(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePurchase = () => {
    if (movieDetails) {
      const { id, title, price } = movieDetails;
      dispatch(addToPurchaseHistory({ id, title, price, quantity: ticketQuantity, showtime: selectedShowtime, date: selectedDate }));
      navigate('/purchase-history');
    } else {
      alert('Movie details not available');
    }
  };

  return (
    <div className="buy-ticket-container">
      <h2>{title}</h2>
      <img src={process.env.PUBLIC_URL +imageUrl} alt={title} className="movie-image9" />

      <div className="movie-details">
        <p className='p56'>{description}</p>
        <p className='p56'>Language: {language}</p>
        <p className='p56'>Date:</p>
        <select value={selectedDate} onChange={handleDateChange} className="selc77">
          {date.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        <p className='p56'>Showtimes:</p>
        <select value={selectedShowtime} onChange={handleShowtimeChange} className="selc77">
          {showtimes.map((showtime) => (
            <option key={showtime} value={showtime}>
              {showtime}
            </option>
          ))}
        </select>
        <p className='p56'>Chose Your Seat:</p>
        <Seat />
        <p className='p56'>Duration: {duration}</p>
        <p className='p56'>Price: {price} Dh</p>
      </div>

      <form onSubmit={handlePurchase} className="purchase-form">
        <label htmlFor="quantity" id='qt2'>Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={ticketQuantity}
          onChange={handleTicketQuantityChange}
          className="quantity-input"
        />
        <button type="submit" className="purchase-button">
          Purchase Ticket
        </button>
      </form>
    </div>
  );
};

export default BuyTicket;
