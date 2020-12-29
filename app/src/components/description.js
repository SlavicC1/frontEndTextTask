import React,{Component} from 'react';

class Description extends Component{

    render(){
        if(this.props.data == null)
        {
            return (
                    <div className="footer-description">
                        <p>Выбран пользователь</p>
                        <p>Описание:</p>
                        <textarea>
                        </textarea>
                        <p>Адрес проживания:</p>
                        <p>Город:</p>
                        <p>Провинция/штат:</p>
                        <p>Индекс:</p>
                    </div>
                );
        } else{
            return (
                <div className="footer-description">
                    <p>Выбран пользователь <b>{this.props.data.firstName + " " + this.props.data.lastName}</b></p>
                    <p>Описание:</p>
                    <textarea value={this.props.data.description || "Не указано"}></textarea>
                    <p>Адрес проживания: <b>{this.props.data.address.streetAddress || "Не указано"}</b></p>
                    <p>Город: <b>{this.props.data.address.city || "Не указано"}</b></p>
                    <p>Провинция/штат: <b>{this.props.data.address.state || "Не указано"}</b></p>
                    <p>Индекс: <b>{this.props.data.address.zip || "Не указано"}</b></p>
                </div>
            );
        }
    }
}

export default Description;