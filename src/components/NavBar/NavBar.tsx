import {PAGES} from "../../constants/pages";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {JsonData} from "../../data/data";
import * as React from "react";
import useLangSelector from "../../hooks/useLangSelector";


function NavBar() {
    const {currentLang} = useLangSelector();


    return (
        <>
            {PAGES.map((page: string) => {
                return (
                    <Link to={`/about/${page.toLowerCase()}`}>
                        <Button
                            key={page}
                            sx={{height: "100%", color: "white"}}
                        >
                            {(JsonData as any)[currentLang][page].label}
                        </Button>
                    </Link>
                );
            })}
        </>
    );
}


export default NavBar;
