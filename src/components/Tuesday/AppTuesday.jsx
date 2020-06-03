import React from 'react';
import '../../App.css';
import AddNewItemForm from "./AddNewItemForm";
import Tuesday from "./Tuesday";
import {restoreState, saveState} from "./stateMod";
import load from './load.gif'
import Loader from "./Loader";
import store from '../../store'
import {connect} from "react-redux";

class AppTuesday extends React.Component {
    state = {
        todolists: [
            // {id:1, title:'What to learn?'},
            // {id:2, title:'Week tasks'},
            // {id:3, title:'Year tasks'}
        ],
        // loading: true
    }

    nextTodoListId = 0;
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('todolists', stateAsString)

    }
    restoreState = () => {
        let state = {
            todolists: []
        };
        let stateAsString = localStorage.getItem('todolists');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.todolists.forEach(t => {
                    if (t.id >= this.nextTodoListId) {
                        this.nextTodoListId = t.id + 1
                    }
                }
            )
        })
    }

    componentDidMount() {
        setTimeout(() => {
            // this.setState({
            //     loading: false
            // })
            this.props.setLoading(false)
        }, 3000)
        this.restoreState();
    }

    addTodoList = (title) => {
        let todoList = {
            id: this.nextTodoListId,
            title: title,
            tasks: []
        }
        this.nextTodoListId++;
        // let newTodoList = [...this.state.todolists, todoList];
        // this.setState({
        //     todolists: newTodoList
        // }, this.saveState)

        this.props.addTodoList(todoList)
    }

    deleteTodoList = (todoListId) => {

        // let newTodoList = this.state.todolists.filter(t => {
        //              return t.id !== todoListId;
        //          });
        //          this.setState({
        //              todolists: newTodoList
        //          }, this.saveState);
        this.props.deleteTodoList(todoListId)


    }

    render = () => {
        const todolist = this.props.todolists.map(tl => <Tuesday tasks={tl.tasks} deleteTodoList={this.deleteTodoList} key={tl.id}
                                                                 id={tl.id} title={tl.title}/>)


        return (
            <div className='tuesday'>
                {this.props.loading ?
                    <div className='loading'><Loader/></div>
                    :
                    <div><AddNewItemForm addItem={this.addTodoList}/>
                        <div className="AppTuesday">
                            {todolist}

                        </div>
                    </div>

                }
            </div>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: (loading) => {
            let action = {
                type: 'SET_LOADING',
                loading

            }
            dispatch(action)
        },
        addTodoList: (newTodoList) => {
            let action = {
                type: 'ADD_TODOLIST',
                newTodoList

            }
            dispatch(action)
        },
        deleteTodoList: (todoListId) => {
            let action = {
                type: 'DELETE_TODOLIST',
                todoListId

            }
            dispatch(action)
        }

    }
}

const ConnectedAppTuesday = connect(mapStateToProps, mapDispatchToProps)(AppTuesday)

export default ConnectedAppTuesday;


