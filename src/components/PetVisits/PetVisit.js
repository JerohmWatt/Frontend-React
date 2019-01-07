import axios from "axios";
import Visit from "./Visit";
import React, { Component } from "react";
import { Button, Breadcrumb, BreadcrumbItem } from "reactstrap";

export default class PetVisit extends Component {
  state = { visits: [] }; //stock an array in state

  componentDidMount() {
    //componentwillmount is deprecated
    this.setVisits();
  }

  setVisits = () => {
    this.getVisits().then(response => {
      let visits = [];
      response.data.forEach(visit => {
        this.setState({
          date: visit.date,
          description: visit.description,
          id: visit.id,
        });
        visits.push(<Visit key={visit.id} {...visit} />);
      });

      this.setState({ visits });
    });
  };

  getVisits = async () => {
    const response = await axios.get("http://localhost:9999/api/v1/visits/bypet/"+this.props.match.params.petId); //waiting for apirest response
    return response;
  };

  render() {
    return (
      <div id="parent">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Visits list</BreadcrumbItem>
        </Breadcrumb>
        <div className="Content">
          <div className="container xd-container">
            <h2>Veterinarians</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>{this.state.visits}</tbody>
            </table>
          </div>
        </div>
        <a href={"/pet/add/"+this.props.match.params.petId}><Button style={{ marginLeft: 1 + "em" }}>Add New Visit for this pet</Button></a>
      </div>
    );
  }
}
