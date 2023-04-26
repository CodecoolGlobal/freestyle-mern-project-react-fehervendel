import React from "react";
import { useState, useEffect } from "react";
import FilteredGames from "./FilteredGames";
import AllGamesPage from "./AllGamesPage";
import SearchBar from "./SearchBar";

function Store(props) {
  const allGames = props.allGames;
  const [searchFor, setSearchFor] = useState("");


  return (
    <div>
      <SearchBar setSearchFor={setSearchFor} setFilteredGames={props.setFilteredGames}/>
      {props.filteredGames === false ? <AllGamesPage setRenderSelectedGame={props.setRenderSelectedGame} renderSelectedGame={props.renderSelectedGame}/>: <FilteredGames setRenderSelectedGame={props.setRenderSelectedGame} renderSelectedGame={props.renderSelectedGame} searchFor={searchFor} allGames={allGames} />}
    </div>
  );
}

export default Store;
