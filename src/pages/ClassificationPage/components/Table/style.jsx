import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Center = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`

export const TableContent = styled.table`
    border-collapse: collapse;
    text-align: center;
    width: 90%;
    color: ${({ theme }) => theme.text};
    vertical-align: middle;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    /* border: 2px solid rgba(0, 0, 0, 0.5); */
    margin-bottom: 6%;
    margin: 1%;
    background: ${({theme}) => theme.background};

    &:hover{
        box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.5);
    }   

    tr {
        height: 60px;
        background: ${({theme}) => theme.background};

        &:nth-child(even){
            background-color: ${({theme}) => theme.secondBackground};
        }
    }

    th, td{
        padding: 10px 20px;
    }

    th{
        vertical-align: middle;
        font-weight: 600;
        background: ${({theme}) => theme.background};
        text-align: center;
        color: ${({theme}) => theme.secondText};
        padding: 10px 20px;
    }

    td{
        text-align: center;
        vertical-align: middle;
        span{
            background-color: ${({theme}) => theme.toggleBorder};
            color: ${({theme}) => theme.text};
            display: none;
            font-size: 10px;
            font-weight: normal;
            padding: 5px;
            position: absolute;
            text-transform: uppercase;
            top: 0;
            left: 0;
        }
    }

    @media(max-width: 800px) {
        box-shadow: none;
        border: none;
        text-align: left;

        &:hover{
            box-shadow: none;
        }   
        thead {
            left: -9999px;
            position: absolute;
            visibility: hidden;
        }

        tr{
            border-bottom: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
            transition: 0.5s;
            height: auto;

            &:nth-child(even){
                background-color: ${({theme}) => theme.background};
            }

            &:hover{
                box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.5);
            } 
        }
        td {
            margin: 0 -1px -1px 0;
            padding-top: 35px;
            position: relative;
            width: 100%;
            text-align: left;

            &:nth-child(even){
                background-color: ${({theme}) => theme.secondBackground};
            }

            span {
                display: block;
            }
        }
    }

`

export const Line = styled.tr`
    border-left: ${({ position }) => position === 1 ? "4px solid #FFEB3B" : position === 2 ? "4px solid  #747d8c" : position === 3 ? "4px solid #ff7f50" : "0"} ;
`

export const BestLap = styled.td`
    color: ${({ bestLap, theme }) => bestLap ? '#5352ed' : theme.text};
`

export const Driver = styled(Link)`
    color: ${({ theme }) => theme.text};
    text-decoration: none;
`

export const Button = styled.button`
    margin: 0 2%;
    cursor: pointer;
    background: none;
    transition: 0.4s;
    color: ${({ color }) => color === "edit" ? "#1e90ff" : "#ff4757"};

    &:hover{
        color: ${({ color }) => color === "edit" ? "#70a1ff" : "#ff6b81"};
    }

    
`
