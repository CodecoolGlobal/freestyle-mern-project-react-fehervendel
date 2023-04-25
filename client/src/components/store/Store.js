import React from "react";
import { useState } from "react";
import Games from "../games/Games";
import FilteredGames from "./FilteredGames";

function Store() {
  const [allGames, setAllGames] = useState();
  const [filteredGames, setFilteredGames] = useState(false);

  useEffect(() => {
    getGames();
  }, []);
  async function getGames() {
    try {
      const res = await fetch("http://localhost:3001/api/allgames");
      const response = await res.json();
      console.log(response);
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }
  return <div>{filteredGames === false ? <Games /> : <FilteredGames />}</div>;
}

export default Store;
