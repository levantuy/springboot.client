import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ButtonsInsideTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={this.props.editUrl + this.props.row.id}>
                    <Button color="info" className="btn btn-info table-column-button"><i className="fa fa-edit"></i></Button>
                </Link>
                <Button color="danger" className="btn btn-danger table-column-button" onClick={() => this.props.delete(this.props.rowIndex, this.props.row)}><i className="fa fa-trash-o"></i></Button>
            </div>
        )
    }
}

export default ButtonsInsideTable;