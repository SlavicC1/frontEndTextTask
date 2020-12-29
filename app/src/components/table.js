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
            (el, i) => {
                if(el === this.props.choosenElement){
                    return (<TableElement key={i*1000+el.id} bg="yellow" data={el} showDescriptionClick={this.props.onElementClick} />);
                } else{
                    return (<TableElement key={i*1000+el.id} bg="white" data={el} showDescriptionClick={this.props.onElementClick} />);
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