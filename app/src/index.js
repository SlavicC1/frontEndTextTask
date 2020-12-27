import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './components/app';

//var app = new Table({data: []});
var url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

//render(app.render(),document.getElementById('root'));

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
//var app = new App();
function constructTable(data){
    //app.setState(app.state);
    //var app = new App({data: data});
    //render(app.render() ,document.getElementById('root'));
    render(<App data={data}/>,document.getElementById('root'));
    console.log("loadDone");
}

console.log("loadStart");
console.log((<App/>) instanceof App);