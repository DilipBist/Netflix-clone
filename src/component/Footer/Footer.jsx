import React from 'react'
import './Footer.css'
import insta_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={insta_icon} alt="InstaIcon" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={youtube_icon} alt="Youtube" />
        <img src={twitter_icon} alt="Twitter" />
      </div>
      <ul>
        <li>audio description</li>
        <li>help centre</li>
        <li>gift cards</li>
        <li>media centre</li>
        <li>investor relations</li> 
        <li>terms of use</li>
        <li>privacy</li>
        <li>legal notice</li>
        <li>cookie prefrences</li>
        <li>corporate information</li>
        <li>contact us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997- {date} Netflix.</p>
      <p className='red'> Refrence Youtube  videos and Netflix website.</p>
    </div>
  )
}

export default Footer