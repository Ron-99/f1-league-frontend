import styled from 'styled-components';

export const Date = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;

    h3{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.text};
        margin: 0 3%;
    }

    .arrow{
        color: ${({theme}) => theme.text};
        transition: 0.3s;
        cursor: pointer;
        font-size: 12px;
        padding: 8px;
        border: 1px solid  #e0dfdf;
        border-radius: 50%;

        &:hover{
            color: #fff;
            background: ${({theme}) => theme.primary};
            border: 1px solid  ${({theme}) => theme.primary};
        }
    }
`
