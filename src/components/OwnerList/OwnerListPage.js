import axios from "axios";
import Owner from "./Owner"; //
import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default class OwnerListPage extends Component {
  state = { owners: [] }; //

  getOwners = async () => {
    if (this.props.match.params.id === undefined) {
      // if url doesnt include an id, return the whole list of owners
      const response = await axios.get("http://localhost:9999/api/v1/owners");
      return await response;
    } else {
      //if url include a specific userid, only show this owner's informations
      const response = await axios.get(
        'http://localhost:9999/api/v1/owners/"' +
          this.props.match.params.id +
          '"'
      );
      return await response;
    }
  };

  setOwners = () => {
    this.getOwners().then(response => {
      let owners = [];
      response.data.forEach(owner => {
        owners.push(<Owner key={owners} {...owner} />);
      });
      this.setState({ owners });
    });
  };
  componentDidMount() {
    this.setOwners();
  }

  render() {
    return (
      <div id="parent">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Owners list</BreadcrumbItem>
        </Breadcrumb>
        <div className="container xd-container">
          <h2>Owners</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Pets</th>
              </tr>
            </thead>
            <tbody>{this.state.owners}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
