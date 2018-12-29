import axios from "axios";
import Vet from "./Vet";
import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default class VetsPage extends Component {
  state = { vets: [] }; //stock an array in state

  UNSAFE_componentWillMount() {
    //componentwillmount is deprecated
    this.setVets();
  }

  setVets = () => {
    this.getVets().then(response => {
      let vets = [];
      response.data.forEach(vet => {
        vets.push(<Vet key={vet.lastName} {...vet} />);
      });

      this.setState({ vets });
    });
  };

  getVets = async () => {
    const response = await axios.get("http://localhost:9999/api/v1/vets"); //waiting for apirest response
    return response;
  };

  render() {
    return (
      <div id="parent">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Veterinarians list</BreadcrumbItem>
        </Breadcrumb>
        <div className="Content">
          <div className="container xd-container">
            <h2>Veterinarians</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialties</th>
                </tr>
              </thead>
              <tbody>{this.state.vets}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
