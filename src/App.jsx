import React from 'react';
import logo from './logo.svg';
import './App.css';
import Monday from "./components/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Tuesday from "./components/Tuesday/Tuesday";
import AppTuesday from "./components/Tuesday/AppTuesday";
import Wednesday from "./components/Wednesday/Wednesday";
import {connect} from "react-redux";


class App extends React.Component {



    render() {


        return (
            <HashRouter>

            <div className={this.props.style.BodyClass}>
                <Nav />


                <div className='wrApp'>
                    <Route path='/monday' component={Monday} />
                    <Route path='/tuesday' component={AppTuesday} />
                    <Route path='/wednesday' component={Wednesday} />
                </div>





            </div>
            </HashRouter>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        style: state.settingsReducer.style
    }
}

export default connect(mapStateToProps,null)(App);
