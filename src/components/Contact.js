import React from "react"
import "./Contact.css"

import phoneImage from '../assets/imgs/phone.png';
import emailImage from '../assets/imgs/email.png';
import linkedinImage from '../assets/imgs/linkedin.png';
import githubImage from '../assets/imgs/github.png';

function Contact() {
    return (
        <section id="contact">
        <h1>Contact</h1>
        <form className="contact-form" id="contact-form" data-aos="fade-left" data-netlify="true">
            <input type="text" id="name" name="name" placeholder="Name*" required></input>
            <input type="email" id="email" name="email" placeholder="Email*" required></input>
            <textarea id="message" placeholder="Message*" required></textarea>
            <button type="submit" className="button">Submit Form</button>
        </form>
        <br></br>
        <div id="contact-container" className="contact" data-aos="fade-right">
            <div className="method">
                <p><a href="tel:2268993921" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                    <img id="phone" className="invert mb-4" alt="Call my Phone Number" src={phoneImage}/>
                    (226) 899-3921
                </a></p>
            </div>
            <div className="method">
                <p><a href="mailto:kakpovbia.jiro@gmail.com" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                    <img id="email" className="invert mb-4" alt="Send me an Email" src={emailImage}/>
                    kakpovbia.jiro@gmail.com
                </a></p>
            </div>
            <div className="method">
                <p><a href="https://linkedin.com/in/jiro-kakpovbia" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                    <img id="linkedin" className="invert mb-4" alt="Visit my LinkedIn" src={linkedinImage}/>
                    jiro-kakpovbia
                </a></p>
            </div>
            <div className="method">
                <p><a href="https://github.com/JiroKakpovbia" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                    <img id="github" className="invert mb-4" alt="Visit my GitHub" src={githubImage}/>
                    JiroKakpovbia
                </a></p>
            </div>
        </div>
    </section>
    )
}

export default Contact;
