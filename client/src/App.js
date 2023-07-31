import './App.css';

import LandingPage from "./pages/LandingPage"

import { Route, Routes } from 'react-router-dom';
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 35,
          }
        }
      }
    },
    typography: {
      fontFamily: 'Arial'
    }
}))

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;