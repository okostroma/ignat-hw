import React from 'react';
import logo from './logo.svg';
import './App.css';
import Monday from "./components/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Tuesday from "./components/Tuesday/Tuesday";
import AppTuesday from "./components/Tuesday/AppTuesday";


class App extends React.Component {




    render() {


        return (
            <HashRouter>

            <div className="App">
                <Nav />


                <div className='wrApp'>
                    <Route path='/monday' component={Monday} />
                    <Route path='/tuesday' component={AppTuesday} />
                </div>





            </div>
            </HashRouter>

        );
    }
}

export default App;
