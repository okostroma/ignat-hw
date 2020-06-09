import React from 'react';
import classes from './Wednesday.module.css'
import WednesdayInput from "./WednesdayInput";
import {connect} from "react-redux";
import { setThemeActionCreator} from "../../SettingsReducer";
// import classes from './LightWednesday.module.css'


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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque velit lectus, semper quis tortor vestibulum, finibus
                    mattis urna. Vestibulum dictum ante nec sem pharetra, in finibus nisi accumsan.
                    Morbi elementum lorem at nulla rutrum gravida. Proin in est sit amet orci iaculis
                    efficitur eu quis augue. Aenean laoreet vel urna ut scelerisque. Vestibulum facilisis
                    enim felis, nec ornare diam dignissim ut. Nunc neque libero, faucibus sed ante nec,
                    gravida bibendum risus.

                    Suspendisse potenti. Phasellus in tincidunt arcu, in
                    iaculis metus. Proin ac nunc in velit cursus placerat id at felis.
                    Integer feugiat maximus nisi. Pellentesque a malesuada tellus, non semper dolor.
                    Aenean malesuada elit hendrerit leo elementum, ac lacinia neque commodo.
                    Sed malesuada enim sit amet pellentesque semper.
                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.settingsReducer.themes,
        style: state.settingsReducer.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLightTheme: (id, picked, style) => {
            dispatch(setThemeActionCreator(id,picked,style))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday);
