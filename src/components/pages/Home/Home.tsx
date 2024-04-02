import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../app/hooks";
import {capitalize} from "@mui/material";


function Home(props: {data: any}) {
    const langSelector = useAppSelector(state => state.langSelector)
    const [currentLang, setCurrentLang] = useState(langSelector.value)


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize(props.data[currentLang].Home.label)}
                </h1>
            </div>
        </>
    );
}

export default Home;