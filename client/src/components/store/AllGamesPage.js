import React, { useEffect, useState } from "react";
import "./css/AllGamesPage.css";

function AllGamesPage() {
  const [allGames, setAllGames] = useState([]);

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

  let allGamesToRender = <></>;
  if (allGames.length !== 0) {
    allGamesToRender = allGames.map((game, index) => {
      const releaseDate = new Date(game.released).toLocaleDateString();
      return (
        <div id="storeGameContainer">
          <img src={game.background_image} id="storeBackGroundImage"></img>
          <div id="storeGameName">{game.name}</div>
          <div id="storeGameRelease">{releaseDate}</div>
          <div id="storeGamePrice">Price €</div>
        </div>
      );
    });
  }

  return <div id="storeGames">{allGamesToRender}</div>;
}

export default AllGamesPage;
