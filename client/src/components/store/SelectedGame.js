import React, { useEffect, useState } from "react";

function SelectedGame( {selectedGame} ) {
    return (<div>{selectedGame.name}</div>)
}

export default SelectedGame;