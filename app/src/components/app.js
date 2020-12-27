import React, {Component} from 'react';
import Filter from './filter';
import Navigation from './navigation';
import Description from './description';
import DataSizeChooser from './dataSizeChooser';
import Table from "./table";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: this.props.data,
            filterPhrase: "",
            currentPageNomber: 1,
            choosenElement: null
        };

        this.elementsOnPageCount = 50;

        this.dataSizeChooser = new DataSizeChooser();
        this.filter = new Filter({
            onClick: this.setFilterPhrase.bind(this)
        });
        this.table = new Table(this.state.data,this.sortElementsBy.bind(this),this.chooseElement.bind(this));
        this.navigation = new Navigation(this.changeCurrentPageNomber.bind(this));
        this.description = new Description();
    }

    render(){
        return (
            <div>
                {this.dataSizeChooser.render()}
                {this.filter.render()}
                {this.table.render()}
                {this.navigation.render()}
                {this.description.render()}
            </div>);
    }

    setFilterPhrase(e){
        this.setState({
            data: this.state.data,
            filterPhrase: e.target.parentElement.getElementsByTagName("INPUT")[0].value,
            currentPageNomber: this.state.currentPageNomber,
            choosenElement: this.choosenElement
        });
        this.sendDataToTable(this.table.tableHeader.state);
    }

    deepSeach(el, subStr){
        var res = false;
        for(var key in el){
            if(key === "address"){
                res = res || this.deepSeach(el[key], subStr);
            } else{
                res = res || el[key].toString().search(subStr)+1;
            }
        }

        return res;
    }

    changeCurrentPageNomber(newCurrentPageNomber){
        return (function(e){
            this.setState({
                data: this.state.data,
                filterPhrase: this.state.filterPhrase,
                currentPageNomber: newCurrentPageNomber,
                choosenElement: this.state.choosenElement
            });
        }).bind(this);
    }

    sendDataToTable(headerState){
        var elements = this.state.data.filter(el => {
            return this.deepSeach(el, this.state.filterPhrase);
        });

        this.resetPageNomber(elements.length);

        this.description.setState({
            data: this.state.choosenElement
        });

        elements = elements.slice((this.state.currentPageNomber - 1)*this.elementsOnPageCount,
                                   this.state.currentPageNomber*this.elementsOnPageCount);
        this.table.setState({
            chooseElement: this.table.state.choosenElement,
            data: elements 
        });
        this.table.tableHeader.setState(headerState);
    }

    resetPageNomber(countOfElements){
        this.setState({
            data: this.state.data,
            filterPhrase: this.state.filterPhrase,
            currentPageNomber: Math.min(Math.ceil(countOfElements/this.elementsOnPageCount),this.state.currentPageNomber),
            choosenElement: this.state.choosenElement
        });
        this.navigation.setState({
            currentPageNomber: this.state.currentPageNomber,
            lastPageNomber: Math.ceil(countOfElements/this.elementsOnPageCount)
        });
    }

    chooseElement(data){
        return (function(e){
            this.setState({
                data: this.state.data,
                filterPhrase: this.state.filterPhrase,
                currentPageNomber: this.state.currentPageNomber,
                choosenElement: data
            });
        }).bind(this);
    }

    sortElementsBy(e){
        var newState = this.table.tableHeader.state;
        for(let key in newState){
            if(e.target.id === key){
                if(this.table.tableHeader.state[key] === "\u25b2 " + key){
                    newState[key] = "\u25bc " + key;
                    this.state.data.sort((a,b) => {
                        if(a[e.target.id] > b[e.target.id]) return 1;
                        if(a[e.target.id] === b[e.target.id]) return 0;
                        if(a[e.target.id] < b[e.target.id]) return -1;
                        return 0;
                    });
                } else{
                    newState[key] = "\u25b2 " + key;
                    this.state.data.sort((a,b) => {
                        if(a[e.target.id] < b[e.target.id]) return 1;
                        if(a[e.target.id] === b[e.target.id]) return 0;
                        if(a[e.target.id] > b[e.target.id]) return -1;
                        return 0;
                    });
                }
            } else{
                newState[key] = "\u25ae " + key;
            }
        }

        this.sendDataToTable(newState);
    }
}

export default App;