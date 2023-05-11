function GameInCart({ game, totalPriceSetter, gamesInCartSetter }) {
  function removeGameFromCartClickHandler() {
    gamesInCartSetter((prevState) => {
      const newState = [...prevState].filter((currentGame) => {
        return currentGame.id !== game.id;
      });
      return newState;
    });
    totalPriceSetter((prevState) => {
      const newPrice = prevState - game.price;
      return Number(newPrice.toFixed(2));
    });
  }

  return (
    <>
      <div id="cartGameContainer">
        <img src={game.background_image} id="cartBackGroundImage"></img>
        <div id="cartGameName">{game.name}</div>
        <div id="cartGamePrice">{game.price} €</div>
        <div onClick={removeGameFromCartClickHandler} id="cartGameRemoveButton">
          Remove
        </div>
      </div>
    </>
  );
}

export default GameInCart;
