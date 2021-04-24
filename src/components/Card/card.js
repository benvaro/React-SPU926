import React, { Component } from "react";

import Info from "../Info";
import Header from "../Header";
import Controls from "../Controls";

import "./card.css";

export default class Card extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="card col-4">
        <Header name={this.props.name} />
        <h2>Age: {this.props.age}</h2>
        <Info name={this.props.name} />
        <Controls
          id={id}
          onDelete={this.props.onDelete}
          onFavouriteChange={this.props.onFavouriteChange}
          favourite={this.props.favourite}
        />
      </div>
    );
  }
}
