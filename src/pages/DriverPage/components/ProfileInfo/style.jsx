import styled from 'styled-components';

export const ProfileInfoStyle = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 1.5%;
    height: 120px;
    width: 75%;
`

export const Data = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    h1{
        color: #fff;
    }

    h3{
        font-size: 1.1rem;
        color: #999;
        margin: 0 3px;
    }
`

export const Medals = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    width: 100%;
`

export const Medal = styled.div `
    margin: 0 1%;
    display: flex;
    justify-content: space-around;
    width: 40px;

    span{
        color: #fff;
    }
`

