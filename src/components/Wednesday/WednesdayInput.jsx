import React from 'react';
import classes from './Wednesday.module.css'

class WednesdayInput extends React.Component {

    isThemeChanged = (e) => {

        this.props.onThemeChanged(this.props.id, e.currentTarget.checked, this.props.id)
    }

    render() {


        return (

            <div>
                <input type='radio' name='radio' onChange={this.isThemeChanged} id={this.props.id}
                       checked={this.props.picked}/>
                <label htmlFor={this.props.id}> {this.props.name} </label>

            </div>

        );
    }
}

export default WednesdayInput;
