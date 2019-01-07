import axios from "axios";
import Owners from "../OwnerList/Owners"; //
import React, { Component } from "react";
import { Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import Pet from "./Pet"

export default class OwnerShowPage extends Component {
  state = { owners: [], pets: [] };

  constructor(props) {
    super(props);
    this.ownerId = 0;
    this.lastname = "";
  }

  getOwners = async () => {
    //console.log(this.props.match);
    if (this.props.match.params.name === undefined) {
      alert("ici");
    } else {
      //if user enter lastname
      const response = await axios.get(
        'http://localhost:9999/api/v1/owners/"' +
          this.props.match.params.name +
          '"'
      );
      return await response;
    }
  };

  setOwners = () => {
    this.getOwners().then(response => {
      let owners = [];
      //console.log(response);
      response.data.forEach(owner => {
        this.setState({ ownerId: owner.ownerId, lastname: owner.lastName});
        owners.push(<Owners key={owners} {...owner} />);
      });
      //console.log(owners);
      this.setState({ owners });
    });
  };

  // pets and visits

  getPets = async () => {
    //console.log(this.props.match);
    if (this.props.match.params.id === undefined) {
      
    } else {
      //if user enter lastname
      const response2 = await axios.get(
        'http://localhost:9999/api/v1/pets/' +
          this.props.match.params.id 
          
      );
      console.log(response2); //url a modif pour nouvelle requête
      return await response2;
      
    }
  };

  setPets = () => {
    this.getPets().then(response2 => {
      let pets = [];
      //console.log(response2);
      response2.data.forEach(pet => {
        this.setState({
          name: pet.name,
          birthDate: pet.birthDate,
          type: pet.type,
          petId:  pet.id,
        });
        pets.push(<Pet key={pet.name} {...pet} />);
      });
      console.log(pets);
      this.setState({ pets });
    });
  };

  componentDidMount() {
    this.setOwners();
    this.setPets();
  }

  render() {
    return (
      <div id="parent">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/owners/list/">Owners list</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Owner page</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-9">
            <div className="container xd-container">
              <h2>Owner information</h2>
              <br />
              <table className="table table-striped">
                <thead />
                {this.state.owners}
              </table>
            </div>
          </div>
        </div>
        <a href={"/pet/add/" + this.state.ownerId + "/" + this.state.lastname}>
          <Button style={{ marginLeft: 1 + "em" }}>Add New Pet</Button>
        </a>
        <br />
        <div className="row">
          <div className="col-9">
            <div className="container xd-container">
              <br />
              <h2>Pets</h2>
              <br />
              <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birthdate</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>{this.state.pets}</tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
