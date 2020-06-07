import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Contents from "./models/contents";

const server = express();
const node_env = process.env.NODE_ENV || "production";

if (node_env === "production") {
  server.use(express.static(path.join("./", "dist", "client")));
}
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

const databaseUrl = process.env.MONGO_DATABASE || "mongodb://database:27017/diary";

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => {
  throw err;
});

server.get("/api/getDiaryContents/:date", (req: express.Request, res: express.Response) => {
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

server.post("/api/createDiary", (req: express.Request, res: express.Response) => {
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
        throw err;
      });
    }
  });
});

server.post("/api/deleteDiary/:date", (req: express.Request, res: express.Response) => {
  Contents.deleteOne({ date: req.params.date })
  .then(() => {
    res.send("Request was accepted");
  })
  .catch(err => {
    throw err;
  });
});

server.listen(3000, () => {
  console.log("server running");
});