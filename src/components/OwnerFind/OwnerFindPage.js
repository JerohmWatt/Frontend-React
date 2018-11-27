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
  <br />
  <a href="/owners/list"><Button color="success" size="lg">Find owners</Button>{' '}</a>
  </Card>
      </Col>
      </Row>
      <div class="col-md-8 col-md-offset-6"> 
  <a href="/owners/add"><Button color="success" size="lg">Add owner</Button>{' '}</a>
  </div> 
  </div>
);