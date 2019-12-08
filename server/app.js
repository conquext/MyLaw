import express from "express";
import jsonServer from "json-server";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

app.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, console.info(`server started on port ${PORT}`));
