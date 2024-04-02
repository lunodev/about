import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LangAvatarSelector from "../LangAvatarSelector/LangAvatarSelector";
import {Grid} from '@mui/material';
import ChekoAvatar from "../ChekoAvatar/ChekoAvatar";
import LogoNickname from "../LogoNickname/LogoNickname";
import Building from "../Building/Building";
import useLangSelector from "../../hooks/useLangSelector";
import NavBarXS from "../NavBarXS/NavBarXS";
import NavBar from "../NavBar/NavBar";


function ResponsiveAppBar() {
    const {currentLang} = useLangSelector();


    return (
        <>
            <AppBar className={"App-Bar"} position={"static"} color={"warning"}>
                <Toolbar>
                    <Grid container>
                        <Grid className={"Logo-nickname"} item xs={2} sm={3} sx={{display: {xs: 'none', sm: 'flex'}}}>
                            <LogoNickname/>
                        </Grid>
                        <Grid className={"Menu-pages-xs"} item xs={2} sx={{display: {xs: 'flex', sm: 'none'}}}>
                            <NavBarXS currentLang={currentLang}/>
                        </Grid>
                        <Grid className={"Logo-nickname-xs Logo-nickname"} item xs={6}
                              sx={{display: {xs: 'flex', sm: 'none'}}}>
                            <LogoNickname/>
                        </Grid>
                        <Grid className={"Menu-pages"} item xs={0} sm={6} sx={{display: {xs: 'none', sm: 'flex'}}}>
                            <NavBar currentLang={currentLang}/>
                        </Grid>
                        <Grid className={"Avatars-group"} item xs={4} sm={3}>
                            <ChekoAvatar/>
                            <LangAvatarSelector/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Building/>
        </>
    );
}


export default ResponsiveAppBar;
