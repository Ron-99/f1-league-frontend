import styled from 'styled-components';

export const NewsInformationStyle = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.text};
    flex-direction: column;
`

export const Title = styled.h1 `
    width: 45%;
    text-align: justify;
    margin: 20px 0;
    @media (max-width: 768px) {
        width: 85%;
    }
`

export const Description = styled.h2 `
    width: 45%;
    text-align: justify;
    color: ${({theme}) => theme.secondText};
    font-size: 1.2rem;
    margin: 0 0 20px 0;
    @media (max-width: 768px) {
        width: 85%;
    }
`

export const Author = styled.div `
    width: 45%;
    display: flex;
    @media (max-width: 768px) {
        width: 85%;
    }
`

export const AuthorInfo = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const AuthorSocial = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    svg{
        margin: 5px;
        font-size: 18px;
        cursor: pointer;
    }
`

export const AuthorImg = styled.div `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #9191f3;
`

export const AuthorInfoText = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    font-size: 0.8rem;
`

export const AuthorName = styled.span `
    margin: 5px 0;
`

export const AuthorOthersInfo = styled.span `
    color: ${({theme}) => theme.secondText};
`

export const MainImg = styled.img `
    margin: 20px 0;
`
export const Post = styled.div `
    margin-bottom: 250px; 
    width: 45%;

    p{
        
        line-height: 1.5;
        font-size: 1.1rem;
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        width: 85%;
    }
`