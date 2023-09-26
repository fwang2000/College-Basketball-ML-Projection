import './App.css';

import LandingPage from "./pages/LandingPage"
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/Search/SearchPage';
import SearchResultPage from './pages/Search/SearchResultPage';
import MethodologyPage from './pages/MethodologyPage';
import AuthorPage from './pages/AuthorPage';
import NavigationBar from './components/Navigation/NavigationBar';

import { Route, Routes } from 'react-router-dom';
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material';

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
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandColor': '#AAAAAA',
            '--TextField-brandHoverColor': '#888888',
            '--TextField-brandFocusedColor': '#FFFFFF',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandFocusedColor)',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'var(--TextField-brandColor)',
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              color: 'var(--TextField-brandHoverColor)',
            },
            '&.Mui-focused:after': {
              color: 'var(--TextField-brandFocusedColor)',
            }
          },
          input: {
            color: 'white'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandColor)',
            fontSize: '16px'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandFocusedColor)',
            }
          },
          input: {
            color: 'white',
            fontFamily: 'IBM_Plex_Mono_Regular'
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
      h1: {
        fontFamily: 'IBM_Plex_Mono_Bold',
        fontSize: '50px'
      },
      h4: {
        fontFamily: 'IBM_Plex_Mono_Semi_Bold',
        fontSize: '14px'
      },
      subtitle1: {
        fontFamily: 'IBM_Plex_Mono_Light',
        fontSize: '20px',
        letterSpacing: '0.1em'
      },
      p: {
        fontFamily: 'IBM_Plex_Mono_Regular',
        fontSize: '16px',
        letterSpacing:'0.1em'
      }
    }
}))

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/search/results" element={<SearchResultPage/>}></Route>
          <Route path="/methodology" element={<MethodologyPage/>}></Route>
          <Route path="/author" element={<AuthorPage/>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;