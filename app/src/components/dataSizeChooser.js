import React, {Component} from 'react';

class DataSizeChooser extends Component{
    render(){
        return (
            <div>
                <input type="radio" name="setDataSize" id="radioSizeChooser1"></input>
                <label for="radioSizeChooser1">Big Data</label>
                <input type="radio" name="setDataSize" id="radioSizeChooser2"></input>
                <label for="radioSizeChooser2">Small Data</label>

                <button>load</button>
            </div>
        );
    }
}

export default DataSizeChooser;