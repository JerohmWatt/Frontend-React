import axios from 'axios' 
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class OwnerListPage extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', address : '', city: ''};
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

  addOwner = () => {
    const url = 'http://localhost:9999/api/v1/owners/add?firstName='+this.state.firstname+"&lastName="+this.state.lastname+"&address="+this.state.address+"&city="+this.state.city+"&telephone="+this.state.telephone;
    axios.get(url);
    window.location.href = "/owners/add";
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
        <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="John" value={this.state.firstname} onChange={this.handleChange('firstname')}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Doe" value={this.state.lastname} onChange={this.handleChange('lastname')}/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="123 Main St" value={this.state.address} onChange={this.handleChange('address')}/>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="Anytown" value={this.state.city} onChange={this.handleChange('city')}/>
        </FormGroup>
        <FormGroup>
          <Label for="telephone">Telephone</Label>
          <Input type="text" name="telephone" id="telephone" placeholder="0600000000" value={this.state.telephone} onChange={this.handleChange('telephone')}/>
        </FormGroup>
       <Button onClick={this.addOwner}>Submit</Button>
      </Form>
      </div>
      <div class="col-sm-2"></div>
      </div>
      </div>
    )
  }
}

