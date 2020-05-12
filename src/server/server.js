const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Contents = require("./models/contents");

const databaseUrl = process.env.MONGO_DATABASE || "mongodb://database:27017/diary";
mongoose.connect(databaseUrl, err => {
  if (err) throw err;
});

const server = express();
server.use(express.static(path.join("./", "dist")));
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.sendFile(path.join("./", "dist", "index.html"));
});

server.get("/api/getDiaryContents/:date", (req, res) => {
  Contents.findOne({ date: req.params.date }, (err, result) => {
    if (err) throw err;
    if (result) {
      res.end(JSON.stringify({
        title: result.title,
        body: result.body
      }));
    } else {
      res.json({});
    }
  });
});

server.post("/api/createDiary", (req, res) => {
  const { date, title, body } = req.body;
  Contents.findOne({ date }, (err, result) => {
    if (err) throw err;
    if (result) {
      Contents.update(
        { date },
        { $set: { title, body} },
        (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Request was accepted");
        });
    } else {
      Contents.create({
        date,
        title,
        body
      })
      .then(result => {
        console.log(result);
        res.send("Request was accepted");
      })
      .catch(err => {
        console.error(err);
        res.send("Request was refused");
      });
    }
  });
});

server.listen(3000, () => {
  console.log("server running");
});
