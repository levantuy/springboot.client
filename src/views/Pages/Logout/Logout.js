import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { reduxForm } from 'redux-form';

class Logout extends Component {

    constructor(props) {
        super(props);
        // reset login status
        this.props.logout();
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <p>Đang thực hiện đăng xuất</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default reduxForm({ form: 'Logout' })(Logout);

