const axios = require("axios");

axios
  .get("http://localhost:8081")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch((error) => {
    console.error("Tuan Error: " + error);
  });
