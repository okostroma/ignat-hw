import React, {ChangeEvent} from 'react';
import classes from './Wednesday.module.css'
import WednesdayInput from "./WednesdayInput";
import {connect} from "react-redux";
import {setTheme} from "../../SettingsReducer";
import {checkInput, postThunk} from "../../WednesdayReducer";
import Loader from "../Tuesday/Loader";
import {AppStateType} from "../../store";
import PreLoader from "./PreLoader";

type ThemesType = {
    id: number
    name: string
    picked: boolean
}
type MapStateToPropsType = {
    themes: Array<ThemesType>
    style:string
    checked: boolean,
    isFetching: boolean,
    serverAnswer: string

}

type MapDispatchToPropsType = {
    setTheme: (id:number, picked:boolean, style: string) => void
    checkInput: (checked: boolean) => void
    postThunk: (checked: boolean) => void

}

class Wednesday extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {


    onThemeChanged = (id: number, picked: boolean, style: string) => {

        this.props.setTheme(id, picked, style)

    }

    onButtonClick = () => {
        this.props.postThunk(this.props.checked)

    }


    checkInput = (e: React.FormEvent<HTMLInputElement>) => {

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
                {this.props.isFetching ? <PreLoader/> : ''}

                <div className={`${classes.answer} ${ok} ${error}`}>{this.props.serverAnswer}</div>

                <div className={`${classes.body}`}>
                    <input onChange={this.checkInput} type='checkbox' checked={this.props.checked}/>
                    <button disabled={this.props.isFetching} onClick={this.onButtonClick}>Send
                    </button>
                </div>


            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        themes: state.settingsReducer.themes,
        style: state.settingsReducer.style,
        checked: state.wednesdayPage.checked,
        isFetching: state.wednesdayPage.isFetching,
        serverAnswer: state.wednesdayPage.serverAnswer
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setTheme, checkInput, postThunk})(Wednesday);
