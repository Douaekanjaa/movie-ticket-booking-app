import React from 'react';
import { useSelector } from 'react-redux';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const purchaseHistory = useSelector((state) => state.purchaseHistory);

  return (
    <div className="purchase-history-container">
      <h2 className="purchase-history-heading">Your Purchase History</h2>
      <ul className="purchase-history-list">
        {purchaseHistory.map((item) => (
          <li key={item.id} className="purchase-history-item">
            {item.title}
            <span className="purchase-history-details">
              Quantity: {item.quantity}<br />
              Price: {item.price * item.quantity} Dh<br />
              Date: {item.date}<br />
              Time: {item.showtime}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseHistory;
