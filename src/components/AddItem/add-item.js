import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  onSubmitContact = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      name: "",
      age:"",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitContact} className="form-group mt-4">
          <input
            onChange={this.onNameChange}
            name="name"
            placeholder="Enter name"
            className="form-control mb-3"
            value={this.state.name}
          />
          <input
            onChange={this.onAgeChange}
            name="age"
            placeholder="Enter age"
            className="form-control"
            value={this.state.age}
          />

          <div className="bottom-right">
            <button type="submit" className="btn btn-success">
              {" "}
              <i className="fas fa-plus-circle"> </i>
            </button>
          </div>
        </form>
      </>
    );
  }
}
