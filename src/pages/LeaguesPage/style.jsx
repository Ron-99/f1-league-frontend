import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export const LeaguesWrapper = styled.div`
    display: flex;
    flex-direction:column;
    height: 80vh;
    width: 98%;
    margin: 0 1%;
`

export const Title = styled.h2`
    color: ${({theme}) => theme.text};

`

export const Cards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 2%;
    gap: 1%;
`
export const Overlay = styled.div `
    transition: opacity 0.4s;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 5%;
    background-color:rgba(0, 0, 0, 0.3);
`
export const EnterLeague = styled(Link)`
    background: dodgerblue;
    width: 0;
    height: 0;
    color: #fff;
    transition: box-shadow 0.4s;
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    z-index: 3;
    border-radius: 5px;
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    }
`

export const CardTitle = styled.h3 `
    color: #fff;
    font-size: 2rem;
`

export const CardBody = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    color: #fff;
`


export const Card = styled.article`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({image}) => image});
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    

    &:hover > ${Overlay} > ${EnterLeague} {
        visibility: visible;
        opacity: 1;
        width: 142px;
        height: 44px;
    }

    &:hover > ${CardBody}, &:hover > ${CardTitle} {
        display: none;
    }
    &:hover > ${Overlay} {
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.3);
        opacity:1 ;
        border-radius: 5%;
        visibility: visible;    
        display: flex;
        justify-content: center;
        align-items:center;
    }
`


export const Icon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`