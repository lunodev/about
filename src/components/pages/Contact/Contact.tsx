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
                <Typography variant="h1">{props.data[currentLang].Contact.label}</Typography>
                <Typography variant="h2">{props.data[currentLang].Contact.Info.label}</Typography>
                <p>
                <span>
                  <i className='fa fa-map-marker'></i>
                    {props.data ? `${capitalize(props.data[currentLang].Contact.address.label)}` : 'loading'}
                </span>
                    {props.data ?  `: ${capitalize(props.data[currentLang].Contact.address.value)}` : 'loading'}
                </p>
            </div>
        </>
    );
}

export default Contact;