import React from 'react';
import avatar from './avatar.png'
import classes from './Avatar.module.css'


const Avatar = () => {
    return (<div>
            <img className={classes.avatar} src={avatar} alt="avatar"/>
        </div>

    );
}

export default Avatar;
