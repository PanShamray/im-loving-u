import React from "react";
import "./style.scss";
import us from '../../images/us.jpg';
import cat from '../../images/cat.gif';
import audio from '../../audio/yipee.mp3';

function SecondScreen() {
  return (
    <div className="second_wrapper">
      <audio src={audio} autoPlay loop></audio>
      <img className="us" src={us} alt=""></img>
      <img className="cat" src={cat} alt=""></img>
      <p>Я тебе кохаю❤️‍🔥</p>
    </div>
  );
}

export default SecondScreen;
