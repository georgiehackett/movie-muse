import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/project2logoupdated.gif'

function Footer() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav>
        <div className="Footer">
            <div className="container">
            <a className="navbar-brand" href="#">
            <img src={Logo} width="250" height="100" />
            </a>
            <div className="row">    
            <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h5><u>About</u></h5>
                <p>At MovieMuse, we believe in the magic of cinema and the power of storytelling. Our platform is more than just a place to watch movies; it's a cinematic journey designed for film enthusiasts, casual viewers, and everyone in between.</p>
            <div className="footer-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5><u>Quick Links</u></h5>
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Top Rated</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Upcoming</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Now Playing</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-3">
            <h5><u>Contact</u></h5>
            <p><i className="fa-solid fa-phone"></i>+44 9823742935 235</p>
            <p><i className="fa-solid fa-envelope"></i>aksgfasfhasf@gmail.com</p>
            <p><i className="fa-solid fa-location-dot"></i>Birmingham, England</p>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Footer