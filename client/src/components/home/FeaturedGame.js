import "./css/FeaturedGame.css";

function FeaturedGame(props) {
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
