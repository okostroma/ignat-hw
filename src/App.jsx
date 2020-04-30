import React from 'react';
import logo from './logo.svg';
import './App.css';
import Monday from "./Monday";
import {HashRouter, Route} from "react-router-dom";
import Nav from "./Nav";


class App extends React.Component {




    render() {


        return (
            <HashRouter>

            <div className="App">
                <Nav />


                <div className='wrApp'>
                    <Route path='/monday' component={Monday} />
                </div>





            </div>
            </HashRouter>

        );
    }
}

export default App;
