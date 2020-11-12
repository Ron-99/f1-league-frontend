import styled from 'styled-components';

export const NotFoundStyle = styled.div `
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #424242;

    h1{
        font-size: 10rem;
    }
    
    h2{
        font-size: 2rem;

        @media (max-width: 640px) {
            font-size: 1.5rem;
        }
    }
    

`