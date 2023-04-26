import FeaturedGame from "./FeaturedGame";
import { useState, useEffect } from "react";
import "./css/Home.css";
import advertisement from "../../images/advertisement.jpg";

function Home(props) {
  const [counter, setCounter] = useState(0);
  const games = props.featuredGames;

  return (
    <div>
      <div id="homeTitle">Welcome to Shadow, the best Gaming Store there is!</div>
      <div>
        <img id="advertisementImage" src={advertisement} />
        <div id="advertisementText">Huge Sale -25% on all Action Games!</div>
      </div>
      {games.length !== 0 ? <FeaturedGame game={games[counter]} setCounter={setCounter} /> : <></>}
    </div>
  );
}

export default Home;
