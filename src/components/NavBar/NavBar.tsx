import {ACTIVE_PAGE, PAGES} from "../../constants/pages";
import Button from "@mui/material/Button";
import {Link, NavLink} from "react-router-dom";
import {JsonData} from "../../data/data";
import * as React from "react";
import useLangSelector from "../../hooks/useLangSelector";
import {useAppDispatch} from "../../app/hooks";
import {setActivePage} from "../../features/activePage";
import useActivePage from "../../hooks/useActivePage";


function NavBar() {
    const {currentLang} = useLangSelector();
    const {updateActivePageOnStore, currentActivePage} = useActivePage();


    return (
        <>
            {PAGES.map((page: ACTIVE_PAGE) => {
                return (
                    <NavLink
                        onClick={()=>updateActivePageOnStore(page)}
                        to={`/about/${page.toLowerCase()}`}
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive || page === currentActivePage ? "active" : ""}
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
