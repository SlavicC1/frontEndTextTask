import React, {Component} from 'react';

class Navigation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.lastPageNomber <= 1){ 
            return (
                <div>
                    <p>{this.props.currentPageNomber}</p>
                </div>
            );
        } else if(this.props.currentPageNomber === 1){
            return (
                <div>
                    <p>{this.props.currentPageNomber}</p>
                    <button id="right" onClick={this.props.onClick(this.props.currentPageNomber+1)}>next</button>
                </div>
            );
        } else if(this.props.currentPageNomber === this.props.lastPageNomber){
            return (
                <div>
                    <button id="left" onClick={this.props.onClick(this.props.currentPageNomber-1)}>previous</button>
                    <p>{this.props.currentPageNomber}</p>
                </div>
            );
        } else{
            return (
                <div>
                    <button id="left" onClick={this.props.onClick(this.props.currentPageNomber-1)}>previous</button>
                    <p>{this.props.currentPageNomber}</p>
                    <button id="right" onClick={this.props.onClick(this.props.currentPageNomber+1)}>next</button>
                </div>
            );
        }
    }

}

export default Navigation;