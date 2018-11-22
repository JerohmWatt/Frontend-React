import * as React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Card, Button, Row, Col } from 'reactstrap';


export default () => (
    <div className="Content">
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body>
    <h5>Find Owners</h5>
    <br />
  <InputGroup size="lg">
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Last name</InputGroupText>
    </InputGroupAddon>
    <Input />
  </InputGroup>
  <Button color="success" size="lg">Find owners</Button>{' '}
  </Card>
      </Col>
      </Row>
      <div class="col-md-8 col-md-offset-6"> 
  <Button color="success" size="lg" onclick="window.location.href='/owners/list'">Add owner</Button>{' '}
  </div> 
  </div>
);