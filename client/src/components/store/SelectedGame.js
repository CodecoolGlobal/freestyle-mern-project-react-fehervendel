import React, { useEffect, useState } from "react";
import "./css/SelectedGame.css";

function SelectedGame({ selectedGame, gamesInCartSetter, totalPriceSetter, showTabSetter }) {
  function addToCartClickHandler(price) {
    gamesInCartSetter((prevState) => {
      const newState = [...prevState, selectedGame];
      return newState;
    });
    totalPriceSetter((prevState) => {
      const newPrice = prevState + price;
      return Number(newPrice.toFixed(2));
    });
    showTabSetter("cart");
  }

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
          <table id="selectedGameTable">
            <tbody>
              <tr>
                <td>METACRITIC:</td>
                <td>{selectedGame.metacritic}</td>
              </tr>
              <tr>
                <td>RATING:</td>
                <td>{selectedGame.rating}</td>
              </tr>
              <tr>
                <td>RELEASE DATE:</td>
                <td>{new Date(selectedGame.released).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>AVG. PLAYTIME:</td>
                <td>{selectedGame.playtime}</td>
              </tr>
              <tr>
                <td>GENRES:</td>
                <td>
                  {selectedGame.genres
                    .map((genre) => {
                      return genre.name;
                    })
                    .join(", ")}
                </td>
              </tr>
            </tbody>
          </table>

          {selectedGame.price !== 0 ? (
            <div>
              <div>Buy {selectedGame.name}</div>
              <div id="selectedGamePrice">
                {selectedGame.price} €{" "}
                <button
                  onClick={() => {
                    addToCartClickHandler(selectedGame.price);
                  }}
                  id="addToCartButton"
                >
                  Add to Cart
                </button>
              </div>
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
