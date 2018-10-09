import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ButtonTableTop, Users } from '../views';
import { userActions } from '../actions';

class UserTablePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableId: "usersTableId",
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleFetchData = this.handleFetchData.bind(this);
    }

    handleAdd(){

    }

    handleFetchData(index, size){
        this.props.getAll(index, size);
    }

    render(){
        return(
            <div>
                <ButtonTableTop tableId ={this.state.tableId} add={this.handleAdd} {...this.props}></ButtonTableTop>
                <Users tableId ={this.state.tableId}
                    fetchData = {this.handleFetchData} {...this.props}
                />
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(UserTablePage);