import Rect,{Component} from 'react';

class Description extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.data == null)
        {
            return (
            <div>
                No one selected
            </div>);
        } else{
            return (
                <div>
                    Выбран пользователь <b>{this.props.data.firstName + " " + this.props.data.lastName}</b>
                    Описание:
                    <textarea>
                        {this.props.data.description || "Не указано"}
                    </textarea>
                    <p>Адрес проживания: <b>{this.props.data.address.streetAddress || "Не указано"}</b></p>
                    <p>Город: <b>{this.props.data.address.city || "Не указано"}</b></p>
                    <p>Провинция/штат: <b>{this.props.data.address.props || "Не указано"}</b></p>
                    <p>Индекс: <b>{this.props.data.address.zip || "Не указано"}</b></p>
                </div>
            );
        }
    }
}

export default Description;