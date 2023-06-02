import React from 'react'

import './header.css'
import people from '../../assest/people.png' 
import ai from '../../assest/ai.png' 

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, quo velit. Minus sed deleniti commodi eveniet, quisquam sequi laboriosam sit? Fugit dolores exercitationem laudantium ut, similique enim hic nobis consectetur.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter Your Email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1680 people requested access a visit in last 24 hours.</p>
        </div>
      </div> 
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
    </div>
  )
}

export default Header