import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

class UserFormPage extends Component {
    constructor(props){
        super(props);

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
                            <UserDetails user_id={this.state.user_id} Exit={this.handleExit.bind(this)} update_asset_id={this.handleAssetId} />
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
    usersList: state.usersList,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (pageIndex, pageSize) => {
            dispatch(userActions.getAll(pageIndex, pageSize));
        }, delete: () => {
            dispatch(userActions.delete());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserFormPage);