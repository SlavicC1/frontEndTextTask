import React, {Component} from 'react';

class Filter extends Component{

    render(){
        return(
            <div className="header-search">
                <input></input>
                <button onClick={this.props.onClick(this)}>Find</button>
            </div>
        );
    }
}

export default Filter;