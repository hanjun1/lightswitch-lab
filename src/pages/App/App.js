import "./App.css";
import React from "react";
import Top from "../../components/Top/Top";
import Bottom from "../../components/Bottom/Bottom";

class App extends React.Component {
  state = {
    on: false,
  };

  changeColor = (e) => {
    if (e.target.value === "on") {
      this.setState({ on: true });
    } else if (e.target.value === "off") {
      this.setState({ on: false });
    }
  };

  render() {
    return (
      <div className="App">
        <Top on={this.state.on} />
        <Bottom changeColor={this.changeColor} on={this.state.on} />
      </div>
    );
  }
}

export default App;
