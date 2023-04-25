import "./css/Game.css";

function Game() {
  return (
    <div id="gameContainer">
      <img>Image</img>
      <div>
        <div>Name</div>
        <div id="screenshotsContainer">
          <img>Screenshot</img>
          <img>Screenshot</img>
          <img>Screenshot</img>
          <img>Screenshot</img>
        </div>
        <div>Price</div>
      </div>
    </div>
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
