import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 80%;
    gap: 1%;
    margin: 20px auto 50px;
    padding: 0 20px;

    @media (max-width: 768px) {
        grid-template-columns: auto auto;
        width: 90%;
        flex-flow: column nowrap;
    }

    @media (max-width: 640px) {
        grid-template-columns: auto;
        width: 95%;
        flex-flow: column nowrap;
        gap: 0;
        padding: 1%;
    }

    article{
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;

        &:hover{
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        strong{
            color: #424242;
        font-weight: bold;
        }

        p{
            font-size: 16px;
            color: #999;
            margin-top: 5px;
            line-height: 24px;
        }
    }
`

export const Driver = styled(Link)`
    height: 42px;
    border-radius: 5px;
    border: 2px solid #ccc;
    background: none;
    margin-top: 10px;
    color:#747d8c;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: #ccc;
        color: #fff;
    }
`