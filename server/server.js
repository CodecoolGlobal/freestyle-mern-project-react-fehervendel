import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import Game from "./model/game.js";

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.get("/api/games", async (req, res) => {
  try {
    let first20Games = [];
    const games = await Game.find({});
    for (let i = 0; i < 20; i++) {
      first20Games.push(games[i]);
    }
    res.status(200).json(first20Games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Games fetch failed");
  }
});

app.post("/api/userlogin", async (req, res) => {
  try {
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    const user = await User.find({ userName: userName });
    console.log(user);

    res.status(200).json({ userFound: user });
  } catch (error) {
    console.log(error);
    res.status(500).send("ok");
  }
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;
  const userEmail = req.body.userEmail;
  const userPasswordAgain = req.body.setUserPasswordAgain;
  const date = Date.now();

  const user = new User({
    userName,
    userPassword,
    userPasswordAgain,
    userEmail,
    date,
  });
  user
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ success: false }));
});
// const fetchData = async (pageNum) => {
//   const response = await (
//     await fetch(`https://api.rawg.io/api/games?key=23dd7ede08ea4476afb8fb8286843785&page=${pageNum}&page_size=40`)
//   ).json();
//   Game.create(response.results);
// };
// for (let i = 1; i < 31; i++) {
//   fetchData(i);
// }

mongoose
  .connect("mongodb+srv://lorikpatrik:7a8r4K01@cluster0.bu8nsrn.mongodb.net/project")
  .then(() => {
    console.log("MongoDB connection was successful.");
    app.listen(3001, () => console.log("Server started on port 3001"));
  })
  .catch(() => {
    console.log("MongoDB connection failure!");
  });
