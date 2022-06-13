import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./toursItem.css";
import AOS from "aos";

const ToursItem = ({item}) => {
  useEffect(()=>{
    AOS.init()
  },2000)
  return (
    <div className='tour' data-aos="fade-up">
     <img src={item.photos[0]} alt="" className="tiImg" />
      <div className="tiDesc">
        <h1 className="tiTitle">{item.name}</h1>
        <span className="tiTaxiOp">Free airport taxi</span>
        <span className="tiSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="tiFeatures">{item.desc}</span>
        <span className="tiCancelOp">Free cancellation </span>
        <span className="tiCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="tiDetails">
        {item.rating && <div className="tiRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="tiDetailTexts">
          <span className="tiPrice">${item.price}</span>
          <span className="tiTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="tiCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ToursItem
