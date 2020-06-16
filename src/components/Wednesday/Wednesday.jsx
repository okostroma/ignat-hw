import React from 'react';
import classes from './Wednesday.module.css'
import WednesdayInput from "./WednesdayInput";
import {connect} from "react-redux";
import { setThemeActionCreator} from "../../SettingsReducer";
// import classes from './LightWednesday.module.css'
import * as axios from 'axios'
import {checkInputActionCreator} from "../../WednesdayReducer";


class Wednesday extends React.Component {

    state = {
        // themes: [
        //     {id: 1, name: 'light', picked: true},
        //     {id: 2, name: 'dark', picked: false},
        //     {id: 3, name: 'purple', picked: false}
        // ],
        // style: ''
    }


    onThemeChanged = (id, picked, style) => {

        this.props.setLightTheme(id, picked, style)

    }

    onButtonClick = () => {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: this.props.checked}).then(response => {
            console.log(response.data)


        })


    }

    tryCatch = async ( onButtonClick ) => {
        try {
            const response = await onButtonClick();
            console.log('answer: ', response.data);
            return response;
        } catch (e) {
            console.log('error: ', {...e});
            return 'error';
        }
    }

    checkInput = (e) => {

        this.props.checkInput(e.currentTarget.checked)
    }





    render() {



        let themes = this.props.themes.map(t => {
            return <WednesdayInput onThemeChanged={this.onThemeChanged} key={t.id} id={t.id} name={t.name} picked={t.picked}/>
        })


        return (

            <div className={this.props.style}>

                <form>
                    {themes}
                </form>

                <div className={`${classes.body}`}>
                    <input onChange={this.checkInput} type='checkbox' checked={this.props.checked}/> <button onClick={()=> this.tryCatch(this.onButtonClick)}>Send</button>
                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.settingsReducer.themes,
        style: state.settingsReducer.style,
        checked: state.wednesdayPage.checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLightTheme: (id, picked, style) => {
            dispatch(setThemeActionCreator(id,picked,style))
    },
        checkInput: (checked) => {
            dispatch(checkInputActionCreator(checked))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday);
