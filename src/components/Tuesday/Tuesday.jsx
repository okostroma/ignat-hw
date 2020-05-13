import React from 'react';
import '../../App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

import TodoListTitle from "./TodoListTitle";
import {restoreState, saveState} from "./stateMod";


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
        saveState('state-'+ this.props.id, this.state)
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
            priority: "high"
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];

        this.setState({
            tasks: newTasks
        }, this.saveLocalStorage);

    }

    deleteTask = (taskId) => {
        let newTasks = this.state.tasks.filter(t => {
            return t.id !== taskId;
        });
        this.setState({
            tasks: newTasks
        }, this.saveLocalStorage);

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
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });
        this.setState({
            tasks: newTasks
        }, this.saveLocalStorage);
    }



    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})

    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})

    }

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    }


    render = () => {
        let filteredTasks = this.state.tasks.filter(t => {
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
                    <TodoListTitle title={this.props.title}/> <button onClick={this.isTodoListDeleted}> delete</button>
                    <AddNewItemForm title={this.props.title} addItem={this.addTask}/>
                    <TodoListTasks changePriority={this.changePriority} deleteTask={this.deleteTask} changeTitle={this.changeTitle} tasks={filteredTasks}
                                   changeStatus={this.changeStatus}/>
                    <TodoListFooter filerValue={this.state.filterValue} changeFilter={this.changeFilter}/>

                </div>
        );
    }
}


export default Tuesday;

