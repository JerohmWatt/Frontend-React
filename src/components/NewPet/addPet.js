import axios from "axios";
import React, { Component } from "react";
import {Button,Form,FormGroup,Label,Input,Breadcrumb,BreadcrumbItem} from "reactstrap";

export default class addPet extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", birthDate: "", type: "" }; //props du pet
    this.handleChange = this.handleChange.bind(this);
  }

  //when change on textbox, update value
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    event.preventDefault();
  };

  componentDidMount() {}

  addPet = () => {
    const chemin =
      "http://localhost:9999/api/v1/pets/new/" +
      this.props.match.params.id +
      "?name=" +
      this.state.name +
      "&birthDate=" +
      this.state.birthDate +
      "&type=" +
      this.state.type; 
    axios
      .get(chemin)
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    window.location.href = "/owners/show/" + this.props.match.params.id +"/"+ this.props.match.params.lastname;
  };

  render() {
    return (
      <div id="parent">
        <div className="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href={"/owners/show/"+this.props.match.params.lastname}>Owner {this.props.match.params.lastname}</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Add pet</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <p>
              {" "}
              Adding a new pet to Mrs/Me : {this.props.match.params.lastname}
            </p>
            <Form>
              <FormGroup>
                <Label for="lastName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Gros Minet"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Birth Date</Label>
                <Input
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  placeholder="YYYY-MM-DD"
                  value={this.state.birthDate}
                  onChange={this.handleChange("birthDate")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="Cat"
                  value={this.state.type}
                  onChange={this.handleChange("type")}
                />
              </FormGroup>
              <Button onClick={this.addPet}>Submit</Button>
            </Form>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}
