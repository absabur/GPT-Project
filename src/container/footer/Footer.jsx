import React from 'react'

import './footer.css'
import gpt3Logo from '../../assest/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, temporibus.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Policy</p>
          <p>Terms & Condition</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>4567475734</p>
          <p>info@gpt3.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p> © 2022 GPT-3 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer