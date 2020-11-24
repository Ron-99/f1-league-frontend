import styled from 'styled-components';

export const Profile = styled.div `
    margin: 2% 10%;
    background: ${({theme}) => theme.secondBackground};
    

    @media (max-width: 768px) {
        margin: 2% 1%;
    }

`

export const ProfileHeader = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${({theme}) => theme.body};
    padding: 0 1%;
    height: 200px;
    border-radius: 5px;
`

export const ProfileBody = styled.div ``