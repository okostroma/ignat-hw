import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from "react-router-dom";
import classes from './Nav.module.css'


class Nav extends React.Component {

state = {
    isActive: false
}

onClickBtn = () => {
    this.setState({
        isActive: true
    })
    if (this.state.isActive) {
        this.setState({
            isActive: false
        })
    }
}


    render() {

    let active = this.state.isActive ? classes.activeBtn : '';




        return (
            <div className={classes.menu}>
                <div onClick={this.onClickBtn} className={classes.btnMenu} >
                    <div className={`${classes.btnLines} ${active}`}>
                    <div  className={classes.nav}>
                    <NavLink to='/monday' activeClassName={classes.active}>
                        <p>Monday</p> </NavLink>
                    <NavLink  to='/tuesday' activeClassName={classes.active}>
                        <p>Tuesday</p> </NavLink>
                    <NavLink  to='/wednesday' activeClassName={classes.active}>
                        <p>Wednesday</p> </NavLink>
                    <NavLink  to='/thursday' activeClassName={classes.active}>
                        <p>Thursday</p> </NavLink>
                    <NavLink  to='/friday' activeClassName={classes.active}>
                        <p>Friday</p> </NavLink>

                </div>
                    </div>

                </div>


            </div>


        );
    }
}

export default Nav;
