// const http = require("http");

// // const hostname = "127.0.0.1";
// const hostname = "localhost";
// const port = 8081;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hi Tuan");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

const port = 8081;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("Hi Tuan");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
