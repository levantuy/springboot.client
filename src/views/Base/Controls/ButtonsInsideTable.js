import React, {Component} from 'react';
import { Button} from 'reactstrap';

class ButtonsInsideTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color="info" className="btn btn-info table-column-button" onClick={() => this.props.edit(this.props.rowIndex, this.props.row)}><i className="fa fa-edit"></i></Button>
                <Button color="danger" className="btn btn-danger table-column-button" onClick={() => this.props.delete(this.props.rowIndex, this.props.row)}><i className="fa fa-trash-o"></i></Button>
            </div>
        )
    }
}

export default ButtonsInsideTable;