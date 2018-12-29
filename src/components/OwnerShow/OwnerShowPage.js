import axios from "axios";
import Owners from "../OwnerList/Owners"; //
import React, { Component } from "react";
import { Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import PetAndVisits from "./PetAndVisits";

export default class OwnerShowPage extends Component {
  state = { owners: [], petsAndVisits: [] };

  constructor(props) {
    super(props);
    this.ownerId = 0;
    this.lastname = "";
  }

  getOwners = async () => {
    console.log(this.props.match);
    if (this.props.match.params.id === undefined) {
      //error ? car page pour info et rien reçu
    } else {
      //if user enter lastname
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
      console.log(response);
      response.data.forEach(owner => {
        this.setState({ ownerId: owner.ownerId, lastname: owner.lastName });
        owners.push(<Owners key={owners} {...owner} />);
      });
      console.log(owners);
      this.setState({ owners });
    });
  };

  // pets and visits

  getPetsAndVisits = async () => {
    console.log(this.props.match);
    if (this.props.match.params.id === undefined) {
      //error ? car page pour info et rien reçu
    } else {
      //if user enter lastname
      const response = await axios.get(
        'http://localhost:9999/api/v1/owners/"' +
          this.props.match.params.id +
          '"'
      ); //url a modif pour nouvelle requête
      return await response;
    }
  };

  setPetsAndVisits = () => {
    this.getPetsAndVisits().then(response => {
      let petsAndVisits = [];
      console.log(response);
      response.data.forEach(pet => {
        this.setState({
          name: pet.name,
          birthdate: pet.birthdate,
          type: pet.type,
          lastvisitdate: pet.lastvisitdate,
          lastvisitdesc: pet.lastvisitdesc
        });
        petsAndVisits.push(<PetAndVisits key={pet.name} {...pet} />);
      });
      console.log(petsAndVisits);
      this.setState({ petsAndVisits });
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
              <h2>Pets and Visits</h2>
              <br />
              <table className="table table-striped">
                <thead />
                <tbody />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
