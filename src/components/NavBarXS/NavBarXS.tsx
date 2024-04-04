import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import {PAGE, PAGES} from "../../constants/pages";
import {Link, NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {JsonData} from "../../data/data";
import useLangSelector from "../../hooks/useLangSelector";
import { Button } from "@mui/material";


function NavBarXS() {
    const {currentLang} = useLangSelector();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: "block", md: "none"},
                }}
            >
                {PAGES.map((page: PAGE) => {
                    return (
                        <NavLink
                            key={page}
                            to={`/about/${page.toLowerCase()}`}
                            onClick={handleCloseNavMenu}
                            className={
                            ({isActive, isPending}) => isPending ? "pending" : (isActive ? "active" : "") + " " + "menu-item-XS"
                        }
                        >
                            <Button
                                key={page}
                                sx={{height: "100%", color: "inherit"}}
                            >
                                {(JsonData as any)[currentLang][page].label.toUpperCase()}
                            </Button>
                        </NavLink>
                    );
                })}
            </Menu>
        </>
    );
}


export default NavBarXS;
