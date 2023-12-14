import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='foot'>
        <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><img src="./NisDua.png" alt="logo" className="logoF"/></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <img src="./fb.png" alt="fb" className="ic"/>
                                <img src="./x.png" alt="x" className="ic"/>
                                <img src="./ig.png" alt="ig" className="ic"/>
                                <img src="./in.png" alt="in" className="ic"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">About US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">News</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3" >
                            <h5>Quick Links</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +212 6121324083</p>
                            <p><i className="fa-solid fa-envelope"></i> NisDuaaa@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Tangier, Morocco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className='Last-footer'>
                <p>Copyright © 2023 <a href="">NisDua</a> - All rights reserved</p>
            </div>
        </>
    )
}

export default Footer