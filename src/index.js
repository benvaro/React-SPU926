import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./components/Card";

export default class App extends Component {
  state = {
    selected: false,
    data: [
      {
        id: 1,
        name: "Ivan",
        age: 18,
        favourite: true,
        social: {
          fb: "https://fb.com/#",
          insta: "https://instagram.com",
        },
      },
      {
        id: 2,
        name: "Ivanka",
        age: 20,
        favourite: false,
        social: {
          insta: "https://instagram.com",
        },
      },
      {
        id: 3,
        name: "Ivanko",
        age: 23,
        favourite: false,
        social: {
          fb: "https://fb.com/#",
        },
      },
    ],
  };

  onDelete = (id) => {
    let index = this.findElementByIndex(id);

    this.setState(({ data }) => {
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
      };
    });
  };

  findElementByIndex = (id) => {
    return this.state.data.findIndex((x) => x.id == id);
  };

  onFavouriteChange = (id) => {
    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.favourite = !newEl.favourite;

      let before = data.slice(0, index);
      let after = data.slice(index + 1);

      return {
        data: [...before, newEl, ...after],
      };
    });
  };

  getUsers = () => {
    return this.state.data.map((el) => {
      return (
        <Card
          onDelete={() => this.onDelete(el.id)}
          onFavouriteChange={() => this.onFavouriteChange(el.id)}
          key={el.id}
          id={el.id}
          name={el.name}
          age={el.age}
          favourite={el.favourite}
          social={el.social}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.getUsers()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
