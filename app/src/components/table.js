import React,{Component} from 'react';
import TableHeader from './tableHeader';
import TableElement from './tableElement';

class Table extends Component{
    constructor(data,sortClick, showDescriptionClick, props){
        super(props);

        this.state = {
            choosenElement: null,
            data: data
        };
        this.tableHeader = new TableHeader(sortClick);
        this.showDescriptionClick = showDescriptionClick;
    }

    render(){

        const elements = this.state.data.map(
            el => {
                    return (new TableElement(el,this.showDescriptionClick(el),{key: el.id}).render());
            });
        return(
                <table>
                    <thead>
                        {this.tableHeader.render()}
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                );
    }

}

export default Table;