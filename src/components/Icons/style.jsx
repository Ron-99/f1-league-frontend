import styled from 'styled-components';

export const Icons = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
`

export const Icon = styled.a `
    font-size: 40px;
    margin: 0 10px;
    color: ${({color}) => color};
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        color: ${({ colorHover }) => colorHover};
    }
`