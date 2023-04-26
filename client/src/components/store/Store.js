import React from "react";
import { useState, useEffect } from "react";
import FilteredGames from "./FilteredGames";
import AllGamesPage from "./AllGamesPage";
import SearchBar from "./SearchBar";

function Store(props) {
  const allGames = props.allGames;
  const [filteredGames, setFilteredGames] = useState(false); 
  const [searchFor, setSearchFor] = useState("");


  return (
    <div>
      <SearchBar setSearchFor={setSearchFor} setFilteredGames={setFilteredGames}/>
      {filteredGames === false ? <AllGamesPage />: <FilteredGames searchFor={searchFor} allGames={allGames} />}
    </div>
  );
}

export default Store;
