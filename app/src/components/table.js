import React,{Component} from 'react';
import TableHeader from './tableHeader';
import TableElement from './tableElement';

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            choosenElement: null
        };
    }

    render(){

        const elements = this.props.data.map(
            el => {
                if(el == this.props.choosenElement){
                    return (<TableElement bg="yellow" data={el} showDescriptionClick={this.props.onElementClick} />);
                } else{
                    return (<TableElement bg="white" data={el} showDescriptionClick={this.props.onElementClick} />);
                }
            });
        return(
                <table>
                    <thead>
                        <TableHeader sortClick={this.props.onHeaderClick}/>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                );
    }

}

export default Table;