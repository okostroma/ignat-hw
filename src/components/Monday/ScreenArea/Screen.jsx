import React from 'react';
import Button from "./Button";
import Text from "./Text";
import classes from './Screen.module.css'



class Screen extends React.Component {




    render() {



        return (
            <div>
                <div className={classes.buttonArea}>
                    <div className={classes.text}>
                        <Text counter={this.props.counter}/>
                    </div>

                    <Button error={this.props.error} value={this.props.value} onAddName={this.props.onAddName}/>
                </div>


            </div>
        );
    }
}

export default Screen;
