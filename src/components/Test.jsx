import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <section style={{ textAlign: "center", margin: "10px" }}>
        <span>Window Width: {this.state.width} </span>
        <br />
        <input value={this.state.name} onChange={this.handleNameChange} />
      </section>
    );
  }
}
