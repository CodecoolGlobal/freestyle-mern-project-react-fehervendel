import GameInCart from "./GameInCart";
import "./css/GameInCart.css";

function ShoppingCart({
  gamesInCart,
  totalPrice,
  totalPriceSetter,
  gamesInCartSetter,
  showTabSetter,
  loggedInUser,
  showRegisterFormSetter,
}) {
  function purchaseClickHandler() {
    if (loggedInUser.name === "") {
      showRegisterFormSetter("login");
    } else {
      gamesInCart.forEach((game) => {
        sendPurchasedGameId(game._id, loggedInUser.name);
      });
    }
  }

  async function sendPurchasedGameId(id, userName) {
    try {
      const res = await fetch(`http://localhost:3001/api/purchaseGame/${id}`, {
        method: "POST",
        body: JSON.stringify({ userName: userName }),
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.text();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {gamesInCart.length === 0 ? (
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
          {gamesInCart.map((game, index) => {
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
            <button onClick={purchaseClickHandler}>Purchase</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
