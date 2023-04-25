import React from "react";
import { useState, useEffect } from "react";
import FilteredGames from "./FilteredGames";
import FeaturedGames from "./FeaturedGames";

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
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }
  return <div>{filteredGames === false ? <FeaturedGames/> : <FilteredGames allGames={allGames}/>}</div>;
}

export default Store;
