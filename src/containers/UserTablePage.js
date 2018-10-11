import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonTableTop, Users, ErrorForm } from '../views';
import { userActions } from '../actions';

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
        if (this.props.usersList.error) return (<ErrorForm code={this.props.usersList.error.code} message={this.props.usersList.error.message}/>);

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