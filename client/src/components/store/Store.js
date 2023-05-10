import React from "react";
import { useState, useEffect } from "react";
import FilteredGames from "./FilteredGames";
import AllGamesPage from "./AllGamesPage";
import SearchBar from "./SearchBar";

function Store({
  filteredGames,
  setFilteredGames,
  allGames,
  renderSelectedGame,
  setRenderSelectedGame,
  gameInCartSetter,
  totalPriceSetter,
}) {
  const [searchFor, setSearchFor] = useState("");

  return (
    <div>
      <SearchBar setSearchFor={setSearchFor} setFilteredGames={setFilteredGames} />
      {filteredGames === false ? (
        <AllGamesPage
          setRenderSelectedGame={setRenderSelectedGame}
          renderSelectedGame={renderSelectedGame}
          gameInCartSetter={gameInCartSetter}
          totalPriceSetter={totalPriceSetter}
        />
      ) : (
        <FilteredGames
          setRenderSelectedGame={setRenderSelectedGame}
          renderSelectedGame={renderSelectedGame}
          searchFor={searchFor}
          allGames={allGames}
          gameInCartSetter={gameInCartSetter}
          totalPriceSetter={totalPriceSetter}
        />
      )}
    </div>
  );
}

export default Store;
