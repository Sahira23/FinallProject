import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import team1 from "../../images/team/team1.jpg"
import team2 from "../../images/team/team2.jpg"
import team3 from "../../images/team/team3.jpg"
import "./about.css"

const About = () => {
    return (
        <>
        <Navbar/>
        <Header/>
            <div className="about-container">
            <div class="about-section">
  <h1>About Us</h1>
  <p>We book for you</p>
  <p>You don't need spend time on searching the best hotel to you.All you need to do is entering whatever you want.</p>
</div>

<h2 className='team-title'>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={team1} alt="Jane"/>
      <div className='info-about'>
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Founder of company</p>
        <p className='about-email'>jane@example.com</p>
        <p><button class="btn-hover color about-btn">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={team2} alt="Mike" />
      <div className='info-about'>
        <h2>Sophie Brown</h2>
        <p class="title">Art Director</p>
        <p>Founder of those amazing ideas</p>
        <p className='about-email'>mike@example.com</p>
        <p><button class="btn-hover color about-btn">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={team3} alt="John"/>
      <div className='info-about'>
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>The best designs are made by her</p>
        <p className='about-email'> john@example.com</p>
        <p><button class="btn-hover color about-btn">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className='about-img'></div>
            </div>
            <Footer/>
        </>
    )
}

export default About