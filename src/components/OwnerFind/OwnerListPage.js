import axios from 'axios' 
import Owner from './Owner' //
import React, { Component } from 'react'

export default class OwnerListPage extends Component { 
  constructor() {
    super();
    this.state = {
      lastname : "",
    }
  }



  state = { owners:[] } //

  getOwners = async() => {
    
    console.log(this.props.match);
    if (this.props.match.params.id === undefined){
      console.log("vide");
    const response = await axios.get('http://localhost:9999/api/v1/owners')
    return await response
    } else {
      console.log("franklin lol");
    const response = await axios.get('http://localhost:9999/api/v1/owners/"'+ this.props.match.params.id + '"')
    return await response}
    
  }

  setOwners = () => {
    this.getOwners ()
    .then((response) => {
      let owners = []
      console.log(response)
      response.data.forEach(owner => {
        owners.push(
          <Owner key={owner.lastname} {...owner}/>
        )
      });
      console.log(owners)
      this.setState({owners})
    })
  }
  componentDidMount() {
    console.log("ca marche");
    
    this.setOwners()
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="Content">
      <div className="container xd-container">
        <h2>Owners</h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Pets</th>
              </tr>
            </thead>
            <tbody>
              {this.state.owners}
            </tbody>
        </table>
      </div>
      </div>
    )
  }
}

