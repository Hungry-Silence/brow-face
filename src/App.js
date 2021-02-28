import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import './assets/fontawesome';

function App() {
    return (
        <div className="App">

            <Header/> 

            <Main/> 

            <Footer/>

            <a className="btn-up"></a> 
            
        </div>
    );
}

export default App;
