import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {capitalize} from "@mui/material";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../app/hooks";


function Blog(props: {data: any}) {
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
                    {capitalize(props.data[currentLang].Blog.label)}
                </h1>
                <p>Blog en construcción</p>
            </div>
        </>
    );
}

export default Blog;