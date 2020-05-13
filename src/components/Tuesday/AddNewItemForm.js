import React from 'react';
import '../../App.css';

class AddNewItemForm extends React.Component {


    state = {
        error: false,
        title: ''
    }

    onAddItemClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === '') {
            this.setState({error: true})
        } else {
            this.setState({title: '', error: false})
            this.props.addItem(newTitle)
        }

    }
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddItemClick();
        }

    }

    render = () => {
        let error = this.state.error === true ? 'error' : ''

        return (
            <div className="todoList-newTaskForm">


                <input className={error}
                       value={this.state.title} onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       type="text" placeholder="New item name"/>
                <button onClick={this.onAddItemClick}>Add</button>


            </div>
        );
    }
}

export default AddNewItemForm;

