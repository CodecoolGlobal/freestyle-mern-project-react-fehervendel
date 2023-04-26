import { useEffect, useState } from "react";
import FilteredGame from "./AllGamesPage";

function FilteredGames({searchFor}) {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {  
    async function getGames() {
      try {
        const res = await fetch("http://localhost:3001/api/allgames");
        const response = await res.json();
        setAllGames(response);
      } catch (error) {
        console.log(`Fetching games failed: ${error}`);
      }
    }
    getGames();
  },[])

  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/allgames");
      const response = await res.json();
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }
  
  return (null)
}

export default FilteredGames;
