import { useEffect, useState } from "react";
import FilteredGame from "./AllGamesPage";

function FilteredGames({ searchFor }) {
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      try {
        const res = await fetch("http://localhost:3001/api/allgames");
        const response = await res.json();
        // const result = response.filter((game) => {
        //   let found = false;
        //   game.tags.forEach((tag) => {
        //     if (tag.name.includes(searchFor)) {    NE TÖRÖLD KI
        //       found = true;
        //     }
        //   })
        //   return found;
        // })
        const result = response.filter((game) => game.name.toLowerCase().includes(searchFor.toLowerCase()));        
        setFilteredGames(result);
      } catch (error) {
        console.log(`Fetching games failed: ${error}`);
      }
    }
    getGames();
  }, [searchFor])


  return (
    <div id="storeGames">
      {filteredGames.map((game) => 
        <div id="storeGameContainer">
        <img src={game.background_image} id="storeBackGroundImage"></img>
        <div id="storeGameName">{game.name}</div>
        <div id="storeGameRelease">{new Date(game.released).toLocaleDateString()}</div>
        <div id="storeGamePrice">Price ócsó€</div>
      </div>
      )}
    </div>
  )
}

export default FilteredGames;
