import Game from "./Game";
import { useState } from "react";

function Games() {
  const [games, setGames] = useState();

  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/games");
      const response = await res.json();
      setGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  return (
    <div id="gameContainer">
      <Game />
    </div>
  );
}

export default Games;
