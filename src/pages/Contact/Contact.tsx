import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import Typography from "@mui/material/Typography";


function Contact() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className="AppSection">
                <Typography variant="h1">Contact</Typography>
            </div>
        </>
    );
}

export default Contact;