import express from "express";
import mongoose from "mongoose";
import User from './model/users.js';


const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
});


app.post('/api/data', (req, res) => {
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
        date
    });
    user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ success: false}));
})



mongoose.connect("mongodb+srv://lorikpatrik:7a8r4K01@cluster0.bu8nsrn.mongodb.net/project").then(()=> {
    console.log("MongoDB connection was successful.");
    app.listen(3001, () => console.log('Server started on port 3001'));
}).catch(()=>{
    console.log("MongoDB connection failure!");
})
