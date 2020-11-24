import styled from 'styled-components';

export const FooterStyle = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
`

export const Copy = styled.div `
    color: ${({theme}) => theme.text};
    margin: 0.5% 0;
`

export const Line = styled.div `
    height: 1px;
    width: 30%;
    background: ${({color}) => color};
`