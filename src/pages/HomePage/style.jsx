import styled from 'styled-components';

export const Home = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("https://cdn.discordapp.com/attachments/424738309475008545/769602512176676904/blur.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    color: #fff;
    font-family: 'Staatliches', cursive;
`

export const Title = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 100%;
    h1{
        padding-bottom: 2%;
        font-size: 5rem;
        text-align: center;
        color: dodgerblue;
        text-transform: uppercase;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }
    
`

export const Body = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 70vh;
    width: 100%;
    text-transform: uppercase;
    h2{
        display: flex;
        align-items: flex-end;
        font-size: 2rem;
        text-align: center;
        padding-bottom: 2%;
        @media (max-width: 768px) {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
    }
    h3{
        font-size: 1.5rem;
        padding-bottom: 2%;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`