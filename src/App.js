import React from 'react';

import Routes from './routes';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './style';
import { darkTheme, lightTheme } from './styles/theme';
import { useDarkMode } from './components/useDarkMode';

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
