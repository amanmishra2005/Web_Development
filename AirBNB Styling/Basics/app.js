// // Core Modules
// const http = require("http");

// External Modules
const express = require("express");

// Local Modules
const userRequestHandler = require("./user");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first Middleware ", req.url, req.method);
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second Middleware ", req.url, req.method);
  res.send("<h1>Welcome to Second Middleware</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Came in third Middleware ", req.url, req.method);
    res.send("<h1>Welcome to third Middleware</h1>");
});

// const server = http.createServer(app);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
