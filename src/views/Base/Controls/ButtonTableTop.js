import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ButtonTableTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Button className="table-toolbar-button" color="primary" onClick={this.props.add}>Thêm mới</Button>
            <ReactHTMLTableToExcel
                id="btnExportId"
                className="table-toolbar-button btn btn-warning"
                table={this.props.tableId}
                filename={this.props.tableId}
                sheet={this.props.tableId}
                buttonText='Export'
            />
        </div>);
    }
}

export default ButtonTableTop;