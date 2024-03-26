import React, {useEffect, useState} from 'react'
import {LANGUAGE, LANGUAGES} from "../../constants/languages";
import {Box} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCurrentLang} from "./langSelector";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";


function LangSelector() {
    const dispatch = useAppDispatch();
    const langCodeOnStore = useAppSelector(state => state.langSelector.value);
    const [language, updateLanguage] = useState<LANGUAGE>(LANGUAGES.find(lang => lang.code === langCodeOnStore) || LANGUAGES[0]);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const updateLanguageOnStore = () => dispatch(setCurrentLang(language.code));


    useEffect(() => {
        updateLanguageOnStore()
    }, [language]);


    const handleOnChangeLanguage = (
        value: LANGUAGE | null
    ): void => {
        updateLanguage(value || LANGUAGES[0]);
        handleCloseUserMenu();
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box sx={{display: "inline-block"}}>
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <img src={`../${language.code}.png`} className="App-logo" alt="logo"/>
            </IconButton>
            {/*<Autocomplete
                title={`Select one language`}
                disableClearable
                getOptionLabel={option => `${option.code.toUpperCase()} - ${capitalize(option.name)}`}
                value={language}
                options={LANGUAGES}
                renderOption={handleRenderOption}
                renderInput={handleRenderInputLanguage}
                onChange={handleOnChangeLanguage}
            />*/}
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
            >
                {LANGUAGES.map(language => (
                    <MenuItem onClick={() => handleOnChangeLanguage(language)} key={language.code}>
                            <img src={`../${language.code}.png`} className="App-logo" alt="logo"/>
                        <Typography sx={{marginLeft: ".7rem"}}>
                            {language.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}


export default LangSelector;
