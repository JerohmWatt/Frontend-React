import { InputGroup, InputGroupText, InputGroupAddon, Input, Card, Button, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import React, { Component } from 'react';


export default class OwnerFindPage extends Component { 


  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  //when change on textbox, update value
  handleChange(event) { 
    this.setState({value: event.target.value});
  }

  //exec when user click on button
  lastName() {
    var lastname = this.state.value;
  }

 
  render() {
    return (
      <div id="parent">
      <Breadcrumb>
      <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
      <BreadcrumbItem active>Find Owners</BreadcrumbItem>
    </Breadcrumb>

    <div className="Content">

    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body>
    <h5>Find Owner(s)</h5>
    <br />
  <InputGroup size="lg" value={this.state.value} onChange={this.handleChange}>
    <InputGroupAddon addonType="prepend">
      <InputGroupText >Last name</InputGroupText>
    </InputGroupAddon>
    <Input />
  </InputGroup>
  <br />
  <a href={"/owners/list/"+this.state.value}><Button color="success" size="lg" onClick={this.lastName}>Find owner(s)</Button>{' '}</a>
  
  </Card>
      </Col>
      </Row>
      <div class="col-md-8 col-md-offset-6"> 
  <a href="/owners/add"><Button color="success" size="lg">Add owner</Button>{' '}</a>
  </div> 
  </div>
  </div>
)}}

