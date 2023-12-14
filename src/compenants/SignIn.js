import React, { useState } from 'react';
import './signInUp.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    alert("You've signed in succefuly !");
  };

  return (
    <div className='signinup-container '>
      <h2 className='t2'>Sign In</h2>
      <form>
        <label className='lupin'>
          Email:
          <input className='ipinup' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='lupin'>
          Password:
          <input className='ipinup' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className='binup' type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
