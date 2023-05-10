import React, { useEffect, useState } from "react";
import "./css/AllGamesPage.css";
import SelectedGame from "./SelectedGame";

function AllGamesPage({ renderSelectedGame, setRenderSelectedGame, gameInCartSetter, totalPriceSetter }) {
  const [allGames, setAllGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/games");
      const response = await res.json();
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  function selectGame(game) {
    setRenderSelectedGame(true);
    setSelectedGame(game);
  }

  let allGamesToRender = <></>;
  if (allGames.length !== 0) {
    allGamesToRender = allGames.map((game, index) => {
      const releaseDate = new Date(game.released).toLocaleDateString();
      return (
        <div key={index} onClick={() => selectGame(game)} id="storeGameContainer">
          <img src={game.background_image} id="storeBackGroundImage"></img>
          <div id="storeGameName">{game.name}</div>
          <div id="storeGameRelease">{releaseDate}</div>
          {game.price !== 0 ? (
            <div id="storeGamePrice">{game.price} €</div>
          ) : (
            <div id="storeGamePrice">Free to Play</div>
          )}
        </div>
      );
    });
  }

  return (
    <div>
      {renderSelectedGame === false ? (
        <div id="storeGames">{allGamesToRender}</div>
      ) : (
        <SelectedGame
          selectedGame={selectedGame}
          gameInCartSetter={gameInCartSetter}
          totalPriceSetter={totalPriceSetter}
        />
      )}
    </div>
  );
}

export default AllGamesPage;
