import '../assets/css/LandingPage.css'
import { Grid, Divider, Container } from '@mui/material';

function LandingPage() {
    return(
        <header className="landing">
            <div className="content">
                <Grid 
                    container
                    direction={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <Container>
                            <img></img>
                            <h1>NBA ASCEND</h1>
                            <h4>A machine-learning approach to finding the next superstar</h4>
                        </Container>
                    </Grid>
                    <Divider
                        orientation='vertical'
                        variant='middle'
                        flexItem
                        style={{ borderColor: '#FFF', marginTop: '30vh', marginBottom: '30vh' }}
                    />
                    <Grid item>

                    </Grid>
                </Grid>
            </div>
      </header>
    )
}

export default LandingPage