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
        //     if (tag.name.includes(searchFor)) {
        //       found = true;
        //     }
        //   })
        //   return found;
        // })
        const result = response.filter((game) => game.name.includes(searchFor));        
        setFilteredGames(result);
      } catch (error) {
        console.log(`Fetching games failed: ${error}`);
      }
    }
    getGames();
  }, [])

  // {allGames.forEach((game) => {
  //       game.tags.forEach((tag) => {
  //         if (tag.name.includes(searchFor)) {
  //           console.log(game.name)
  //           return <div>{game.name}</div>
  //         }
  //       })
  //     })}




  return (
    <div>
      <div>{filteredGames.map((game) => 
        <div>{game.name}</div>
      )}</div>
    </div>
  )
}

export default FilteredGames;
