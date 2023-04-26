import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import Game from "./model/game.js";
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

app.post("/api/userlogin", async (req, res) => {
  try {
    const userName = req.body.userName;
    const userPassword = crypto.createHash('sha256').update(req.body.userPassword).digest('hex');
    const user = await User.find({ userName: userName });

      if(user.length > 0 && user[0].userPassword === userPassword){
        res.status(200).json(1);
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
  const userPassword = crypto.createHash('sha256').update(req.body.userPassword).digest('hex');
  const userEmail = req.body.userEmail;
  const userPasswordAgain = crypto.createHash('sha256').update(req.body.userPasswordAgain).digest('hex');
  const date = Date.now();
  const userNameCheck = await User.find({userName: userName});
  const userEmailCheck = await User.find({userEmail: userEmail});

    if(userName.length > 0 && userPassword.length > 0 && userEmail.length > 0 && userPasswordAgain.length > 0){

      if(userPassword === userPasswordAgain){

        if(userNameCheck.length === 0 && userEmailCheck.length === 0){
        
          const user = new User({
            userName,
            userPassword,
            userPasswordAgain,
            userEmail,
            date,
          });
          user
            .save()
            .then(() => res.status(200).json(1))
            .catch((err) => res.status(400).json({ success: true }));
        }else{
          res.status(401).json(0); 
          //console.log("Username or Email already exists!");
        }
      }else{
          res.status(400).json(2);
         // console.log("Given passwords are not the same!");
      }    
        
  } else {
    res.status(400).json(3);
   // console.log("Fill the fields!");
  }
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
//(userName !== userNameCheck[0].userName && userEmail !== userEmailCheck[0].userEmail)
mongoose
  .connect("mongodb+srv://lorikpatrik:7a8r4K01@cluster0.bu8nsrn.mongodb.net/project")
  .then(() => {
    console.log("MongoDB connection was successful.");
    app.listen(3001, () => console.log("Server started on port 3001"));
  })
  .catch(() => {
    console.log("MongoDB connection failure!");
  });
