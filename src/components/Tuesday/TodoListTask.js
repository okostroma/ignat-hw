import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'




class TodoListTask extends React.Component {
    state = {
        isEditMode: false,
        isEditModePriority: false,
        priority: ['high', 'medium', 'low']
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

    }


    // activatedEditModePriority = () => {
    //     this.setState({
    //         isEditModePriority: true
    //     })
    //
    // }
    //
    // deActivatedEditModePriority = () => {
    //     this.setState({
    //         isEditModePriority: false
    //     })
    //
    // }



    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }

    onIsTitleChange = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    onIsPriorityChanged = (e) => {
        this.props.changePriority(this.props.task.id,e.currentTarget.value)

    }


    isTaskDeleted = () => {
        this.props.deleteTask(this.props.task.id);
    }


    render = () => {
        let checked = this.props.task.isDone === true ? 'done' : ''
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

                <span > priority:
                        <select onChange={this.onIsPriorityChanged} value={this.props.task.priority}>
                            <option value={this.state.priority[0]} >{this.state.priority[0]}</option>
                            <option value={this.state.priority[1]} >{this.state.priority[1]}</option>
                            <option value={this.state.priority[2]}>{this.state.priority[2]}</option>
                        </select>
                    {/*{this.props.task.priority}*/}
                    </span>


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





