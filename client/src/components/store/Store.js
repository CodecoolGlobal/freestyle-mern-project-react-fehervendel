import React from "react";
import { useState, useEffect } from "react";
import FilteredGames from "./FilteredGames";
import AllGamesPage from "./AllGamesPage";
import SearchBar from "./SearchBar";

function Store(props) {
  const allGames = props.allGames;
  const [filteredGames, setFilteredGames] = useState(false);

  return (
    <div>
      <SearchBar />
      {filteredGames === false ? <AllGamesPage /> : <FilteredGames allGames={allGames} />}
    </div>
  );
}

export default Store;
