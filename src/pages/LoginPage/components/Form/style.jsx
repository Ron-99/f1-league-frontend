import styled from 'styled-components';

export const FormStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    max-width: 500px;
    height: 500px;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
        width: 80%;
    }
`

export const FormHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10% 0 0 0;
    width: 100%;
    height: 100px;
    color: ${({ theme }) => theme.text};
`

export const FormBody = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
`

export const Fields = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Field = styled.div `
    display:flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    margin: 2%;
    width: 100%;
    label{
        font-family: 'Lato';
        font-weight: 600;
        color: ${({ theme }) => theme.text};
    }
    input{
        width: 95%;
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

export const FormFooter = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    button{
        width: 100%;
        height: 50px;
        background: ${({theme}) => theme.body};
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }
`