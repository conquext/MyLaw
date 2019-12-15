import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index";
import path from "path";

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

app.use(express.static(path.resolve(__dirname, "../../client/public")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/public/index.html"));
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, console.info(`server started on port ${PORT}`));
