// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
exports.lambdaHandler = async (event, context) => {
  try {
    const axios = require("axios");
    axios
      .post("https://whatever.com/todos", {
        todo: "Buy the milk",
      })
      .then((res) => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
