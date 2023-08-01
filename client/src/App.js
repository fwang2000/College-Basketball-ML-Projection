import './App.css';

import LandingPage from "./pages/LandingPage"
import NavigationBar from './components/Navigation/NavigationBar';

import { Route, Routes } from 'react-router-dom';
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 35,
            fontFamily: 'IBM_Plex_Mono_Medium',
            textTransform: 'none'
          }
        }
      }
    },
    palette: {
      primary: {
        main:'#693589',
      },
      secondary: {
        main:'#6A6A6A'
      }
    },
    typography: {
      subtitle1: {
        fontFamily: 'IBM_Plex_Mono_Light',
        fontSize: '20vh',
        letterSpacing: '0.1em'
      },
    }
}))

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;