import React from 'react';
import classes from './Names.module.css'
import Name from "./Name";



class Names extends React.Component {


    render() {
        let namesNew = this.props.names.map(name => <Name key={name.id} name={name.name}/>)


        return (
            <div className={classes.names}>
                <div className={classes.item}>
                    <div>{namesNew}</div>
                </div>


            </div>
        );
    }
}

export default Names;
