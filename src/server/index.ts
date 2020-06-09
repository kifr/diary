import express from "express";
import path from "path";
import bodyParser from "body-parser";
import databaseConnect from "./database";
import router from "./routes/api";

const server = express();
const node_env = process.env.NODE_ENV || "production";

if (node_env === "production") {
  server.use(express.static(path.join("./", "dist", "client")));
}
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(router);

databaseConnect().then(() => {
  server.listen(3000, () => {
    console.log("server running");
  });
})
.catch(err => {
  throw new Error(err);
});