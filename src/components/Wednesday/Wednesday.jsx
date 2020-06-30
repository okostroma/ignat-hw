import React from 'react';
import classes from './Wednesday.module.css'
import WednesdayInput from "./WednesdayInput";
import {connect} from "react-redux";
import {setTheme, setThemeActionCreator} from "../../SettingsReducer";
// import classes from './LightWednesday.module.css'
import * as axios from 'axios'
import {checkInput, checkInputActionCreator, postThunk, toggleFetching} from "../../WednesdayReducer";
import {tryCatch, wednesdayAPI} from "../../api/api";
import Swal from 'sweetalert2'
import Loader from "../Tuesday/Loader";
import PreLoader from "./PreLoader";


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

        this.props.setTheme(id, picked, style)

    }

    onButtonClick = () => {
        this.props.postThunk(this.props.checked)
        if (!this.props.checked) {
            return Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Yes'
            })

        }
    }


    // tryCatch = async ( onButtonClick ) => {
    //     try {
    //         const response = await onButtonClick();
    //         console.log('answer: ', response.data);
    //         return response;
    //     } catch (e) {
    //         console.log('error: ', {...e});
    //         return 'error';
    //     }
    // }

    checkInput = (e) => {

        this.props.checkInput(e.currentTarget.checked)
    }


    render() {


        let themes = this.props.themes.map(t => {
            return <WednesdayInput onThemeChanged={this.onThemeChanged} key={t.id} id={t.id} name={t.name}
                                   picked={t.picked}/>
        })

        if (this.props.isFetching && this.props.checked) {
            return <Loader/>
        }


        return (

            <div className={this.props.style}>

                <form>
                    {themes}
                </form>

                <div className={`${classes.body}`}>
                    <input onChange={this.checkInput} type='checkbox' checked={this.props.checked}/>
                    <button disabled={this.props.isFetching && this.props.checked} onClick={() =>
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
        isFetching: state.wednesdayPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setLightTheme: (id, picked, style) => {
//             dispatch(setThemeActionCreator(id, picked, style))
//         },
//         checkInput: (checked) => {
//             dispatch(checkInputActionCreator(checked))
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetching(isFetching))
//         },
//         postThunk
//     }
// }

export default connect(mapStateToProps, {setTheme, checkInput, postThunk})(Wednesday);
