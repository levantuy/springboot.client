import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader, Alert } from 'reactstrap';

class ErrorForm extends Component {

    render() {
        return (<div>
            <Row>
                <Col xs="12" md="3"></Col>
                <Col xs="12" md="6">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i><strong>Thông báo lỗi</strong>
                            {/* <small>additional content</small> */}
                        </CardHeader>
                        <CardBody>
                            <Alert color="danger">
                                <h4 className="alert-heading">{this.props.code}</h4>
                                <p>
                                    {this.props.message}
                  </p>
                                <hr />
                                {/* <p className="mb-0">
                                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                  </p> */}
                            </Alert>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3"></Col>
            </Row>
        </div>);
    }
}

export default ErrorForm;