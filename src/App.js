
import './App.css';
import InputCard from './components/Input Box';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#66B2FF',
    },
    mode: 'dark',
  }
});




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div class="row">
      <div class="column">
        *Image*
      </div>
      <div class="column"><InputCard/></div>
    </div>
    </ThemeProvider>
  );
}

export default App;
