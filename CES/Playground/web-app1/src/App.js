import "./App.css";
import React from "react";

// async function connect() {
//   const axios = require("axios");
//   const result = await axios.get("http://localhost:8081");
//   console.log(`statusCode: ${result.status}`);
//   console.log(result.data);
//   // res.end("Result " + result.data);
//   return result.data;
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "ttt" };
  }
  tryconnect = () => {
    const axios = require("axios");
    // let currentComponent = this;

    axios
      .get("http://localhost:8081")
      .then((result) => {
        console.log(`statusCode: ${result.status}`);
        console.log(result);

        this.setState({ data: result.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    this.tryconnect();
    return <h1>Data, {this.state.data}</h1>;
  }
}
export default App;
