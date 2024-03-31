import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../app/hooks";
import {capitalize} from "@mui/material";


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
                <h1 className={"Section-Title"}>
                    {capitalize(props.data[currentLang].About.label)}
                </h1>
                <p className="AppSectionParagraph">{props.data[currentLang].About.presentation}</p>
            </div>
        </>
    );
}

export default About;