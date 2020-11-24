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
        outline: none;
        background: ${({theme}) => theme.secondBackground};
        color: ${({theme}) => theme.text};
        border-radius: 5px;
        padding-left: 45px;
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
`