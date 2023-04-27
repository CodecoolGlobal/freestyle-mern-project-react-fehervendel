import React, { useState } from "react";

function SearchBar({ setFilteredGames, setSearchFor }) {
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  function switchToFilteredGames() {
    setFilteredGames(true);
    setSearchFor(searchText);
    setInputValue("");
  }

  function search(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    setSearchText(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      switchToFilteredGames();
    }
  }

  return (
    <div>
      <input
        id="searchBar"
        type="text"
        placeholder="Search"
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => search(e)}
        value={inputValue}
      ></input>
      <button onClick={() => switchToFilteredGames()}>Search</button>
    </div>
  );
}

export default SearchBar;
