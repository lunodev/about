import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import Typography from "@mui/material/Typography";


function Home() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className="AppSection">
                <Typography variant="h1">Home</Typography>
            </div>
        </>
    );
}

export default Home;