import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import logo from "../../assets/logo193.png";
import * as React from "react";


function ChekoDevsAvatar() {
    return <IconButton component={"div"} className={"App-logo"}>
        <Link style={{display: "flex"}} to={`/about/about`}>
            <img
                className={"App-logo-img"}
                src={logo}
                alt={"Avatar"}
            />
        </Link>
    </IconButton>;
}


export default ChekoDevsAvatar;
