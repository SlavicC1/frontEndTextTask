import React, {Component} from 'react';

class TableElement extends Component{
    constructor(data,showDescriptionClick, props){
        super(props);
        this.state = {
            data: data,
            bg: "transparent"
        }
        this.showDescriptionClick = showDescriptionClick;
    }
    
    render(){
        return (
        <tr style={{background:  this.state.bg}} onClick={this.showDescriptionClick}>
            <td>{this.state.data.id}</td>
            <td>{this.state.data.firstName}</td>
            <td>{this.state.data.lastName}</td>
            <td>{this.state.data.email}</td>
            <td>{this.state.data.phone}</td>
        </tr>);
    }
}

export default TableElement;