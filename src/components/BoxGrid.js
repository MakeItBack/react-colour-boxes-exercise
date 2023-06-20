import React, { Component } from "react";
import Box from "./Box";

class BoxGrid extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getCol = this.getCol.bind(this);
    this.newRGB = this.newRGB.bind(this);
    this.state = {};
  }
  getCol() {
    return Math.floor(Math.random() * 255) + 1;
  }
  newRGB() {
    return `rgb(${this.getCol()},${this.getCol()},${this.getCol()})`;
  }
  handleClick(e) {
    const colour = this.newRGB();
    this.setState({ [e.target.id]: colour });
  }
  render() {
    let boxes = [];
    for (let i = 1; i <= 32; i++) {
      const id = `box-${i}`;
      boxes.push(
        <Box
          id={id}
          colour={this.state[id] ? this.state[id] : "grey"}
          clickFunc={this.handleClick}
        />
      );
    }
    return <div>{boxes}</div>;
  }
}
export default BoxGrid;
