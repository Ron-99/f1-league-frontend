import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    height: 80vh;
    width: 98%;
    margin: 0 1%;
`

export const Title = styled.h1`
    color: ${({theme}) => theme.text};
    font-size: 1.5rem;
`

export const Cards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 2%;
    gap: 1%;
`