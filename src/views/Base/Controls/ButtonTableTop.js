import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from 'react-router-dom';

class ButtonTableTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Link to={this.props.addUrl}>
                <Button className="table-toolbar-button" color="primary" onClick={this.props.add}>Thêm mới</Button>
            </Link>            
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