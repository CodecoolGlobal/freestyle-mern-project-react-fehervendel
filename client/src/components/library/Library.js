import { useEffect } from "react";
import "./css/Library.css";

function Library({ loggedInUser, gamesInLibrarySetter, gamesInLibrary }) {
  useEffect(() => {
    if (loggedInUser.name !== "") {
      getGamesInLibrary(loggedInUser.name);
    }
  }, [loggedInUser]);

  async function getGamesInLibrary(userName) {
    try {
      const res = await fetch(`http://localhost:3001/api/${userName}/libraryGames`);
      const response = await res.json();
      console.log(response);
      gamesInLibrarySetter(response);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(loggedInUser.name);
  console.log(gamesInLibrary);

  return (
    <>
      {loggedInUser.name === "" ? <div id="message">Log in to see your games!</div> : null}
      {loggedInUser.name !== "" && gamesInLibrary.length === 0 ? (
        <div id="message">You don't have any games yet! Browse our store and buy some!</div>
      ) : null}
      {loggedInUser.name !== "" && gamesInLibrary.length !== 0 ? <div>Games in Library</div> : null}
    </>
  );
}

export default Library;
