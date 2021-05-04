import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./components/Card";
import AddItem from "./components/AddItem/add-item";
import Search from "./components/Search/search";
import Menu from "./components/Menu/menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./components/Info/";

let Id = 10000;

export default class App extends Component {
  state = {
    selected: false,
    query: "",
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

  onAdd = (item) => {
    let newEl = {
      id: Id++,
      name: item.name,
      age: item.age,
      favourite: true,
      social: {
        fb: "https://fb.com/#",
        insta: "https://instagram.com",
      },
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newEl],
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

  onFilter = () => {
    let users = this.state.data;
    if (this.state.query === "") {
      return this.getUsers(users);
    }

    return this.getUsers(
      users.filter((x) => {
        return x.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
    );
  };

  onQueryChanged = (newQuery) => {
    this.setState({
      query: newQuery,
    });
  };

  getUsers = (data) => {
    return data.map((el) => {
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
      <>
        <Router>
          <Menu />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <>
                    <div className="container">
                      <Search onSearch={this.onQueryChanged} />
                      <div className="row">{this.onFilter()}</div>
                    </div>
                  </>
                );
              }}
            />

            <Route path="/add/" exact component={AddItem} />
            <Route
              exact
              path="/about/"
              render={() => <h1>About us: tel: 9379992</h1>}
            />
            <Route
              path="/about/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <Info name={id} />;
              }}
            />

            <Route render={() => <h1>Nothing was found</h1>} />
          </Switch>
        </Router>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
