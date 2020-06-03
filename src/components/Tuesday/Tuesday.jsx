import React from 'react';
import '../../App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

import TodoListTitle from "./TodoListTitle";
import {restoreState, saveState} from "./stateMod";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";


class Tuesday extends React.Component {


    state = {
        tasks: [
            // {id: 0, title: "JS", isDone: true, priority: "high"},
            // {id: 1,title: "HTML", isDone: false, priority: "low"},
            // {id: 2,title: "CSS", isDone: false, priority: "medium"},
            // {id: 3,title: "React", isDone: true, priority: "high"}
        ],

        filterValue: "All"
    };
    nextTaskId = 0;


    saveLocalStorage = () => {
        saveState('state-' + this.props.id, this.state)
    }


    restoreLocalStorage = () => {
        let stateNew = restoreState('state-' + this.props.id, this.state);
        this.setState(stateNew, () => {
            this.state.tasks.forEach(t => {
                    if (t.id >= this.nextTaskId) {
                        this.nextTaskId = t.id + 1
                    }
                }
            )
        })
    }


    componentDidMount() {
        this.restoreLocalStorage();
    }


    addTask = (newTitle) => {

        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            isDone: false,
            priority: "",
            created: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            updated: '',
            finished: ''


        };
        this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        //
        // this.setState({
        //     tasks: newTasks
        // }, this.saveLocalStorage);

        this.props.addTask(this.props.id, newTask)

    }

    deleteTask = (taskId) => {
        // let newTasks = this.state.tasks.filter(t => {
        //     return t.id !== taskId;
        // });
        // this.setState({
        //     tasks: newTasks
        // }, this.saveLocalStorage);
         this.props.deleteTask(this.props.id, taskId)

    }

    isTodoListDeleted = () => {
        this.props.deleteTodoList(this.props.id);
    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeTask = (taskId, obj) => {
        // let newTasks = this.state.tasks.map(t => {
        //           if (t.id !== taskId) {
        //                  return t;
        //              } else {
        //                  return {...t, ...obj};
        //              }
        //          });
        //          this.setState({
        //              tasks: newTasks
        //          }, this.saveLocalStorage);

        this.props.changeTask(this.props.id, taskId, obj)
    }


    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {
            isDone: isDone, finished: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })
        })

    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {
            title: title, updated: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })
        })

    }

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {
            priority: priority, updated: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })
        })
    }


    render = () => {
        let filteredTasks = this.props.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Active":
                    return t.isDone === false;
                case "Completed":
                    return t.isDone === true;
                case "All":
                    return true;

                default:
                    return true;

            }
        })

        return (

            <div className="todoList">
                <div className='header'>
                    <TodoListTitle title={this.props.title}/> <span onClick={this.isTodoListDeleted}> <FontAwesomeIcon
                    className='times-header' icon={faTimes}/></span>
                </div>
                <AddNewItemForm title={this.props.title} addItem={this.addTask}/>
                <TodoListTasks changePriority={this.changePriority} deleteTask={this.deleteTask}
                               changeTitle={this.changeTitle} tasks={filteredTasks}
                               changeStatus={this.changeStatus}/>
                <TodoListFooter filerValue={this.state.filterValue} changeFilter={this.changeFilter}/>

            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         tasks: state.todolists.tasks
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todoListId, newTask) => {
            let action = {
                type: 'ADD_TASK',
                todoListId,
                newTask
            }
            dispatch(action)
        },
        changeTask: (todoListId, taskId, obj) => {
            let action = {
                type: 'CHANGE_TASK',
                todoListId,
                taskId,
                obj
            }
            dispatch(action)
        },
        deleteTask: (todoListId, taskId) => {
            let action = {
                type: 'DELETE_TASK',
                todoListId,
                taskId
            }
            dispatch(action)
        }
    }
}

const ConnectedTuesday = connect(null, mapDispatchToProps)(Tuesday)

export default ConnectedTuesday;


