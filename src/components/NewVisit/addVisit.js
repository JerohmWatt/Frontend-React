import axios from "axios";
import React, { Component } from "react";
import {Button,Form,FormGroup,Label,Input,Breadcrumb,BreadcrumbItem} from "reactstrap";

export default class addVisit extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", description: ""}; //props du pet
    this.handleChange = this.handleChange.bind(this);
  }

  //when change on textbox, update value
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    event.preventDefault();
  };

  componentDidMount() {}

  addVisit = () => {
      //http://localhost:9999/api/v1/visits/2?id=2&date=2010-05-07&description=Haircut
    const chemin =
      "http://localhost:9999/api/v1/visits/" +
      this.props.match.params.id +
      "?id=" +
      this.props.match.params.id +
      "&date=" +
      this.state.date +
      "&description=" +
      this.state.description; 
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
    window.location.href = "/pet/visit/" + this.props.match.params.id;
  };

  render() {
    return (
      <div id="parent">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href={"/pet/visit/"+this.props.match.params.id}>Pet visits</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Add Visit</BreadcrumbItem>
          </Breadcrumb>

        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <p>
              Adding a new Visit
            </p>
            <Form>
              <FormGroup>
                <Label for="lastName">Date</Label>
                <Input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="YYYY-MM-DD"
                  value={this.state.name}
                  onChange={this.handleChange("date")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Haircut"
                  value={this.state.description}
                  onChange={this.handleChange("description")}
                />
              </FormGroup>
              
              <Button onClick={this.addVisit}>Submit</Button>
            </Form>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}
