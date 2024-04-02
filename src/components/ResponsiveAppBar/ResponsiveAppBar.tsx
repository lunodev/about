import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {Link} from "react-router-dom";
import LangAvatarSelector from "../LangAvatarSelector/LangAvatarSelector";
import {useAppSelector} from "../../app/hooks";
import {JsonData} from '../../data/data'
import {PAGES} from "../../constants/pages";
import {Grid} from '@mui/material';
import ChekoAvatar from "../ChekoAvatar/ChekoAvatar";
import LogoNickname from "../LogoNickname/LogoNickname";


function ResponsiveAppBar() {
    const langSelector = useAppSelector(state => state.langSelector);
    const [currentLang, setCurrentLang] = useState(langSelector.value);


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <AppBar className={"App-Bar"} position={"static"} color={"warning"}>
                <Toolbar>
                    <Grid container>
                        <Grid className={"Logo-nickname"} item xs={2} sm={3} sx={{display: {xs: 'none', sm: 'flex'}}}>
                            <LogoNickname/>
                        </Grid>
                        <Grid className={"Menu-pages-xs"} item xs={2} sx={{display: {xs: 'flex', sm: 'none'}}}>
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
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {PAGES.map((page: string) => (
                                    <Link to={`/about/${page.toLowerCase()}`}>
                                        <MenuItem
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography fontWeight={"normal"}>{
                                                (JsonData as any)[currentLang][page].label.toUpperCase()
                                            }</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Grid>
                        <Grid className={"Logo-nickname-xs Logo-nickname"} item xs={6} sx={{display: {xs: 'flex', sm: 'none'}}}>
                            <LogoNickname/>
                        </Grid>
                        <Grid className={"Menu-pages"} item xs={0} sm={6} sx={{display: {xs: 'none', sm: 'flex'}}}>
                            {PAGES.map((page: string) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <Link to={`/about/${page.toLowerCase()}`}>
                                        {(JsonData as any)[currentLang][page].label}
                                    </Link>
                                </Button>
                            ))}
                        </Grid>
                        <Grid className={"Avatars-group"} item xs={4} sm={3}>
                            <ChekoAvatar/>
                            <LangAvatarSelector/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Typography className={"Section-title Building"} component={"h1"}>
                {(JsonData as any)[currentLang].Building.label.toUpperCase()}
            </Typography>
        </>
    );
}

export default ResponsiveAppBar;
