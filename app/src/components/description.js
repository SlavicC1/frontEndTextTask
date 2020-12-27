import Rect,{Component} from 'react';

class Description extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: null
        };
    }

    render(){
        if(this.state.data == null)
        {
            return (
            <div>
                No one selected
            </div>);
        } else{
            return (
                <div>
                    Выбран пользователь <b>{this.state.data.firstName + " " + this.state.data.lastName}</b>
                    Описание:
                    <textarea>
                        {this.state.data.description}
                    </textarea>
                    <p>Адрес проживания: <b>{this.state.data.address.streetAddress}</b></p>
                    <p>Город: <b>{this.state.data.address.city}</b></p>
                    <p>Провинция/штат: <b>{this.state.data.address.state}</b></p>
                    <p>Индекс: <b>{this.state.data.address.zip}</b></p>
                </div>
            );
        }
    }
}

export default Description;