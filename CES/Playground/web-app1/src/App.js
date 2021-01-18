import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "init" };
  }
  tryconnect = () => {
    const axios = require("axios");
    const url = "http://52.201.233.250:8081";
    // const url = "http://localhost:8081";
    axios
      .get(url)
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
