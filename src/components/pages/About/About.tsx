import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {capitalize} from "@mui/material";
import useLangSelector from "../../../hooks/useLangSelector";


function About(props: {data: any}) {
    const {currentLang} = useLangSelector();


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize(props.data[currentLang].About.label)}
                </h1>
                <p className="App-Section-Paragraph">{props.data[currentLang].About.presentation}</p>
                <iframe
                    src={"https://docs.google.com/forms/d/e/1FAIpQLScMlUVnMToPKG_2vc2sz7FuvPvrG2Hgt5-x0qKXkP7BNVmtFQ/viewform?embedded=true"}
                    width={"100%"}
                    height={"800px"}
                    style={{backgroundColor: "#282c34"}}
                >
                    {capitalize(props.data[currentLang].Loading.label)}
                </iframe>
            </div>
        </>
    );
}

export default About;