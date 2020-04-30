import React from 'react';




class Text extends React.Component {


    render() {


        return (
            <div>
                <span>{this.props.counter} ~ </span>
            </div>
        );
    }
}

export default Text;
