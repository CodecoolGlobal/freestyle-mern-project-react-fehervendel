import React, { useEffect, useState } from "react";
import "./css/SelectedGame.css";

function SelectedGame({ selectedGame }) {
  //return (<div>{selectedGame.name}</div>)

  return (
    <div>
      <div id="selectedGameName">{selectedGame.name}</div>
      <div id="selectedGameContainer">
        <div id="selectedGameContainerFirstColumn">
          <img src={selectedGame.background_image} id="backGroundImage"></img>
          <div id="miniScreenshotsContainer">
            <img src={selectedGame.short_screenshots[1].image} className="miniScreenshot"></img>
            <img src={selectedGame.short_screenshots[2].image} className="miniScreenshot"></img>
            <img src={selectedGame.short_screenshots[3].image} className="miniScreenshot"></img>
            <img src={selectedGame.short_screenshots[4].image} className="miniScreenshot"></img>
          </div>
        </div>
        <div id="selectedGameContainerSecondColumn">
          <div>Metacritic: {selectedGame.metacritic}</div>
          <div>Average playtime: {selectedGame.playtime}</div>
          <div>Release date: {new Date(selectedGame.released).toLocaleDateString()}</div>
          {selectedGame.price !== 0 ? (
            <div>
              <div>Buy {selectedGame.name}</div>
              <div id="selectedGamePrice">{selectedGame.price} €</div>
            </div>
          ) : (
            <div>
              <div>Play {selectedGame.name}</div>
              <div id="selectedGamePrice">Free to Play</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedGame;
