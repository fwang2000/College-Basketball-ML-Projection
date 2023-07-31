import '../assets/css/LandingPage.css'
import logo from '../assets/images/logo.png'
import { Button, Container, Grid, useTheme } from '@mui/material'

function LandingPage() {

    const theme = useTheme();

    return(
        <section className='landing'>
            <Grid
                container
                direction={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                minHeight={'50vh'}
            >
                <Grid item align="center">
                    <Container>
                        <img src={logo} alt='logo' width={'40%'}></img>
                    </Container>
                </Grid>
                <Grid item>
                    <Container>
                        <h2>FIND THE NEXT NBA SUPERSTAR</h2>
                    </Container>
                </Grid>
                <Grid item>
                    <Container>
                        <Grid
                            container
                            direction={'row'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                            spacing={5}
                        >
                            <Grid item>
                                <Button variant='contained'>Latest Model</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained'>Learn More</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </section>
    )
}

export default LandingPage