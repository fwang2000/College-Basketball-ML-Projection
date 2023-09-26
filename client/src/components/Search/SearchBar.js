import { Box, TextField, Typography, Button, IconButton,  } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar({style}) {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {

        e.preventDefault();

        fetch("/search", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                playerName: query.trim()
            })
        }).then(async response => {
            
            const resJson = await response.json();

            if (!response.ok) {

                const error = (resJson && resJson.search_results) || response.status;
                return Promise.reject(error);
    
            } else {

                navigate('/search/results', { 
                    state: { 
                        player: query.trim(),
                        results: resJson.search_results
                    }
                });
            }
        }).catch(error => {

            console.log(error.message)
        });
    }
    
    return(
        <Box
            sx={style}
            component={'form'}
            autoComplete='off'
            onSubmit={handleSearchSubmit}
        >
            <TextField
                id="outlined-search" 
                label={
                    <Typography variant='p'>
                        Find your player
                    </Typography>
                }
                type='text'
                fullWidth
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                InputProps={{
                    endAdornment: query && (
                        <IconButton
                            onClick={() => setQuery("")}
                        >
                            <ClearIcon style={{color: 'white'}}/>
                        </IconButton>
                    )
                }}
                InputLabelProps={{
                    required:false
                }}
            />
            <Button 
                variant="outlined" 
                type='submit'
                size='large'
                style={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '5px'
                }}
            >
                Search Player
            </Button>
        </Box>
    );
}

export default SearchBar;