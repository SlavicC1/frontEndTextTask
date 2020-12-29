import React from 'react';
import {render} from 'react-dom';
import App from './components/app';

var url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

//function loadData(url){
    fetch(url)
    .then(
        response => { 
            return response.json();
        })
    .then( data => {
        constructTable(data);
    });
//}

function constructTable(data){
    render(<App data={data}/>,document.getElementById('root'));
}