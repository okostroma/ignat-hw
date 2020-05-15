import React from 'react';
import '../../App.css';
import AddNewItemForm from "./AddNewItemForm";
import Tuesday from "./Tuesday";
import {restoreState, saveState} from "./stateMod";
import load from './load.gif'
import Loader from "./Loader";

class AppTuesday extends React.Component {
    state = {
        todolists: [
            // {id:1, title:'What to learn?'},
            // {id:2, title:'Week tasks'},
            // {id:3, title:'Year tasks'}
        ],
        loading: true
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
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 3000)
        this.restoreState();
    }

    addTodoList = (title) => {
        let todoList = {
            id: this.nextTodoListId,
            title: title
        }
        this.nextTodoListId++;
        let newTodoList = [...this.state.todolists, todoList];
        this.setState({
            todolists: newTodoList
        }, this.saveState)
    }

    deleteTodoList = (todoListId) => {

        let newTodoList = this.state.todolists.filter(t => {
            return t.id !== todoListId;
        });
        this.setState({
            todolists: newTodoList
        }, this.saveState);


    }

    render = () => {
        const todolist = this.state.todolists.map(tl => <Tuesday deleteTodoList={this.deleteTodoList} key={tl.id} id={tl.id} title={tl.title}/>)


        return (
            <div>
                {this.state.loading ?
                    <div className='loading'><Loader /> </div>
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


export default AppTuesday;


