import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gameSchema = new Schema({
  id: Number,
  name: String,
  released: Date,
  background_image: String,
  rating: Number,
  genres: [],
  tags: [],
  short_screenshots: [],
  price: Number,
});
// "short_screenshots": [
//     {
//         "id": -1,
//         "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
//     }]
// "genres": [
//     {
//         "id": 4,
//         "name": "Action",
//         "slug": "action",
//         "games_count": 176811,
//         "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
//     }
// ]

// "tags": [
//     {
//         "id": 31,
//         "name": "Singleplayer",
//         "slug": "singleplayer",
//         "language": "eng",
//         "games_count": 208796,
//         "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
//     }]

const Game = mongoose.model("Game", gameSchema);

export default Game;
