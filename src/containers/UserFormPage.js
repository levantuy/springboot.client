import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { User } from '../views';
import classnames from 'classnames';
import { connect } from 'react-redux';

class UserFormPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: '1',            
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(activeTab){
        this.setState({activeTab});
    }
    
    render() {
        return (<div className="animated fadeIn">
            <Row>
                <Col xs="12" md="12" className="mb-12">
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Thông tin người dùng</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Quyền người dùng</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Quyền nhóm người dùng</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>Đơn vị làm việc</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <User />
                        </TabPane>
                        <TabPane tabId="2">
                            
                        </TabPane>
                        <TabPane tabId="3">
                            
                        </TabPane>
                        <TabPane tabId="4">
                            
                        </TabPane>
                    </TabContent>
                </Col></Row>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserFormPage);