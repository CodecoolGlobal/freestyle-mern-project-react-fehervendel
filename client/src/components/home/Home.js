import FeaturedGame from "./FeaturedGame";
import { useState, useEffect } from "react";

function Home(props) {
  const games = props.featuredGames;

  const gamesToRender = games.map((game) => {
    return <FeaturedGame key={game.id} game={game} />;
  });

  return <div>{gamesToRender}</div>;
}

export default Home;
