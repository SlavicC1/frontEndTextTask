import React, {Component} from 'react';

class Navigation extends Component{
    constructor(changePageTo, props){
        super(props);
        this.state = {
            currentPageNomber: 1,
            lastPageNomber: 1
        };
        this.changePageTo = changePageTo;
    }

    render(){
        if(this.state.lastPageNomber <= 1){ 
            return (
                <div>
                    <p>{this.state.currentPageNomber}</p>
                </div>
            );
        } else if(this.state.currentPageNomber === 1){
            return (
                <div>
                    <p>{this.state.currentPageNomber}</p>
                    <button id="right" onClick={this.changePageTo(this.state.currentPageNomber+1)}>next</button>
                </div>
            );
        } else if(this.state.currentPageNomber === this.state.lastPageNomber){
            return (
                <div>
                    <button id="left" onClick={this.changePageTo(this.state.currentPageNomber-1)}>previous</button>
                    <p>{this.state.currentPageNomber}</p>
                </div>
            );
        } else{
            return (
                <div>
                    <button id="left" onClick={this.changePageTo(this.state.currentPageNomber-1)}>previous</button>
                    <p>{this.state.currentPageNomber}</p>
                    <button id="right" onClick={this.changePageTo(this.state.currentPageNomber+1)}>next</button>
                </div>
            );
        }
    }

}

export default Navigation;