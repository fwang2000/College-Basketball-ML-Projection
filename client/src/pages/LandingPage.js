import '../assets/css/BasePage.css'
import logo from '../assets/images/logo.png'
import { Button, Container, Grid, Typography } from '@mui/material'

function LandingPage() {

    return(
        <section className='base_page'>
            <Grid
                container
                direction={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                minHeight={'50vh'}
                marginTop={'5vh'}
                spacing={5}
            >
                <Grid item align="center">
                        <img src={logo} alt='logo' width={'35%'}></img>
                </Grid>
                <Grid item>
                    <Container>
                        <Typography variant={'subtitle1'}>FIND THE NEXT NBA SUPERSTAR</Typography>
                    </Container>
                </Grid>
                <Grid item align="center">
                    <Grid
                        container
                        direction={'row'}
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                    >
                        <Grid item>
                            <Container>
                                <Button 
                                    variant='contained' 
                                    size='large'
                                    color='primary'
                                    sx={{fontSize:'1em'}}
                                >
                                    Latest Model
                                </Button>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container>
                                <Button 
                                    variant='contained' 
                                    size='large'
                                    color='secondary'
                                    style={{fontSize:'1em'}}
                                >
                                    Learn More
                                </Button>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default LandingPage