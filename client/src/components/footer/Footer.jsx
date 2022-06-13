import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div>
            <img src="" alt="" />


          </div>

          <div className='footer-container' >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="logo">SahraBooking</span>
            </Link>
           <p className='footer-info'>Don't waste time on searching hotels during travel.Search whatever you want get list of hotels that fits your wants.Get rewarded for your travels – unlock instant savings of 10% or more with a free SahraBooking account</p>
            <ul class="footer-links">
              <li><Link className='link link-f' to="/">Stays</Link></li>
              <li><Link className='link link-f' to="/tours">Tours</Link></li>
              <li><Link className='link link-f' to="/contact">Contact Us</Link></li>
              <li><Link className='link link-f' to="about">Abouts us</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer