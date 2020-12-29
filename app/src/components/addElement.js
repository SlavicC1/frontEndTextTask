import React, {Component} from 'react';
import Description from './description';

class AddElement extends Component{
    constructor(props){
        super(props)
        this.state = {
            formIsOpen: false,
            Confirmable: false
        };
    }

    render(){
        if(this.state.formIsOpen){
            return (<div>
                <input id="idInput" placeholder="123" onChange={this.dataVerification.bind(this)}></input>
                <input id="firstNameInput" placeholder="Adam" onChange={this.dataVerification.bind(this)}></input>
                <input id="lastNameInput" placeholder="Sendler" onChange={this.dataVerification.bind(this)}></input>
                <input id="emailInput" placeholder="mailbox@mail.com" onChange={this.dataVerification.bind(this)}></input>
                <input id="phoneInput" placeholder="(xxx)xxx-xxxx" onChange={this.dataVerification.bind(this)}></input>
                <button disabled={!this.state.confirmable} onClick={this.confirmNewElement.bind(this)}>Confirm</button>
                <button onClick={this.close.bind(this)}>Close</button>
            </div>)
        } else{
            return (<div>
                <button onClick={this.openForm.bind(this)}>Add Element</button>
            </div>)
        }
    }

    openForm(e){
        this.setState({
            formIsOpen: true,
            confirmable: this.state.confirmable
        });
    }

    close(){
        this.setState({
            formIsOpen: false,
            confirmable: this.state.confirmable
        });
    }

    confirmNewElement(e){
        if(this.state.confirmable){
            this.setState({
                formIsOpen: false,
                confirmable: false
            });
            this.props.addNewElement({
                id: +document.getElementById("idInput").value,
                firstName: document.getElementById("firstNameInput").value,
                lastName: document.getElementById("lastNameInput").value,
                email: document.getElementById("emailInput").value,
                phone: document.getElementById("phoneInput").value,
                address: {

                },
                description: ""
            });
        }
    }

    //onCange!!
    dataVerification(e){
        if(/^\d+$/.test(document.getElementById("idInput").value) &&
        /^\w+$/.test(document.getElementById("firstNameInput").value) &&
        /^\w+$/.test(document.getElementById("lastNameInput").value) &&
        /^\w+@\w+.\w+$/.test(document.getElementById("emailInput").value) &&
        /^\(\d{3}\)\d{3}-\d{4}$/.test(document.getElementById("phoneInput").value)){
            this.setState({
                formIsOpen: this.state.formIsOpen,
                confirmable: true
            });
        } else{
            this.setState({
                formIsOpen: this.state.formIsOpen,
                confirmable: false
            });
        }
    }
}

export default AddElement;