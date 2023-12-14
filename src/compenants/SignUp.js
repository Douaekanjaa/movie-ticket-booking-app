import React, { useState } from 'react';
import './signInUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');
  const handleSignUp = () => {
    alert("You've signed up succefuly !");
  };

  return (
    <div  className='signinup-container '>
      <h2 className='t2'>Sign Up</h2>
      <form>
        <label className='lupin'>
          User Name :
          <input className='ipinup' type="text" value={username} onChange={(e) => setusername(e.target.value)} />
        </label>
        
        <label className='lupin'>
          Email:
          <input className='ipinup' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='lupin'>
          Password:
          <input className='ipinup' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className='binup' type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
