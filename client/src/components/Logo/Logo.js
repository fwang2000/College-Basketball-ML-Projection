import LogoName from "./LogoName"
import LogoIcon from "./LogoIcon"

import { Box } from "@mui/material";

function Logo(props) {

    return (
        <Box display={'flex'} alignItems={'start'} paddingTop={'2%'} paddingLeft={'2%'} gap={3}>
            <LogoName width={props.width}/>
            <LogoIcon width={props.width}/>
        </Box>
    )
}

export default Logo;