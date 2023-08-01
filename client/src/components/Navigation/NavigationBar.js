import { AppBar, Grid } from "@mui/material";
import Logo from "../Logo/Logo";

const NAV_LOGO_WIDTH = '8%';

function NavigationBar() {
    
    return(
        <AppBar color="transparent" elevation={0}>
            <Grid container columns={3} justifyContent={'space-between'}>
                <Grid item>
                    <Logo width={NAV_LOGO_WIDTH}/>
                </Grid>
                <Grid item>
                    
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </AppBar>
    )
}

export default NavigationBar;