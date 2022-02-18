import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import PersonUI from './components/PersonUI';

function App(){

    return (
        <div className="App">
            <NavbarComponent/>
            <PersonUI/>
        </div>
    )
}


export default App;