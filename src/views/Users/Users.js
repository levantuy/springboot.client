import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { ConfirmMessage } from '../Base/Controls';
import { functionGlobal } from '../../helpers';
import { reduxForm } from 'redux-form';
import { ButtonsInsideTable } from '../Base';


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      page: 1,
      sizePerPage: 10,
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteAccept = this.handleDeleteAccept.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  componentWillMount() {
    this.fetchData(0, 10);
  }

  fetchData(pageIndex, pageSize) {
    this.props.fetchData(pageIndex, pageSize);
  }

  handleDelete(rowIndex, row) {
    this.setState({ id: row.id });
    this.refs.confirmMessage.open('Xác nhận xóa dữ liệu!', 'Bạn có chắc chắn muốn xóa');
  }

  handleDeleteAccept() {
    this.props.delete(this.state.id);
  };

  handleTableChange = (type, { page, sizePerPage, filters }) => {
    var isExcute = false;
    // set page
    if (typeof (sizePerPage) == "number" && (this.state.page != page || this.state.sizePerPage != sizePerPage)) {
      this.setState({ page, sizePerPage }, () => {
        isExcute = true;
      });
    }
    // excute
    if (isExcute) this.fetchData(page, sizePerPage);
  }
  render() {

    if (!this.props.usersList || this.props.usersList.loading) return (<div>
      <h3>Đang tải dữ liệu</h3>
    </div>);    

    const columns = [{
      dataField: 'Id',
      text: 'User Id',
      hidden: true
    }, {
      dataField: 'name',
      text: 'Họ và tên',
      headerStyle: {
        width: '40%'
      }
    }, {
      dataField: 'username',
      text: 'Tên đăng nhập',
      headerStyle: {
        width: '15%'
      }
    }, {
      dataField: 'email',
      text: 'Email',
      headerStyle: {
        width: '25%'
      }
    }, {
      dataField: 'noexist',
      text: 'Xử lý',
      formatter: (cell, row, rowIndex, formatExtraData) => <ButtonsInsideTable editUrl="/users/" row={row} rowIndex={rowIndex} delete={this.handleDelete} />,
      headerStyle: {
        width: '20%'
      }
    }];

    return (
      <div>
        <ConfirmMessage onAccept={this.handleDeleteAccept} ref="confirmMessage"></ConfirmMessage>
        <BootstrapTable id={this.props.tableId}
          remote={{ pagination: true, filter: false }}
          keyField="id"
          data={this.props.usersList.users}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(functionGlobal.tableOptions(this.state.page, this.state.sizePerPage, this.props.usersList.totalElements))}
          onTableChange={this.handleTableChange}
          striped
          hover
          condensed
        />
      </div>
    );
  }
}

export default reduxForm({ form: 'Users' })(Users)