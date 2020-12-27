import React, {Component} from 'react';

class Filter extends Component{

    render(){
        return(
            <div>
                <input></input>
                <button onClick={this.props.onClick}>Find</button>
            </div>
        );
    }
}

export default Filter;