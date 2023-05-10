import GameInCart from "./GameInCart";
import "./css/GameInCart.css";
import { useState } from "react";

function ShoppingCart({ games, totalPrice, totalPriceSetter }) {
  return (
    <>
      {games.length === 0 ? (
        <div>There are no games in your Cart yet!</div>
      ) : (
        <div id="cartGames">
          {games.map((game, index) => {
            return <GameInCart key={index} game={game} />;
          })}
          <div id="cartConfirmContainer">
            <div id="estimated">Estimated total:</div>
            <div id="totalPrice">{totalPrice} €</div>
            <button>Purchase</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
