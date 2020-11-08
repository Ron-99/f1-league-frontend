import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        font-family: 'Lato', sans-serif;
    }

    @font-face {
        font-family: 'Lato', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'), url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap'); ;
        font-weight: 400;
    }

    body{
        background:#ffffff;
    }
`