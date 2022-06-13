import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer"
import "./contact.css"

const Contact = () => {

    return (
        <>
            <Navbar />
            <Header type="list" />
            <div className="contact-container">
                <h1 className='title-contact'> Keep in Touch </h1>
                <div className="contact-info">
                <div className="image-contact">
                        <img src='https://lh3.googleusercontent.com/efEEvL5C3W3pmLsLdL0BWagNdNhVrXFyH1pu8XZ0mVgbwO_SleEjU59WnsbDHfgteEl2G4pCe9Exv5VvMhBRAA=w998' />
                    </div>
                    <div className="info">
                        <form id="contact">
                            <h4>Contact us for custom quote</h4>
                            <fieldset>
                                <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" tabindex="2" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                            </fieldset>
                            <fieldset>
                                <button name="submit" type="submit" data-submit="...Sending" className='btn-hover color' id='contact-btn' >Submit</button>
                            </fieldset>
                        </form>
                    </div>
                  
                </div>
            </div>
            <Footer />


        </>
    )
}

export default Contact
