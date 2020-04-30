import React from 'react';
import classes from './Names.module.css'



class Name extends React.Component {


    render() {


        return (
            <div>
                <span> {this.props.name}</span>

            </div>
        );
    }
}

export default Name;
