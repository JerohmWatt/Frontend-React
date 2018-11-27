import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome on <Badge color="secondary">Petclinic</Badge></h1>
        <img src="/img/pet.jpg" alt="a dog and a cat"></img>
        
      </div>
    );
  }
}