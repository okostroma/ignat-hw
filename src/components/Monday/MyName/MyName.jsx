import React from 'react';
import classes from './MyName.module.css'


const MyName = () => {
    return (<div>
            <p className={classes.name1}>Кострома Оксана Владимировна</p>
            <p className={classes.name2}>Magic</p>
        </div>
    );
}

export default MyName;
