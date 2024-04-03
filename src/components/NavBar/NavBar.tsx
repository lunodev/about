import {PAGES} from "../../constants/pages";
import Button from "@mui/material/Button";
import {Link, NavLink} from "react-router-dom";
import {JsonData} from "../../data/data";
import * as React from "react";
import useLangSelector from "../../hooks/useLangSelector";


function NavBar() {
    const {currentLang} = useLangSelector();


    return (
        <>
            {PAGES.map((page: string) => {
                return (
                    <NavLink
                        to={`/about/${page.toLowerCase()}`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}
                    >
                        <Button
                            key={page}
                            sx={{height: "100%", color: "inherit"}}
                        >
                            {(JsonData as any)[currentLang][page].label}
                        </Button>
                    </NavLink>
                );
            })}
        </>
    );
}


export default NavBar;
