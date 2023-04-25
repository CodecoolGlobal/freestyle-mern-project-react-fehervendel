import Game from "./Game";
import { useState, useEffect } from "react";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);
  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/games");
      const response = await res.json();
      console.log(response);
      setGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  const gamesToRender = games.map((game) => {
    return <Game key={game.id} game={game} />;
  });

  return <div>{gamesToRender}</div>;
}

export default Games;
