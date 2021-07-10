import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Home = styled.div`
    height: 100vh;
    width: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Box = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    color: #fff;
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
        color: #E1306C;
        text-transform: uppercase;
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
    height: 80vh;
    width: 100%;
    text-transform: uppercase;
    img{
      margin-top: 2rem;
      
      width: 25%;
    }
    h2{
        display: flex;
        align-items: flex-end;
        font-size: 1.2rem;
      
        text-align: center;
        padding-bottom: 2%;
        color: ${({theme}) => theme.text};
        margin: 2rem;
        @media (max-width: 768px) {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
    }
    h3{
        font-size: 1.5rem;
        padding-bottom: 2%;
        text-align: center;
      margin: 1rem;
        color: ${({theme}) => theme.text};
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 150px;
  height: 50px;
  background: ${({theme}) => theme.primary};
  color: #fff;
  border-radius: 15px;
  transition: 0.4s;
  cursor: pointer;
  
  &:hover{
    box-shadow: 1px 2px 8px 2px rgba(0,0,0,0.5);
  }
`
