import React, {Component} from 'react';
import Search from './search';
import Navigation from './navigation';
import Description from './description';
import DataSizeChooser from './dataSizeChooser';
import Table from "./table";
import AddElement from "./addElement";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataIsLoading: false,
            data: props.data,
            searchPhrase: "",
            currentPageNomber: 1,
            choosenElement: null
        };
        this.ELEMENTSONPAGE = 50;
        this.loadAnimation = "Loading";
    }

    render(){
        if(this.state.dataIsLoading){
            return(
                <div>
                    <DataSizeChooser onClick={this.loadNewData.bind(this)}/>
                    <Search onClick={this.setSearchPhrase.bind(this)}/>
                    <p>{this.loadAnimation}</p>
                    <Navigation currentPageNomber={this.state.currentPageNomber} 
                        lastPageNomber={Math.ceil(this.filtredData(this.state.data).length/this.ELEMENTSONPAGE)} 
                        onClick={this.changeCurrentPageNomber.bind(this)}/>
                    <Description data={this.state.choosenElement}/>
                </div>
            );
        } else{
            return(
                <div>
                    <DataSizeChooser onClick={this.loadNewData.bind(this)}/>
                    <AddElement addNewElement={this.addElement.bind(this)}/>
                    <Search onClick={this.setSearchPhrase.bind(this)}/>
                    <Table data={this.dataOnCurrentPage(this.filtredData(this.state.data))} 
                        choosenElement={this.state.choosenElement}
                        onHeaderClick={this.sortData.bind(this)} onElementClick={this.showElementDescription.bind(this)}/>
                    <Navigation currentPageNomber={this.state.currentPageNomber} 
                        lastPageNomber={Math.ceil(this.filtredData(this.state.data).length/this.ELEMENTSONPAGE)} 
                        onClick={this.changeCurrentPageNomber.bind(this)}/>
                    <Description data={this.state.choosenElement}/>
                </div>
            );
        }
    }

    filtredData(){
        return this.state.data.filter(el => {
            return this.deepSeach(el, this.state.searchPhrase);
        });
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

    dataOnCurrentPage(elements){
        return elements.slice((this.state.currentPageNomber - 1)*this.ELEMENTSONPAGE,
            this.state.currentPageNomber*this.ELEMENTSONPAGE);
    }

    changeCurrentPageNomber(newCurrentPageNomber){
        return (function(e){
            this.setState({
                dataIsLoading: this.state.dataIsLoading,
                data: this.state.data,
                filterPhrase: this.state.filterPhrase,
                currentPageNomber: newCurrentPageNomber,
                choosenElement: this.state.choosenElement
            });
        }).bind(this);
    }

    setSearchPhrase(itself){
        return function(e){
            this.state.searchPhrase = e.target.parentElement.getElementsByTagName("INPUT")[0].value;
            this.state.currentPageNomber = Math.ceil(this.filtredData(this.state.data).length/this.ELEMENTSONPAGE);
            this.setState({
                dataIsLoading: this.dataIsLoading,
                data: this.state.data,
                searchPhrase: e.target.parentElement.getElementsByTagName("INPUT")[0].value,
                currentPageNomber: this.state.currentPageNomber,
                choosenElement: this.state.choosenElement
            });
        }.bind(this);
    }

    sortData(itself){
        return function(e){
            var newState = itself.state;
            for(let key in newState){
                if(e.target.id === key){
                    if(itself.state[key] === "\u25b2 " + key){
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
            itself.setState(newState);
            this.setState(this.state);
        }.bind(this);
    }

    showElementDescription(itself){
        return function(e){
            this.setState({
                dataIsLoading: this.state.dataIsLoading,
                data: this.state.data,
                searchPhrase: this.state.searchPhrase,
                currentPageNomber: this.state.currentPageNomber,
                choosenElement: itself.props.data
            });
        }.bind(this);
    }

    addElement(el){
        this.state.data.unshift(el);
        this.setState(this.state);
    }

    loadNewData(itself, url){
        return function(e){
            this.setState({
                dataIsLoading: true,
                data: [],
                searchPhrase: this.state.searchPhrase,
                currentPageNomber: 1,
                choosenElement: null
            });
            this.loading();
            fetch(url).then(
                response => { 
                    return response.json();
                })
            .then( data => {
                this.setState({
                    dataIsLoading: false,
                    data: data,
                    searchPhrase: this.state.searchPhrase,
                    currentPageNomber: 1,
                    choosenElement: null
                });
            });
        }.bind(this);
    }

    loading(){
        return setTimeout(function(){
            if(this.state.dataIsLoading){
                if(this.loadAnimation.length < 10){
                    this.loadAnimation = this.loadAnimation + "."
                } else{
                    this.loadAnimation = "Loading";
                }
                this.loading();
            } else{
                this.loadAnimation = "Loading";
            }
            this.setState(this.state);
        }.bind(this), 100);
    }
}

export default App;