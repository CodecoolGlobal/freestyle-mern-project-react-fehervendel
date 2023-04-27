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
  esrb_rating: { name: String },
  metacritic: Number,
  playtime: Number,
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
