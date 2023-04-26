import "./css/FeaturedGame.css";
import { useEffect, useState } from "react";

function FeaturedGame(props) {
  const setCounter = props.setCounter;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      const intervalId = setInterval(() => {
        setCounter((prevState) => {
          if (prevState === 19) {
            return 0;
          } else {
            return prevState + 1;
          }
        });
      }, 3000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [hovered]);

  function handleMouseOver() {
    console.log("hovered");
    setHovered(true);
  }
  function handleMouseOut() {
    console.log("not hovered");
    setHovered(false);
  }

  return (
    <div id="gameContainer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
