function GameInCart({ game }) {
  //   <div onClick={() => selectGame(game)} id="storeGameContainer">
  //     <img src={game.background_image} id="storeBackGroundImage"></img>
  //     <div id="storeGameName">{game.name}</div>
  //     <div id="storeGameRelease">{releaseDate}</div>
  //     {game.price !== 0 ? <div id="storeGamePrice">{game.price} €</div> : <div id="storeGamePrice">Free to Play</div>}
  //   </div>;

  return (
    <>
      <div id="cartGameContainer">
        <img src={game.background_image} id="cartBackGroundImage"></img>
        <div id="cartGameName">{game.name}</div>
        <div id="cartGamePrice">{game.price} €</div>
        <div id="cartGameRemoveButton">Remove</div>
      </div>
    </>
  );
}

export default GameInCart;
