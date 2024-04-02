import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import * as React from "react";


function LogoNickname() {
    return <Typography
        component={"div"}
        variant={"h6"}
    >
        <Link to={"/about/about"}>
            {`Cheko Devs`}
        </Link>
    </Typography>;
}


export default LogoNickname;