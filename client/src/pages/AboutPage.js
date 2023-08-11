import { Typography, Box, Grid } from '@mui/material';
import '../assets/css/BasePage.css'
import steph_curry_2009 from '../assets/images/player profiles/steph_curry_2009.png'
import steph_curry_nba from '../assets/images/player profiles/steph_curry_nba.png'

function AboutPage() {

    return(
        <section className="base_page">
            <Box
                width={'75%'}
                paddingTop={'630px'}
                paddingBottom={'75px'}
                position={'sticky'}
            >
                <Typography variant='h1'>CAN A COLLEGE PLAYER'S STATS PREDICT THEIR NBA CAREER?</Typography>
                <Typography>&nbsp;</Typography>
                <Typography variant='p'>Metaball is an exploration into that very question. Using machine learning, we look at how well a player's individual college stats translate to their career in the NBA.</Typography>
                <Typography>&nbsp;</Typography>
                <Grid
                    container
                    columns={2}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    paddingBottom={'10px'}
                >
                    <Grid item 
                        xs={1} 
                        display={'flex'} 
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        flexDirection={'column'}
                        gap={'7px'}
                    >
                        <img src={steph_curry_2009} alt='Stephen Curry 2009' width={'60%'}></img>
                        <Typography variant='p'>Stephen Curry</Typography>
                        <Typography variant='p'>Davidson: JR</Typography>
                        <Typography variant='p'>PTS: 28.6</Typography>
                        <Typography variant='p'>AST: 5.6</Typography>
                        <Typography variant='p'>REB: 4.4</Typography>
                    </Grid>
                    <Grid item 
                        xs={1} 
                        display={'flex'} 
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        flexDirection={'column'}
                        gap={'7px'}
                    >
                        <img src={steph_curry_nba} alt='Stephen Curry NBA' width={'60%'}/>
                        <Typography variant='p'>Stephen Curry</Typography>
                        <Typography variant='p'>Golden State Warriors</Typography>
                        <Typography variant='p'>4x NBA Champion</Typography>
                        <Typography variant='p'>1x Finals MVP</Typography>
                        <Typography variant='p'>2x MVP</Typography>
                    </Grid>
                </Grid>
                <Typography>&nbsp;</Typography>
                <Typography variant='p'>How far can raw numbers take us? How do we extend these numbers to international players or high school prospects? Is it possible to even apply this to different eras of NBA basketball? This is my study into those questions and more.</Typography>
                <Typography>&nbsp;</Typography>
                <Typography variant='p'>Welcome to Metaball.</Typography>
            </Box> 
        </section>
    )
}

export default AboutPage;