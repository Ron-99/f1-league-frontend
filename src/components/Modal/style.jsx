import styled from 'styled-components';

export const ModalForm = styled.div `
    position: fixed; 
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 

    @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0} 
        to {top:0; opacity:1}
    }
  
    @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }
`

export const ModalContent = styled.div `
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    @media(max-width: 768px) {
        width: 95%;
    }
`

export const ModalHeader = styled.div `
    padding: 10px 16px;
    background-color: ${({theme}) => theme.body};
    color: #fff;
    border-bottom: 2px solid #7bed9f;

    .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;

        &:hover, &:focus{
            color: rgb(190, 190, 190);
            text-decoration: none;
            cursor: pointer;
        }
    }
`

export const ModalBody = styled.div `
    position:relative;
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Fields = styled.div `
    display: flex;
    justify-content: center;
`

export const Field = styled.div `
    display:flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    margin: 5%;
    label{
        font-family: 'Lato';
        font-weight: 400;
    }
    input{
        width: 100%;
        height: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        font-family: 'Lato';
        font-weight: 400;
        margin-top: 10px;
    }
    select{
        width: 120px;
        height: 32px;
        border: 1px solid #ccc;
        outline: none;
        background: #fefefe;
        border-radius: 5px;
        margin-top: 10px;
    }
`

export const ModalFooter = styled.div `
    padding: 2px 16px;
    color: white;
    display:flex;
    justify-content: flex-end;

    .next, .finish{
        width: 20%;
        height: 30px;
        cursor: pointer;
        transition: 0.4s;
        margin: 1%;
        color: #636e72;
        border: 1px solid rgb(59, 59, 59);
        border-radius: 5px;
        background: #fff; 
    }

    .next:hover{   
        background:  rgb(59, 59, 59);
        color: #7bed9f;
    }

    .finish:hover{
        background: #7bed9f;
        color: #000;
    }
`

export const Button = styled.div `
    display:flex;
    justify-content:center;
    align-items: center;
    margin: 5% 0 0 0;
`

export const New = styled.button `
    width: 25px;
    height: 25px;
    background:#30be6b;
    color: #fff;
    font-size: 7px;
    transition: 0.3s;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        background: #7bed9f;
    }
`

export const Minus = styled(New)`
    background: red;
    margin: 0 0 0 5px;

    &:hover{
        background: red;
    }
`