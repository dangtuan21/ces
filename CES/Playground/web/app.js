const http = require("http");

// const hostname = "127.0.0.1";
const hostname = "localhost";
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  //   const axios = require("axios");
  //   axios
  //     .get("http://localhost:8081")
  //     .then((result) => {
  //       console.log(`statusCode: ${result.status}`);
  //       console.log(result.data);

  //       res.end("Result " + result.data);
  //     })
  //     .catch((error) => {
  //       console.error("Tuan Error: " + error);
  //     });

  const axios = require("axios");
  const result = await axios.get("http://localhost:8081");
  console.log(`statusCode: ${result.status}`);
  console.log(result.data);
  res.end("Result " + result.data);
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
