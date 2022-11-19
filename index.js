import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import route from "./routes/index.js";

const app = express();

mongoose.connect("mongodb+srv://happyfeedy:happyfeedy@cluster0.vai22.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error)=>console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors());
app.use(express.json());
app.use('/product', route);


app.listen('3000', ()=> console.log('Server Running at port: 3000'));


