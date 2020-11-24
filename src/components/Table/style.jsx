import styled from 'styled-components';

export const Overflow = styled.div `
    overflow-x: auto;
`

export const TableContent = styled.table `
    width: 98%;
    border-collapse: collapse;
    color: ${({ theme }) => theme.text};
    font-family: 'roboto';
    font-weight: 400;
    margin: 1%;
    box-shadow: 2px 4px 8px 2px rgba(185, 185, 185, 0.5);
    transition: 0.5s;
    background: ${({theme}) => theme.background};
    border:2px solid rgba(185, 185, 185, 0.5);
    margin-bottom: 6%;

    &:hover{
        box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.5);
    }    

    tr{
        height: 60px;

        &:nth-child(even){
            background-color: #f2f2f2;
        }
    }

    th{
        vertical-align: middle;
        font-weight: 600;
        background: ${({theme}) => theme.body};
        text-align: center;
        color: #fff;
    }

    td{
        text-align: center;
        vertical-align: middle;
    }

`

export const Line = styled.tr `
    border-left: ${({position}) => position === 1 ? "4px solid #FFEB3B" : position === 2 ? "4px solid  #747d8c": position === 3 ? "4px solid #ff7f50": "0"} ;
`

export const BestLap = styled.td `
    color: ${({bestLap, theme}) => bestLap ? '#5352ed' : theme.text};
`