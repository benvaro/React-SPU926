import React, { Component } from "react";

import "./controls.css";

export default class Controls extends Component {
  render() {
    const className =
      this.props.favourite == true ? "fas fa-star" : "far fa-star";
    return (
      <>
        <span className="d-block">
          <i onClick={this.props.onDelete} className="fas fa-trash"></i>
        </span>
        <span className="d-block">
          <i onClick={this.props.onFavouriteChange} className={className}></i>
        </span>
      </>
    );
  }
}
