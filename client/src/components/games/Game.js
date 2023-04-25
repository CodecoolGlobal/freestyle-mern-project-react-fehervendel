import "./css/Game.css";

function Game(props) {
  return (
    <div class="game">
      <div id="gameContainer">
        <img src={props.game.background_image} id="backGroundImage"></img>
        <div id="gameContainerSecondColumn">
          <div id="mainPageGameName">{props.game.name}</div>
        </div>
      </div>
    </div>

    // <div id="gameContainer">
    //   <img src={props.game.background_image} id="backGroundImage"></img>
    //   <div id="gameContainerSecondColumn">
    //     <div id="mainPageGameName">{props.game.name}</div>
    //     <div id="screenshotsContainer">
    //       <img src={props.game.short_screenshots[1].image} className="screenshot"></img>
    //       <img src={props.game.short_screenshots[2].image} className="screenshot"></img>
    //       <img src={props.game.short_screenshots[3].image} className="screenshot"></img>
    //       <img src={props.game.short_screenshots[4].image} className="screenshot"></img>
    //     </div>
    //     <div>Price</div>
    //   </div>
    // </div>
  );
}

/*id: Number,
name: String,
released: Date,
background_image: String,
rating: Number,
genres: [],
tags: [],
short_screenshots: [],
price: Number,
});*/

export default Game;
