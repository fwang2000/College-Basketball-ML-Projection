import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResultList from "../../components/Search/SearchResultList";

import { Box } from "@mui/material";

function SearchResultPage() {

    let location = useLocation();

    const [query, setQuery] = useState(location.state.player);
    const [searchResults, setSearchResults] = useState(location.state.results);

    return(
        <section className="base_page">
            <Box
                display='flex'
                width="100%"
                justifyContent='center'
                alignItems='center'
            >
                <SearchResultList results={searchResults}/>
            </Box>
        </section>
    )
}

export default SearchResultPage;