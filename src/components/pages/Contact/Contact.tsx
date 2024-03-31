import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {capitalize} from "@mui/material";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../app/hooks";


function Contact(props: {data: any}) {
    const langSelector = useAppSelector(state => state.langSelector)
    const [currentLang, setCurrentLang] = useState(langSelector.value)


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    return (
        <>
            <ResponsiveAppBar/>
            <div className="AppSection">
                <h1 className={"Section-Title"}>
                    {capitalize(props.data[currentLang].Contact.label)}
                </h1>
                <h2 className={"Section-SubTitle"}>
                    {capitalize(props.data[currentLang].Contact.Info.label)}
                </h2>
                <p>
                <span>
                  <i className='fa fa-map-marker'></i>
                    {props.data ? `${capitalize(props.data[currentLang].Contact.address.label)}` : 'loading'}
                </span>
                    {props.data ? `: ${capitalize(props.data[currentLang].Contact.address.value)}` : 'loading'}
                </p>
            </div>
        </>
    );
}

export default Contact;