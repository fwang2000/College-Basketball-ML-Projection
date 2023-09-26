import { Box } from '@mui/material';
import '../../assets/css/BasePage.css'
import SearchBar from '../../components/Search/SearchBar';

function SearchPage() {

    return(
        <section className="base_page">
            <Box
                display='flex'
                width="100%"
                justifyContent='center'
                alignItems='center'
            >
                <SearchBar style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    width: '25%'
                }}/>
            </Box>
        </section>
    )
}

export default SearchPage;