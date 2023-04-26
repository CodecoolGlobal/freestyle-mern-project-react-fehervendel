import React, { useState } from "react";

function SearchBar({setFilteredGames, setSearchFor}) {
  const [searchText, setSearchText] = useState("");

  function switchToFilteredGames() {
    setFilteredGames(true);
    setSearchFor(searchText);
  }

  function search(e){
    e.preventDefault();
    setSearchText(e.target.value);
  }

  return (
    <div>
      <input id="searchBar" type="text" placeholder="Search" onChange={(e) => search(e)}></input>
      <button onClick={() => switchToFilteredGames()}>Search</button>
    </div>
  );
}

export default SearchBar;
