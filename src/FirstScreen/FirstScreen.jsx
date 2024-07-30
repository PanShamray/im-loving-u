import React from 'react';
import SecondScreen from '../SecondScreen/SecondScreen';

import './style.scss';
import me from '../images/me.jpg'

function FirstScreen () {
    return (
      <div className="main_wrapper">
        <img src={me} alt=""></img>
        <p>Am I love you?</p>

        <div className='buttons_wrapper'>
            <button type='submit'>YES</button>
            <button type='buttron'>no{"(((((("}</button>
        </div>
            
      </div>
    );
};

export default FirstScreen;