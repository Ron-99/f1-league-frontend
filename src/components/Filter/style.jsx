import styled from 'styled-components';

export const Filtros = styled.div `
    display: flex;
    margin: 1% 0;
`

export const Filtro = styled.div `
    display: flex;
    margin: 0 1%;
    justify-content: center;
    align-items: center;

    label{
        margin: 0 2%;
        color: ${({theme}) => theme.text};
        font-weight: 700;
    }

    select{
        width: 120px;
        height: 30px;
        border: 1px solid #ccc;
        outline: none;
        background: #fefefe;
        color: ${({theme}) => theme.secondText};
        border-radius: 5px;
        padding-left: 45px;
    }
`