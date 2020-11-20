import styled from 'styled-components';



export const TitleProfile = styled.h1 `
    margin: 2% 1.5% 1% 1.5%;
    color: #424242;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
`

export const Overflow = styled.div `
    overflow-x: auto;
`

export const RecentResultsTable = styled.table `
    border-collapse: collapse;
    text-align: center;
    width: 98%;
    color: #636e72;
    vertical-align: middle;
    box-shadow: 2px 4px 8px 2px rgba(185, 185, 185, 0.5);
    transition: 0.5s;
    border: 2px solid rgba(185, 185, 185, 0.5);
    margin-bottom: 6%;
    margin: 1%;

    &:hover{
        box-shadow: 4px 8px 16px 4px rgba(0,0,0,0.5);
    }   

    tr {
        height: 60px;
        background: white;

        &:nth-child(even){
            background-color: #f2f2f2;
        }
    }

    th, td{
        padding: 10px 20px;
    }

    th{
        vertical-align: middle;
        font-weight: 600;
        background:#424242;
        text-align: center;
        color: #fff;
        padding: 10px 20px;
    }

    td{
        text-align: center;
        vertical-align: middle;
        span{
            background: #eee;
            color: dimgrey;
            display: none;
            font-size: 10px;
            font-weight: bold;
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
            box-shadow: 2px 4px 8px 2px rgba(185, 185, 185, 0.5);
            transition: 0.5s;
            height: auto;

            &:nth-child(even){
                background-color: #fff;
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
                background-color: #f2f2f2;
            }

            span {
                display: block;
            }
        }
    }
`

export const Line = styled.tr `
    border-left: ${({position}) => position === 1 ? "4px solid #FFEB3B" : position === 2 ? "4px solid  #747d8c": position === 3 ? "4px solid #ff7f50": "0"} ;
`

export const BestLap = styled.td `
    color: ${({bestLap}) => bestLap ? '#5352ed' : '#636e72'};
    
`