import '../assets/css/LandingPage.css'
import logo from '../assets/images/logo.png'
import { Button, Container, Grid, Typography, useTheme } from '@mui/material'

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
                spacing={5}
                marginTop={'5vh'}
            >
                <Grid item align="center">
                    <Container>
                        <img src={logo} alt='logo' width={'35%'}></img>
                    </Container>
                </Grid>
                <Grid item>
                    <Container>
                        <Typography variant={'subtitle1'}>FIND THE NEXT NBA SUPERSTAR</Typography>
                    </Container>
                </Grid>
                <Grid item>
                    <Container>
                        <Grid
                            container
                            direction={'row'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                            spacing={6}
                        >
                            <Grid item>
                                <Button 
                                    variant='contained' 
                                    size='large'
                                    color='primary'
                                    sx={{fontSize:'1em'}}
                                >
                                    Latest Model
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant='contained' 
                                    size='large'
                                    color='secondary'
                                    style={{fontSize:'1em'}}
                                >
                                    Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </section>
    )
}

export default LandingPage