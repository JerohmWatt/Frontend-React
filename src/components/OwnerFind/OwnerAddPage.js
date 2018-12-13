import axios from 'axios' 
import Owner from './Owner' //
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class OwnerListPage extends Component { 
  
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.lastName = this.lastName.bind(this);
      }
    
      //when change on textbox, update value
      handleChange(event) { 
        this.setState({value: event.target.value});
      }
    
      //exec when user click on button
      lastName() {
        var lastname = this.state.value;
      }
  
  componentDidMount() {
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
          <Input type="text" name="firstName" id="firstName" placeholder="John" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Doe" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="123 Main St" />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="Anytown" />
        </FormGroup>
        <FormGroup>
          <Label for="telephone">Telephone</Label>
          <Input type="text" name="telephone" id="telephone" placeholder="0600000000" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
      <div class="col-sm-2"></div>
      </div>
      </div>
    )
  }
}

