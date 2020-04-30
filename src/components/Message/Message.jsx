import React from 'react';
import classes from './Message.module.css'


class Message extends React.Component {




    render() {
        let addQualities = this.props.quality.map(quality => {
            let activeClassName = quality.active ? classes.activeClass : '';
            return <span key={quality.id} className={activeClassName}>{quality.title + ' | '}</span>
        });

        return (
            <div className={classes.message}>
                <p className={classes.author}>Кострома Оксана</p>
                <p className={classes.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit olore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet.
                </p>
                {addQualities}
                <p className={classes.time}> {new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>

            </div>

        );
    }
}

export default Message;
