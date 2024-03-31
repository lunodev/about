import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/logo193.png';
import {Link} from "react-router-dom";
import LangSelector from "../../features/langSelector/LangSelector";
import {useAppSelector} from "../../app/hooks";
import {useEffect, useState} from "react";
import {JsonData} from '../../data/data'
import {PAGES} from "../../constants/pages";


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
        <header className="App-header">
            <AppBar position="static" color={"warning"}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                        <Link to={"/about/about"}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#about"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: '#282c34',
                                    textDecoration: 'none',
                                }}
                            >
                                {`Cheko Devs`}
                            </Typography>
                        </Link>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
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
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{
                                                (JsonData as any)[currentLang][page].label
                                            }</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
                        <Link to={"/about/about"}>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'flex', md: 'none'},
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: '#282c34',
                                    textDecoration: 'none',
                                }}
                            >
                                {`Cheko Devs`}
                            </Typography>
                        </Link>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {PAGES.map((page: string) => (
                                <Link to={`/about/${page.toLowerCase()}`}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >{
                                        (JsonData as any)[currentLang][page].label
                                    }</Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Link to={`/about/about`}>
                                <IconButton sx={{p: 0, margin: ".2rem 1rem"}}>
                                    <img src={logo} className="App-logo" alt="logo"/>
                                </IconButton>
                            </Link>
                            <LangSelector/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Typography variant={"h4"}
                        color={"yellow"}>{(JsonData as any)[currentLang].Building.label.toUpperCase()}</Typography>
        </header>
    );
}

export default ResponsiveAppBar;
