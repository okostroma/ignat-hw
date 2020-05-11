import React from 'react';
import '../../App.css';

class TodoListHeader extends React.Component {


    state = {
        error: false,
        title: ''
    }

    onAddTaskClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === '') {
            this.setState({error: true})
        } else {
            this.setState({title: '', error: false})
            this.props.addTask(newTitle)
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
            this.onAddTaskClick();
        }

    }

    render = () => {
        let error = this.state.error === true ? 'error' : ''

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={error}
                           value={this.state.title} onChange={this.onTitleChanged} onKeyPress={this.onKeyPress}
                           type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

