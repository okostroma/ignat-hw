import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import MyName from "./MyName/MyName";
import Message from "./Message/Message";
import Avatar from "./Avatar/Avatar";
import Names from "./ScreenArea/Names";
import Screen from "./ScreenArea/Screen";
import classes from './Monday.module.css'


class Monday extends React.Component {

state = {
    qualities: [
        {id: 0, title: 'good-tempered', active: false},
        {id: 1, title: 'funny', active: true},
        {id: 2, title: 'responsible', active: false},
        {id: 3, title: 'kind', active: false}
    ],
    counter: 1,
    names: [
        {id: 0, name: 'Oxa'}
    ]


}


    onAddName = (newName) => {

         let newText = {
             id: Math.round(Math.random()*10),
             name: newName
         }

         let newNames = [...this.state.names, newText]


        this.setState({
            names: newNames,
            counter: this.state.counter + 1

        });
    }



    render() {


        return (

            <div className={classes.monday}>
                <MyName/>
                <Avatar/>
                <Message quality={this.state.qualities} />
                <Screen counter={this.state.counter} onAddName={this.onAddName}/>
                <Names names={this.state.names}/>

            </div>

        );
    }
}

export default Monday;
