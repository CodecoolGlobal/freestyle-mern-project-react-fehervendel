import "./css/FeaturedGame.css";
import { useEffect } from "react";

function FeaturedGame(props) {
  const setCounter = props.setCounter;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevState) => {
        if (prevState === 19) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="gameContainer">
      <img src={props.game.background_image} id="backGroundImage"></img>
      <div id="gameContainerSecondColumn">
        <div id="mainPageGameName">{props.game.name}</div>
        <div id="screenshotsContainer">
          <img src={props.game.short_screenshots[1].image} className="screenshot"></img>
          <img src={props.game.short_screenshots[2].image} className="screenshot"></img>
          <img src={props.game.short_screenshots[3].image} className="screenshot"></img>
          <img src={props.game.short_screenshots[4].image} className="screenshot"></img>
        </div>
        <div>Price</div>
      </div>
    </div>
  );
}

export default FeaturedGame;
