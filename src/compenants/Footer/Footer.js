import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='foot'>
                <div className="container">
                    <div className="row display-flex">
                        <div className="col-md-5 col-11  ft-1">
                           <img src={`${process.env.PUBLIC_URL}/cinema.png`} alt="logo" className="logoF"/>
                            <p style={{ width: "80%" }}>Dive into cinematic enchantment with us! 🍿✨ Book tickets effortlessly, select prime seats, and indulge in the magic of movies. Cinema Ticket Booking — where each visit unfolds a story on the big screen. 🎬🎟️🌟</p>
                            <div className="footer-icons">
                                <img src={`${process.env.PUBLIC_URL}/fb.png`} alt="fb" className="ic"/>
                                <img src={`${process.env.PUBLIC_URL}/x.png`} alt="x" className="ic"/>
                                <img src={`${process.env.PUBLIC_URL}/ig.png`} alt="ig" className="ic"/>
                                <img src={`${process.env.PUBLIC_URL}/in.png`} alt="in" className="ic"/>
                            </div>
                        </div> 
                        <div className="col-md-3 col-11 ft-2">
                            <h5 className='cl'>Quick Links</h5>
                            <ul>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">About US</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">History</a></li>
                                <li><a href="/">News</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-11 ft-3">
                            <h5 className='cl'>Contact Info</h5>
                            <ul>
                                <li> <a href="tel:+212 6121324083">+212 6121324083</a></li>
                                <li> <a href="mailto:cine@gmail.com">cine@gmail.com</a></li>
                               
                            </ul>
                            <h5 className='cl'>Locations</h5>
                            <ul>
                                <li> <a href='#'>Tangier, Morocco.</a> </li>
                                <li> <a href='#'>Casablanca, Morocco.</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright © 2023 <a href="">Ciné</a> - All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
