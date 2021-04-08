import { createGlobalStyle } from 'styled-components'

import Fell from './fonts/Fell.ttf'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap');

    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        font-family: 'Lato';
        font-weight: 100;
    }
    body{
        background:${({ theme }) => theme.background};
    }
`