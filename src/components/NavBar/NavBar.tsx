import {LANG_CODE} from "../../constants/languages";
import {PAGES} from "../../constants/pages";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {JsonData} from "../../data/data";
import * as React from "react";


function NavBar(props: { currentLang: LANG_CODE }) {
    const {currentLang} = props;


    return (
        <>
            {PAGES.map((page: string) => {
                return (
                    <Button
                        key={page}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >
                        <Link to={`/about/${page.toLowerCase()}`}>
                            {(JsonData as any)[currentLang][page].label}
                        </Link>
                    </Button>
                );
            })}
        </>
    );
}


export default NavBar;
