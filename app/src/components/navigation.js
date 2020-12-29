import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        if(this.props.lastPageNomber <= 1){ 
            return (
                <div className="footer-navigation">
                    {this.props.currentPageNomber}
                </div>
            );
        } else if(this.props.currentPageNomber === 1){
            return (
                <div className="footer-navigation">
                    <button disabled style={{visibility: "hidden"}} id="left" onClick={this.props.onClick(this.props.currentPageNomber-1)}>previous</button>
                    {this.props.currentPageNomber}
                    <button id="right" onClick={this.props.onClick(this.props.currentPageNomber+1)}>next</button>
                </div>
            );
        } else if(this.props.currentPageNomber === this.props.lastPageNomber){
            return (
                <div className="footer-navigation">
                    <button id="left" onClick={this.props.onClick(this.props.currentPageNomber-1)}>previous</button>
                    {this.props.currentPageNomber}
                    <button disabled style={{visibility: "hidden"}} id="right" onClick={this.props.onClick(this.props.currentPageNomber+1)}>next</button>
                </div>
            );
        } else{
            return (
                <div className="footer-navigation">
                    <button id="left" onClick={this.props.onClick(this.props.currentPageNomber-1)}>previous</button>
                    {this.props.currentPageNomber}
                    <button id="right" onClick={this.props.onClick(this.props.currentPageNomber+1)}>next</button>
                </div>
            );
        }
    }

}

export default Navigation;