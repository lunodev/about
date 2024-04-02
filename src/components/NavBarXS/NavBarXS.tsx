import {LANG_CODE} from "../../constants/languages";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import {PAGE, PAGES} from "../../constants/pages";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {JsonData} from "../../data/data";

function NavBarXS(props: { currentLang: LANG_CODE }) {
    const {currentLang} = props;
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
                        <Link to={`/about/${page.toLowerCase()}`}>
                            <MenuItem
                                key={page}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography fontWeight={"normal"}>
                                    {(JsonData as any)[currentLang][page].label.toUpperCase()}
                                </Typography>
                            </MenuItem>
                        </Link>
                    );
                })}
            </Menu>
        </>
    );
}

export default NavBarXS;
