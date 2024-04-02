import {useAppSelector} from "../app/hooks";
import {useEffect, useState} from "react";
import {LANG_CODE} from "../constants/languages";


function useLangSelector() {
    const langSelector = useAppSelector(state => state.langSelector);
    const [currentLang, setCurrentLang] = useState<LANG_CODE>(langSelector.value);


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    return ({
        currentLang,
        // updateCurrentLang: setCurrentLang,
    })
}


export default useLangSelector;
