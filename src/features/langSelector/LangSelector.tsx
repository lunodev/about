import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentLang } from './langSelector'
import {RootState} from "../../app/store";
import {LANG_EN, LANG_ES, LANG_IT, LANGUAGES} from "../../constants/languages";


function LangSelector() {
    const count = useSelector((state: RootState) => state.langSelector.value)
    const dispatch = useDispatch()

    return (
        <>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(setCurrentLang(LANG_EN))}
            >
                {LANG_EN.toUpperCase()}
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(setCurrentLang(LANG_ES))}
            >
                {LANG_ES.toUpperCase()}
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(setCurrentLang(LANG_IT))}
            >
                {LANG_IT.toUpperCase()}
            </button>
        </>
    )
}

export default LangSelector;


