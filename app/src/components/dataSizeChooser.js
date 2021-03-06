import React, {Component} from 'react';

class DataSizeChooser extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: ""
        };
    }

    componentDidMount(){
        document.getElementById("radioSizeChooser2").checked = true;
    }

    render(){
        var smallurl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
        var bigurl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
        return (
            <div className="header-chooser">
                <p>
                    <input type="radio" name="setDataSize" id="radioSizeChooser1" onClick={this.setUrl.call(this,bigurl)}></input>
                    <label htmlFor="radioSizeChooser1">Big Data</label>
                </p>
                <p>
                    <input type="radio" name="setDataSize" id="radioSizeChooser2" onClick={this.setUrl.call(this,smallurl)}></input>
                    <label htmlFor="radioSizeChooser2">Small Data</label>
                </p>
                <p>
                    <button onClick={this.props.onClick(this,this.state.url)}>load</button>
                </p>
            </div>
        );
    }

    setUrl(url){
        return function(e){
            if(e.target.id === "radioSizeChooser1"){
                this.setState({
                    url: url
                });
            } else{
                this.setState({
                    url: url
                });
            }
        }.bind(this);
    }
}

export default DataSizeChooser;