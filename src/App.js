
import './App.css';
import InputCard from './components/Input Box';
import ImagePlaceholder from './components/Image Placeholder';
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
      <div class="app">
        <div class="row">
          <div class="column">
            <ImagePlaceholder />
          </div>
          <div class="column"><InputCard /></div>
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;
