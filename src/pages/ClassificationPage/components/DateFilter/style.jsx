import styled from 'styled-components';

export const Date = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;

    h3{
        font-size: 1.4rem;
        color:#636e72;
        margin: 0 3%;
    }

    .arrow{
        color: #747d8c;
        transition: 0.3s;
        cursor: pointer;
        font-size: 12px;
        padding: 8px;
        border: 1px solid  #e0dfdf;
        border-radius: 50%;

        &:hover{
            color: #fff;
            background: #e0dfdf;
        }
    }
`