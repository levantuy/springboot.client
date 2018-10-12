import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      username: '',
      name: 'test', 
      email: '',
    }    
  }

  componentWillMount(){
    this.props.getUser(this.props.id); 
  }

  componentWillReceiveProps(nextProps){
    if(this.props.user){
      this.setState({
        id: this.props.userForm.userInfo.id,
        username: this.props.userForm.userInfo.username,
        name: this.props.userForm.userInfo.name,
        email: this.props.userForm.userInfo.email,
      });
    }
  }  

  shouldComponentUpdate(){
    if(this.props.userForm){
      this.setState({
        id: this.props.userForm.userInfo.id,
        username: this.props.userForm.userInfo.username,
        name: this.props.userForm.userInfo.name,
        email: this.props.userForm.userInfo.email,
      });
    }
    return true;
  }

  render() {
    if(this.props.userForm.loading) return(<div><h3>loading...</h3></div>)

    return (      
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Họ và tên: {this.state.name}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <Input value={this.state.name}></Input>
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

export default reduxForm({ form: 'User' })(User);
