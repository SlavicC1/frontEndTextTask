import React, {Component} from 'react';

class TableHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "\u25ae id",
            firstName: "\u25ae firstName",
            lastName: "\u25ae lastName",
            email: "\u25ae email",
            phone: "\u25ae phone"
        };
    }

    render(){
        return (
            <tr id="tableHeader" onClick={this.props.sortClick(this)}>
                <th id="id">{this.state.id}</th>
                <th id="firstName">{this.state.firstName}</th>
                <th id="lastName">{this.state.lastName}</th>
                <th id="email">{this.state.email}</th>
                <th id="phone">{this.state.phone}</th>
            </tr>);
    }
}

export default TableHeader;