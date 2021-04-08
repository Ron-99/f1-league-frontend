import styled from 'styled-components';

export const NewsStyle = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.text};   
    
`

export const LastNewsTitle = styled.h1 `
    padding: 20px 0;
`

export const LastNews = styled.section `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
    padding: 0 0 0 5%;

    @media (max-width: 768px) {
        width: 100%;
    }
`