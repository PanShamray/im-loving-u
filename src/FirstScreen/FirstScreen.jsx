import React, {useState} from 'react';
import SecondScreen from '../SecondScreen/SecondScreen';

import './style.scss';
import me from '../images/me.jpg'

function FirstScreen() {
    const [noButtonStyle, setButtonStyle] = useState({});
    const [isHerInLove, setHerInLove] = useState(false);

    const handleLove = () => {
        setHerInLove(true);
    };

    const moveButton = () => {
        const x = Math.floor(Math.random() * 80);
        const y = Math.floor(Math.random() * -800);
        setButtonStyle((prevState) => ({
          ...prevState,
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
        }));
    };

    return (
      <>
        {isHerInLove ? (
          <SecondScreen />
        ) : (
          <div className="main_wrapper">
            <img src={me} alt=""></img>
            <p>Am I love her?</p>

            <div className="buttons_wrapper">
              <button type="submit" onClick={handleLove}>
                YES
              </button>
              <button
                type="button"
                style={noButtonStyle}
                onMouseEnter={moveButton}
                onClick={moveButton}
              >
                no{"(((((("}
              </button>
            </div>
          </div>
        )}
      </>
    );
};

export default FirstScreen;