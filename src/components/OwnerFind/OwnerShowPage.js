import axios from 'axios' 
import Owners from './Owners' //
import React, { Component } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Card, Button, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class OwnerShowPage extends Component { 
  
  state = { owners:[] } //taleau de vets stocké dans le state
  //ownerId !

  constructor(props) {
    super(props);
    this.ownerId= 0;
    this.lastname='';
}


  getOwners = async() => {
    
    console.log(this.props.match);
    if (this.props.match.params.id === undefined){
      //error ? car page pour info et rien reçu
    } else {
    //if user enter lastname
    const response = await axios.get('http://localhost:9999/api/v1/owners/"'+ this.props.match.params.id + '"')
    return await response}
    
  }

  setOwners = () => {
    this.getOwners ()
    .then((response) => {
      let owners = []
      console.log(response)
      response.data.forEach(owner => {
        this.setState({ ownerId: owner.ownerId, lastname: owner.lastName });
        owners.push(
          <Owners key={owner.lastname} {...owner}/>
        )
      });
      console.log(owners)
      this.setState({owners})
    })
  }

  componentDidMount() {
    this.setOwners()
  }


  render() {
    return (
      <div id="parent">
      <Breadcrumb>
      <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
      <BreadcrumbItem active>Owners list</BreadcrumbItem>
    </Breadcrumb>
    <div class="row">
  <div class="col-9">
      <div className="container xd-container">
        <h2>Owner information</h2>
        <br />
        <table className="table table-striped">
            <thead>
            </thead>
            <tbody>
            {this.state.owners}
            </tbody>
        </table>
        </div>
        </div>
      </div>
      <a href={"/pet/add/"+this.state.ownerId+"/"+this.state.lastname}><Button style={{marginLeft: 1 + 'em'}}>Add New Pet</Button></a>
      <br />
      <div class="row">
  <div class="col-9">
      <div className="container xd-container">
      <br />
        <h2>Pets and Visits</h2>
        <br />
        <table className="table table-striped">
            <thead>
            </thead>
            <tbody>
            {this.state.owners}
            </tbody>
        </table>
        </div>
        </div>
      </div>
      </div>
    
    )
  }
}

