const express=require('express');
const app=express();
const mongoose = require('mongoose');
const user=require('./models/User');
const userroute=require('./apis/userroute')
const cors=require('cors');
const session=require('express-session');
const eventroute=require('./apis/eventroute');
mongoose.connect('mongodb://127.0.0.1:27017/Event')
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log("error");
})
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly:true,
      expires:Date.now()+24*7*60*60*1000,
      maxAge:24*7*60*60*1000
     }//secure: true 
  }))
app.use(express.urlencoded({extended:true}));
//seedDB();
app.use(express.json());
app.use(cors({origin:['http://localhost:5173']}));
app.use(userroute);
app.use(eventroute);
const passportlocalmong=require('passport-local-mongoose');
const passport=require('passport');
const LocalStrategy=require('passport-local');

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(user.serializeUser());//for setting id as cookie in user's browser
passport.deserializeUser(user.deserializeUser());
passport.use(new LocalStrategy(user.authenticate()));
app.get('/',(req,res)=>{
    res.status(200).json({msg:"hello"});
})
app.listen('8081',()=>{
    console.log("server connected");
})