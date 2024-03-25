import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import Typography from "@mui/material/Typography";


function About() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className="AppSection">
                <Typography variant="h1">About</Typography>
            </div>
        </>
    );
}

export default About;