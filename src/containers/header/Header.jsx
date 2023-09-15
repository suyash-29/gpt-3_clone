import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='#home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build something amazing with GPT-3</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Type email address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'></img>
          <p>1600 people accesed the site in last 24 hrs.</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='image'></img>
        </div>
      </div>
    </div>
  )
}

export default Header