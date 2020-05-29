import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'


class TodoListTask extends React.Component {
    state = {
        isEditMode: false,
        isEditModePriority: false
        // updated: null
    }


    activatedEditMode = () => {
        this.setState({
            isEditMode: true
        })

    }

    deActivatedEditMode = () => {
        this.setState({
            isEditMode: false
        })
        // this.props.task.updated = new Date().toLocaleTimeString('ru-RU', {
        //              hour: '2-digit',
        //            minute: '2-digit'})

    }


    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)

    }

    onIsTitleChange = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)

    }

    onIsPriorityChanged = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)

    }


    isTaskDeleted = () => {
        this.props.deleteTask(this.props.task.id);
    }


    render = () => {
        const priority = [{id: 0, priority: 'high'}, {id: 1, priority: 'medium'}, {id: 2, priority: 'low'}];
        let checked = this.props.task.isDone === true ? 'done' : ''
        let items = priority.map(item => <option key={item.id} value={item.priority}> {item.priority} </option>)

        return (
            <div className={`todoList-task + ${checked}`}>
                <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                {this.state.isEditMode ?
                    <input onChange={this.onIsTitleChange} value={this.props.task.title} autoFocus={true}
                           onBlur={this.deActivatedEditMode}/> : <span onDoubleClick={this.activatedEditMode}>
                    {this.props.task.id} - {this.props.task.title}</span>
                }
                ,

                {/*<span>priority: {this.state.isEditModePriority ?*/}
                {/*    <input onChange={this.onIsPriorityChanged} value={this.props.task.priority} autoFocus={true}*/}
                {/*           onBlur={this.deActivatedEditModePriority}/> : <span onDoubleClick={this.activatedEditModePriority}> {this.props.task.priority} </span>*/}
                {/*}*/}
                {/*</span>*/}

                <span> priority:
                        <select onChange={this.onIsPriorityChanged} value={this.props.task.priority}>
                            {/*<option value={this.state.priority[0]} >{this.state.priority[0]}</option>*/}
                            {/*<option value={this.state.priority[1]} >{this.state.priority[1]}</option>*/}
                            {/*<option value={this.state.priority[2]}>{this.state.priority[2]}</option>*/}

                            {items}
                        </select>
                    {/*{this.props.task.priority}*/}
                    </span>
                <div className='timeBlock'>
                    <span>created: {this.props.task.created}</span>
                    <span> updated: {this.props.task.updated}</span>
                    <span> finished: {this.props.task.finished} </span>
                </div>


                {/*<span>priority: {this.props.task.priority} </span>*/}
                <span onClick={this.isTaskDeleted}> <FontAwesomeIcon className='times' icon={faTimes}/> </span>
            </div>
        );
    }
}

TodoListTask.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string
}

export default TodoListTask;





