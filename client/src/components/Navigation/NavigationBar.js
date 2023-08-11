import { AppBar, Grid } from "@mui/material";

import Logo from "../Logo/Logo";
import NavigationMenu from "./NavigationMenu";
import GithubLogoIcon from "../Logo/GithubLogo";

const NAV_LOGO_WIDTH = '40%';

function NavigationBar() {
    
    return(
        <AppBar color="transparent" elevation={0}>
            <Grid 
                container
                direction={'row'}
                justifyContent={'space-evenly'}
                alignItems={'start'}
                paddingTop={'1.5%'}
            >
                <Grid item xs={2}>
                    <Logo width={NAV_LOGO_WIDTH}/>
                </Grid>
                <Grid item color={'white'} xs={8}>
                    <NavigationMenu/>
                </Grid>
                <Grid item xs={2}>
                    <GithubLogoIcon/>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default NavigationBar;