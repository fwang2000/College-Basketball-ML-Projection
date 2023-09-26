import { Box, List, ListItem, ListItemText } from "@mui/material";

function SearchResultList(resultObj) {

    const results = resultObj.results;

    console.log(results);

    return(
        <Box
            
        >
            <List
                style={{
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems:'flex-start'
                }}
            >
                {
                    results.map(result => {
                        return(
                            <ListItem key={result.name}>
                                <ListItemText primary={result.name}/>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
}

export default SearchResultList;