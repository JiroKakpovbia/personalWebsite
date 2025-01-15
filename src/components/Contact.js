import React from "react"
import "./Contact.css"

import phoneImage from '../assets/phone.png';
import emailImage from '../assets/email.png';
import linkedinImage from '../assets/linkedin.png';
import githubImage from '../assets/github.png';

function Contact() {
    return (
        <section id="contact">
        <h1>Contact</h1>
        <form className="contact-form" data-aos="fade-left" data-netlify="true">
            <input type="text" name="name" autoComplete="name" placeholder="Name*" required></input>
            <input type="email" name="email" autoComplete="email" placeholder="Email*" required></input>
            <textarea name="message" placeholder="Message*" required></textarea>
            <button type="submit" className="button">Submit Form</button>
        </form>
        <br></br>
        <div id="contact-container" className="contact" data-aos="fade-right">
            <div className="method">
                <p><a href="tel:2268993921" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                    <img id="phone" className="invert mb-4" alt="Call my Phone Number" src={phoneImage}/>
                    (226) 899-3921
                </a></p>
            </div>
            <div className="method">
                <p><a href="mailto:kakpovbia.jiro@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                    <img id="email" className="invert mb-4" alt="Send me an Email" src={emailImage}/>
                    kakpovbia.jiro@gmail.com
                </a></p>
            </div>
            <div className="method">
                <p><a href="https://linkedin.com/in/jiro-kakpovbia" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                    <img id="c-linkedin" className="invert mb-4" alt="Visit my LinkedIn" src={linkedinImage}/>
                    jiro-kakpovbia
                </a></p>
            </div>
            <div className="method">
                <p><a href="https://github.com/JiroKakpovbia" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                    <img id="c-github" className="invert mb-4" alt="Visit my GitHub" src={githubImage}/>
                    JiroKakpovbia
                </a></p>
            </div>
        </div>
    </section>
    )
}

export default Contact;
