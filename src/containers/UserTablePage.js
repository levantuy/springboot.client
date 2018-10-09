import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ButtonTableTop, Users } from '../views';
import { userActions } from '../actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserFormPage from './UserFormPage';

class UserTablePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tableId: "usersTableId",
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleFetchData = this.handleFetchData.bind(this);
    }

    handleAdd() {
        
    }

    handleFetchData(index, size) {
        this.props.getAll(index, size);
    }

    render() {
        // if error object exist show errors
        if (this.props.usersList.error) return (
            <div>

            </div>
        )

        // normal
        return (
            <div>
                <ButtonTableTop tableId={this.state.tableId} add={this.handleAdd} addUrl="/users/0" {...this.props}></ButtonTableTop>
                <Users tableId={this.state.tableId} add={this.handleAdd}
                    fetchData={this.handleFetchData} {...this.props}
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