import styled from 'styled-components';

export const Overlay = styled.div `
    transition: opacity 0.4s;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 5%;
    background-color:rgba(0, 0, 0, 0.2);
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

export const Card = styled.div `
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