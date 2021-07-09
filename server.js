require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
// const allowedOrigins = ["http://localhost:3000", "*"];
// const options: cors.CorsOptions = {
//   origin: "*",
// };
const corsOptions = {
  // origin: "https://jobapptracker.netlify.app/*"
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
// app.use(cors(options));
// app.use(cors());

// const allowlist = [
//   "http://localhost:3000",
//   "https://jobapptracker.netlify.app/*",
//   "*",
// ];
// const corsOptionsDelegate = (req, callback) => {
//   let corsOptions;

//   let isDomainAllowed = whitelist.indexOf(req.header("Origin")) !== -1;
//   // let isExtensionAllowed = req.path.endsWith(".jpg");

//   if (isDomainAllowed && isExtensionAllowed) {
//     // Enable CORS for this request
//     corsOptions = { origin: true };
//   } else {
//     // Disable CORS for this request
//     corsOptions = { origin: false };
//   }
//   callback(null, corsOptions);
// };
// app.use(cors(corsOptionsDelegate));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use("/applications", require("./controllers/applicationsController"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

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
app.get("https://*", (req, res) => {
  res.send();
});

app.get("/", (req, res) => {
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
  // res.setHeader("Access-Control-Allow-Origin", "https://*");
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
