import Button from "react-bootstrap/Button";
import { Component } from "react";
import FormControl from "react-bootstrap/FormControl";

import InputGroup from "react-bootstrap/InputGroup";

export default class Search extends Component {
  state = {
    query: "",
  };

  onSearchChanged = (e) => {
    const { onSearch } = this.props;
    onSearch(e.target.value);
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <InputGroup className="mb-3 mt-3 ">
        <FormControl onChange={this.onSearchChanged} placeholder="Search" />

        <InputGroup.Append>
          <Button variant="outline-secondary" className="btn">
            {" "}
            Search{" "}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
