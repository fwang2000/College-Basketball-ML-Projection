import github_logo from '../../assets/images/github.png'

import { Box, Link } from '@mui/material';

function GithubLogoIcon() {
    return (
        <Box
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'start'}
            paddingRight={'10%'}
        >
            <Link target='blank' rel="noreferrer" href='https://github.com/fwang2000/College-Basketball-ML-Projection' style={{display: 'contents'}}>
                <img src={github_logo} alt='github_logo' width={'15%'}></img>
            </Link>
        </Box>
    )
}

export default GithubLogoIcon;