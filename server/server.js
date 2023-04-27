import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import Game from "./model/game.js";
import gameSchema from "./model/game.js";
import crypto from "crypto";

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

app.get("/api/allgames", async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("All games fetch failed");
  }
});

app.patch("/api/usernamechange", async (req, res) => {
    try{
      const userName = req.body.userName;
      const currentName = req.body.currentName;
      const userNameCheck = await User.find({ userName: userName });
      //console.log(userNameCheck);
      if(userNameCheck.length === 0){
        await User.findOneAndUpdate({ userName: currentName }, {$set: { userName: userName}});
        res.status(200).send("NAME CHANGED OK");
      } else {
        res.status(400).send("CANT CHANGE NAME");
      }
      
    }catch(error){
      console.log(error);
      res.status(500).send("Something went wrong");
    }
});

app.post("/api/userlogin", async (req, res) => {
  try {
    const userName = req.body.userName;
    const userPassword = crypto.createHash("sha256").update(req.body.userPassword).digest("hex");
    const user = await User.find({ userName: userName });

    if (user.length > 0 && user[0].userPassword === userPassword) {
      res.status(200).json({ access: 1, email: user[0].userEmail });
    } else {
      res.status(401).json(0);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

app.post("/api/userregistration", async (req, res) => {
  //+feature pattern check for inputfields email->@
  const userName = req.body.userName;
  const userPassword = crypto.createHash("sha256").update(req.body.userPassword).digest("hex");
  const userEmail = req.body.userEmail;
  const userPasswordAgain = crypto.createHash("sha256").update(req.body.userPasswordAgain).digest("hex");
  const date = Date.now();
  const userNameCheck = await User.find({ userName: userName });
  const userEmailCheck = await User.find({ userEmail: userEmail });

  if (userName.length > 0 && userPassword.length > 0 && userEmail.length > 0 && userPasswordAgain.length > 0) {
    if (userPassword === userPasswordAgain) {
      if (userNameCheck.length === 0 && userEmailCheck.length === 0) {
        const user = new User({
          userName,
          userPassword,
          userPasswordAgain,
          userEmail,
          date,
        });
        user
          .save()
          .then(() => res.status(200).send("1"))
          .catch((err) => res.status(400).json({ success: false }));
      } else {
        res.status(401).send("0");
        //console.log("Username or Email already exists!");
      }
    } else {
      res.status(400).send("2");
      // console.log("Given passwords are not the same!");
    }
  } else {
    res.status(400).send("3");
    // console.log("Fill the fields!");
  }
});

const fetchData = async (pageNum) => {
  const response = await (
    await fetch(`https://api.rawg.io/api/games?key=23dd7ede08ea4476afb8fb8286843785&page=${pageNum}&page_size=40`)
  ).json();
  Game.create(response.results);
};

for (let i = 1; i < 31; i++) {
  //fetchData(i);
}
for (let i = 31; i < 61; i++) {
  //fetchData(i);
}

const updateGamesWithPrice = async () => {
  let games = await gameSchema.find();
  games = games.map(async (game) => {
    const price = generatePriceBasedOnRatingAndReleaseDate(game.released, game.rating, game.tags);
    game.price = price;
    await game.save();
  });
};
//updateGamesWithPrice();

function generatePriceBasedOnRatingAndReleaseDate(releaseDate, rating, tags) {
  const yearsUntilToday = Math.round(new Date("2023-04-28") / 31536000000);
  const yearsUntilReleaseDate = Math.round(new Date(releaseDate) / 31536000000);
  const age = yearsUntilToday - yearsUntilReleaseDate;

  let price = 0;
  if (rating < 3) {
    price = 5.99;
  } else if (rating >= 3 && rating < 3.6) {
    price = 9.99;
  } else if (rating >= 3.6 && age > 8) {
    price = 19.99;
  } else if (rating >= 3.6 && age > 4) {
    price = 29.99;
  } else if (rating >= 3.6) {
    price = 59.99;
  }
  tags.forEach((tag) => {
    if (tag.name === "Free to Play") {
      price = 0;
    }
  });

  return price;
}

//(userName !== userNameCheck[0].userName && userEmail !== userEmailCheck[0].userEmail)
mongoose
 // .connect("mongodb+srv://lorikpatrik:7a8r4K01@cluster0.bu8nsrn.mongodb.net/project")
  .connect("mongodb://127.0.0.1:27017/project")
  .then(() => {
    console.log("MongoDB connection was successful.");
    app.listen(3001, () => console.log("Server started on port 3001"));
  })
  .catch(() => {
    console.log("MongoDB connection failure!");
  });
