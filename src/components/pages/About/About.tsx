import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../app/hooks";


function About(props: {data: any}) {
    const langSelector = useAppSelector(state => state.langSelector)
    const [currentLang, setCurrentLang] = useState(langSelector.value)


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    return (
        <>
            <ResponsiveAppBar/>
            <div className="AppSection">
                <Typography variant="h1">{props.data[currentLang].About.label}</Typography>
                <p className="AppSectionParagraph">{props.data[currentLang].About.presentation}</p>
            </div>
        </>
    );
}

export default About;