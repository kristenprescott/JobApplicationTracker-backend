require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/applications", require("./controllers/applicationsController"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "/*");
  next();
});

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once("connected", () =>
  console.log("Connected to Mongo - life is good B^)")
);

// ROUTES
app.get("/*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.SERVER_URL}`);
  res.send();
});

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.SERVER_URL}`);
  res.send(
    `
      <center>
    <div>╭──────────────────────────────────╮</div>
    <div>│꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦│</div>
    <div>│---------------------------------------------------------------------------------------│</div>
    <div>| ------------------------------- Job Application Data ------------------------------- |</div>
    <div>│---------------------------------------------------------------------------------------│</div>
    <div>│꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦│</div>
    <div>│꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦ PORT ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦ │</div>
    <div>│ ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷${PORT}꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦│</div>
    <div>│꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦ʕ•ᴥ•ʔ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦│</div>
    <div>│꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦│</div>
    <div>╰──────────────────────────────────╯</div>
  </center>
    `
  );
});

app.get("/applications", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.SERVER_URL}`);
  res.send();
});

app.listen(PORT, () => {
  console.log("╭────────────────────────────────────╮");
  console.log("│               *ʕ•ᴥ•ʔ*              │");
  console.log("│------------------------------------│");
  console.log("│           ╭------------╮           │");
  console.log("│           |    PORT    |           │");
  console.log("│           |------------|           │");
  console.log(`│           |    ${PORT}    |           │`);
  console.log("│           ╰------------╯           │");
  console.log("╰────────────────────────────────────╯");
});
