import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav>
        <div className="Footer">
            <div className="container">
            <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
                <a className="navbar-brand" href="/"><img src="" alt="" />Movie Muse</a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque hic, accusantium veniam eveniet perferendis corrupti tenetur amet accusamus consequatur possimus quisquam eum labore placeat voluptatum iure, aspernatur, unde quasi perspiciatis.</p>
            <div className="footer-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5>Quick Links</h5>
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Test 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Test 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Test 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Test 4</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h5>Quick Links</h5>
            <p><i class="fa-solid fa-phone"></i>+44 9823742935 235</p>
            <p><i class="fa-solid fa-envelope"></i>aksgfasfhasf@gmail.com</p>
            <p><i class="fa-solid fa-location-dot"></i>Birmingham, England</p>
            </div>
            </div>
            </div>
        </div>
        
        
        
        
        </>
    );
}

export default Footer