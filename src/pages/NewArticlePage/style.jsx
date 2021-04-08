import styled from 'styled-components';

export const ArticleStyle = styled.div `
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Fields = styled.div `
    display: flex;
    justify-content: center;
    width: 50%;
`

export const Field = styled.div `
    display:flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 5% 1%;
    width: 50%;
    label{
        font-family: 'Lato';
        font-weight: 400;
        color: ${({theme}) => theme.text}
    }
    input{
        width: 100%;
        height: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        font-family: 'Lato';
        font-weight: 400;
        margin-top: 10px;
    }
    select{
        width: 120px;
        height: 32px;
        border: 1px solid #ccc;
        outline: none;
        background: #fefefe;
        border-radius: 5px;
        margin-top: 10px;
    }
`