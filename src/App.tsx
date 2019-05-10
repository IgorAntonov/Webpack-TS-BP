import React from "react";

export class App extends React.Component<{}, {}> {
  handlePress = () => alert("test");
  render() {
    return <div onClick={this.handlePress}>Hello world</div>;
  }
}
