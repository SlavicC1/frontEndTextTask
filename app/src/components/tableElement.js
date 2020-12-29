import React, {Component} from 'react';

class TableElement extends Component{
   
    render(){
        return (
        <tr style={{background: this.props.bg}} onClick={this.props.showDescriptionClick(this)}>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.firstName}</td>
            <td>{this.props.data.lastName}</td>
            <td>{this.props.data.email}</td>
            <td>{this.props.data.phone}</td>
        </tr>);
    }
}

export default TableElement;