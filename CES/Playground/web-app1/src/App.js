import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "ttt" };
  }
  tryconnect = () => {
    const axios = require("axios");
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
