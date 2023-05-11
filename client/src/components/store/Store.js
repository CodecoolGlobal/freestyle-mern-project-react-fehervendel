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
  gamesInCartSetter,
  totalPriceSetter,
  showTabSetter,
}) {
  const [searchFor, setSearchFor] = useState("");

  return (
    <div>
      <SearchBar setSearchFor={setSearchFor} setFilteredGames={setFilteredGames} />
      {filteredGames === false ? (
        <AllGamesPage
          setRenderSelectedGame={setRenderSelectedGame}
          renderSelectedGame={renderSelectedGame}
          gamesInCartSetter={gamesInCartSetter}
          totalPriceSetter={totalPriceSetter}
          showTabSetter={showTabSetter}
        />
      ) : (
        <FilteredGames
          setRenderSelectedGame={setRenderSelectedGame}
          renderSelectedGame={renderSelectedGame}
          searchFor={searchFor}
          allGames={allGames}
          gamesInCartSetter={gamesInCartSetter}
          totalPriceSetter={totalPriceSetter}
          showTabSetter={showTabSetter}
        />
      )}
    </div>
  );
}

export default Store;
