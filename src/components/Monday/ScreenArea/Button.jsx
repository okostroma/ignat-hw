import React from 'react';
import classes from './Button.module.css'
import '../../../App.css';




class Button extends React.Component {

    state = {
        error: false,
        title: ''
    }



    onAddNewName = () => {
        let newName = this.state.title.trim();

        if (newName === '') {this.setState({error: true})} else {this.setState({title: '', error: false})
            this.props.onAddName(newName)}

    }

    isNameChanged = (e) => {
        this.setState({
            title: e.currentTarget.value,
            error: false
        })
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddNewName();

        }

    }


    render() {
        let error =  this.state.error  ? 'error' : '';


        return (
            <div>
                <input className={error} value={this.state.title} onKeyPress={this.onKeyPress} onChange={this.isNameChanged} type="text"/>
                <button onClick={this.onAddNewName} > Click </button>
            </div>
        );
    }
}

export default Button;
