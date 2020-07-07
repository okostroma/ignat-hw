import React from 'react';
import classes from './Wednesday.module.css'
import WednesdayInput from "./WednesdayInput";
import {connect} from "react-redux";
import {setTheme, setThemeActionCreator} from "../../SettingsReducer";
// import classes from './LightWednesday.module.css'
import * as axios from 'axios'
import {checkInput, checkInputActionCreator, postThunk, setAnswer, toggleFetching} from "../../WednesdayReducer";
import {tryCatch, wednesdayAPI} from "../../api/api";
import Swal from 'sweetalert2'
import Loader from "../Tuesday/Loader";


class Wednesday extends React.Component {

    state = {

    }


    onThemeChanged = (id, picked, style) => {

        this.props.setTheme(id, picked, style)

    }

    onButtonClick = () => {
        this.props.postThunk(this.props.checked)
        // if (!this.props.checked) {
        //     return Swal.fire({
        //         title: 'Error!',
        //         text: 'Do you want to continue',
        //         icon: 'error',
        //         confirmButtonText: 'Yes'
        //     })
        //
        // }
    }


    checkInput = (e) => {

        this.props.checkInput(e.currentTarget.checked)
    }


    render() {


        let themes = this.props.themes.map(t => {
            return <WednesdayInput onThemeChanged={this.onThemeChanged} key={t.id} id={t.id} name={t.name}
                                   picked={t.picked}/>
        })

         let ok = this.props.serverAnswer === 'OK:-)' ? classes.ok : ''
         let error = this.props.serverAnswer === 'ERROR!!!' ? classes.error : ''


        return (

            <div className={this.props.style}>

                <form>
                    {themes}
                </form>
                {this.props.isFetching ? <Loader/> : ''}

                <div className={`${classes.answer} ${ok} ${error}`}>{this.props.serverAnswer}</div>

                <div className={`${classes.body}`}>
                    <input onChange={this.checkInput} type='checkbox' checked={this.props.checked}/>
                    <button disabled={this.props.isFetching} onClick={() =>
                        tryCatch(this.onButtonClick)}>Send
                    </button>
                </div>



            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.settingsReducer.themes,
        style: state.settingsReducer.style,
        checked: state.wednesdayPage.checked,
        isFetching: state.wednesdayPage.isFetching,
        serverAnswer: state.wednesdayPage.serverAnswer
    }
}

export default connect(mapStateToProps, {setTheme, checkInput, postThunk, setAnswer})(Wednesday);
