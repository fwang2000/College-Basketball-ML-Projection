import LogoName from "./LogoName"
import LogoIcon from "./LogoIcon"

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Logo(props) {

    return (
        <Link to='/'>
            <Box 
                display={'flex'}
                alignItems={'start'}
                paddingLeft={'10%'} 
                gap={3}
            >
                <LogoName width={props.width}/>
                <LogoIcon width={props.width}/>
            </Box>
        </Link>
    )
}

export default Logo;