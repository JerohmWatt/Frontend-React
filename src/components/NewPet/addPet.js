import axios from 'axios' 
import React, { Component } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Route, Redirect } from 'react-router'

export default class addPet extends Component { 
  //WIP
    constructor(props) {
        super(props);
        this.state = {name: '', birthDate: '', type : ''}; //props du pet
        this.handleChange = this.handleChange.bind(this);
      }
    
      //when change on textbox, update value
      handleChange = input => event => { 
        console.log("change detect");
        this.setState({[input]: event.target.value});
        console.log(this.state.lastname);
        event.preventDefault();
      }
     
    
      //exec when user click on button
  
  componentDidMount() {
  }

  addPet = (e) => {
    const url = 'localhost:9999/api/v1/pets/new/'+this.props.match.params.id+'?name='+this.state.name+'&birthDate='+this.state.birthDate+'&type='+this.state.type; //ICI AJOUTER URL APIREST
    axios.get(url);
    alert(url);
}

  render() {
    
    return (
        <div id = "parent">
        <div classname="breadcrumb">
        <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/owners/find">Find Owners</a></BreadcrumbItem>
        <BreadcrumbItem active>Add Owners</BreadcrumbItem>
      </Breadcrumb>
    </div>

        <div class="row">
          <div class="col-sm-2"></div>
  <div class="col-sm-8">
        <p> Adding a new pet to Mrs/Me : {this.props.match.params.lastname}</p>
        <Form>
        <FormGroup>
          <Label for="lastName">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Gros Minet" value={this.state.name} onChange={this.handleChange('name')}/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Birth Date</Label>
          <Input type="text" name="birthDate" id="birthDate" placeholder="YYYY-MM-DD" value={this.state.birthDate} onChange={this.handleChange('birthDate')}/>
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="text" name="type" id="type" placeholder="Bird" value={this.state.type} onChange={this.handleChange('type')}/>
        </FormGroup>
        <a href={"/owners/show/"+this.props.match.params.lastname}><Button onClick={this.addPet}>Submit</Button></a>
      </Form>
      </div>
      <div class="col-sm-2"></div>
      </div>
      </div>
    )
  }
}

