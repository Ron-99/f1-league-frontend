import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
    }
    body{
        background:${({ theme }) => theme.background};
        font-family: 'Lato', monospace;
      font-weight: 300;
    }
`
