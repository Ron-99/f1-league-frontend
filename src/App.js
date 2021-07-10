import React from 'react';

import Routes from './routes';

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './style';
import { darkTheme, lightTheme } from './styles/theme';
import { useDarkMode } from './components/useDarkMode';
import FontStyles from "./styles/font";

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <FontStyles />
        <GlobalStyle />
        <div className="App">
          <Routes themeToggler={themeToggler} theme={theme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
