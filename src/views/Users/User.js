import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class User extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Họ và tên: John Le</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Link to="/users">
            <Button>Đóng</Button>
          </Link>
        </Row>
      </div>
    )
  }
}

export default User;
