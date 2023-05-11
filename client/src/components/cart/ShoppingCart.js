import GameInCart from "./GameInCart";
import "./css/GameInCart.css";
import { useState } from "react";

function ShoppingCart({ games, totalPrice, totalPriceSetter, gamesInLibrarySetter, gamesInCartSetter, showTabSetter }) {
  return (
    <>
      {games.length === 0 ? (
        <>
          <div id="noGamesYet">There are no games in your Cart yet!</div>
          <button
            onClick={() => {
              showTabSetter("store");
            }}
          >
            Back to Store
          </button>
        </>
      ) : (
        <div id="cartGames">
          {games.map((game, index) => {
            return (
              <GameInCart
                key={index}
                game={game}
                gamesInCartSetter={gamesInCartSetter}
                totalPriceSetter={totalPriceSetter}
              />
            );
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
