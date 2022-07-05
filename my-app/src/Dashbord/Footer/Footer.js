import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='Footer'>
        <div  className='Footer-1'>
            <div className='Footer-2'  >
            <h1>Let's Talk</h1>
            <div className='para'>
            <p>Every project start with a chat. Joven leads over client converstion and will be happy to discuss
                your project. he will also pull in the right pepole from the team when needed.
            </p>
            </div>

        </div>
       
        <p className="social-container">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x"/>
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>

        </div>
    </div>
  )
}

export default Footer
