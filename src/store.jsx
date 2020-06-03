import {createStore} from "redux";

const initialState = {
    todolists: [],
    loading: true
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODOLIST':
            return {
                ...state, todolists: [...state.todolists, action.newTodoList]
            }
        case 'DELETE_TODOLIST':
            return {
                ...state, todolists: state.todolists.filter(t => t.id !== action.todoListId
                )
            }
        case 'ADD_TASK': {
            return {
                ...state, todolists: state.todolists.map(t => {
                        if (t.id === action.todoListId) {
                            return {
                                ...t, tasks: [...t.tasks, action.newTask]
                            }
                        } else {
                            return t
                        }
                    }
                )
            }
        }
        case 'CHANGE_TASK': {
            return {
                ...state,
                todolists: state.todolists.map(t => {
                    if (t.id === action.todoListId) {
                        return {
                            ...t, tasks: [...t.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return {...task, ...action.obj}
                                } else {
                                    return task
                                }
                            })]
                        }
                    } else {
                        return t
                    }
                })
            }
        }
        case 'DELETE_TASK': {
            return {
                ...state,
                todolists: state.todolists.map(t => {
                    if (t.id === action.todoListId) {
                        return {
                            ...t, tasks: [...t.tasks.filter(task => task.id !== action.taskId
                            )]
                        }
                    } else {
                        return t
                    }
                })
            }
        }
        case 'SET_LOADING':
            return {
                ...state, loading: action.loading
            }
        default:
            return state;
    }
}

const store = createStore(reducer);


export default store;