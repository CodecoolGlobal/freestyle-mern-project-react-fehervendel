import React, { useEffect, useState } from "react";

function FeaturedGames() {

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




  return (<div><input type="text" placeholder="Search"></input>
      {allGames && allGames.map((game, index) => (
        <div key={index} id="gameContainer">
        <div>{game.name}</div>
        <img src={game.background_image} id="backGroundImage"></img>
        </div>
      ))}
      
  </div>);
}

export default FeaturedGames;
