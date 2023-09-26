import '../../assets/css/NavigationMenu.css'

import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationMenu() {

    return(
        <Grid 
            container
            direction={'row'}
            justifyContent={'space-evenly'}
            alignItems={'start'}
            paddingTop={'0.375%'}
        >
            <Grid item xs={1}>
                <Typography variant="h4" textAlign={'center'}>
                    <Link className="MuiLink" to="./about">
                        ABOUT
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4" textAlign={'center'}>
                    <Link className="MuiLink" href="#">
                        MODELS
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4" textAlign={'center'}>
                    <Link className="MuiLink" to="/search">
                        TRY IT
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4" textAlign={'center'}>
                    <Link className="MuiLink" to="/methodology">
                        METHODOLOGY
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4" textAlign={'center'}>
                    <Link className="MuiLink" to="/author">
                        AUTHOR
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NavigationMenu;