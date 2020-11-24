import styled from 'styled-components';

export const SearchStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0;

    input{
        width: 80%;
        height: 50px;
        border-radius: 5px;
        outline: none;
        padding: 0 0 0 10px;
        font-size: 1.5rem;
        background: ${({theme}) => theme.secondBackground};
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
        color: ${({theme}) => theme.text};
    }
`