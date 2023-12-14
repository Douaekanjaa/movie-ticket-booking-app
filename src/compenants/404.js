import React from 'react';

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>404 - Not Found</h1>
    <p style={styles.message}>Oops! The page you are looking for doesn't exist.</p>
  </div>
);



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#282c34',
    color: '#61dafb',
  },
  heading: {
    color: 'red',
    fontSize: '4rem', 
    margin: '0',
  },
  message: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
};

export default NotFound;
