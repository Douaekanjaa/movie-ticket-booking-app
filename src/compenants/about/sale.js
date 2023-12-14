import React from 'react';
import './sale.css'; 

const Sale = () => {
  return (
    <div className='sale-container'>
      <h2 className='sale-title'>Holiday Promotions</h2>

      <div className='sale-list'>
        <div className='sale-item'>
          <div className='sale-card'>
            <div className='sale-content'>
              <h5 className='sale-holiday'>New Year Sale!</h5>
              <p className='sale-promotion'>20% Off All Tickets</p>
              <p className='sale-dates'>
                <strong>Start Date:</strong> 2023-01-01 <br />
                <strong>End Date:</strong> 2023-01-05
              </p>
            </div>
          </div>
        </div>

        <div className='sale-item'>
          <div className='sale-card'>
            <div className='sale-content'>
              <h5 className='sale-holiday'>Special Event</h5>
              <p className='sale-promotion'>Buy One Get One Free</p>
              <p className='sale-dates'>
                <strong>Start Date:</strong> 2023-02-14 <br />
                <strong>End Date:</strong> 2023-02-14
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
