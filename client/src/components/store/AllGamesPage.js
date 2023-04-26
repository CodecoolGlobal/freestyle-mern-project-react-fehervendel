import React, { useEffect, useState } from "react";
import "./css/AllGamesPage.css";
import SelectedGame from "./SelectedGame";

function AllGamesPage(props) {
  const [allGames, setAllGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});

  useEffect(() => {
    getGames();
  }, []);

  

  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/games");
      const response = await res.json();
      console.log(response);
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  function selectGame(game) {
    props.setRenderSelectedGame(true);
    setSelectedGame(game);
  }

  let allGamesToRender = <></>;
  if (allGames.length !== 0) {
    allGamesToRender = allGames.map((game, index) => {
      const releaseDate = new Date(game.released).toLocaleDateString();
      return (
        <div onClick={() => selectGame(game)} id="storeGameContainer">
          <img src={game.background_image} id="storeBackGroundImage"></img>
          <div id="storeGameName">{game.name}</div>
          <div id="storeGameRelease">{releaseDate}</div>
          <div id="storeGamePrice">Price €</div>
        </div>
      );
    });
  }

  return <div id="storeGames">{props.renderSelectedGame === false ? allGamesToRender : <SelectedGame selectedGame={selectedGame}/>}</div>;
}

export default AllGamesPage;
