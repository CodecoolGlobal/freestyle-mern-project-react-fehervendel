import FeaturedGame from "./FeaturedGame";
import { useState, useEffect } from "react";
import "./css/Home.css";

function Home(props) {
  const [counter, setCounter] = useState(0);
  const games = props.featuredGames;
  // const gamesToRender = games.map((game) => {
  //   return <FeaturedGame key={game.id} game={game} />;
  // });
  console.log(counter);
  console.log(games);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCounter((prevState) => {
  //       if (prevState === 19) {
  //         return 0;
  //       } else {
  //         return prevState + 1;
  //       }
  //     });
  //   }, 4000);
  // }, [counter]);

  return (
    <div>
      <div id="homeTitle">Welcome to Shadow, the best Gaming Store on the Web!</div>
      {games.length !== 0 ? <FeaturedGame game={games[counter]} setCounter={setCounter} /> : <></>}
    </div>
  );
}

export default Home;
