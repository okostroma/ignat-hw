export let saveState = (key, state) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)

}


export let restoreState = (key, defaultState) => {

    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null ) {
        defaultState = JSON.parse(stateAsString);
    }

    return defaultState;

}