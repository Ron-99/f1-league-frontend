import styled from 'styled-components';

export const CurrentTeam = styled.div `

`

export const PastTeam = styled.div `
    margin-bottom: 1%;
`

export const TitleProfile = styled.h1 `
    margin: 2% 1.5% 1% 1.5%;
    color: ${({ theme }) => theme.text};
    font-size: 0.8rem;
    font-weight: normal;
    text-transform: uppercase;
`

export const Overflow = styled.div `
    overflow-x: auto;
`

export const TeamsTable = styled.table `
  width: 98%;
  border-collapse: collapse;
  color: ${({theme}) => theme.text};
  font-family: 'Lato', monospace;
  font-weight: 400;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  background: ${({theme}) => theme.background};
  /* border:2px solid rgba(185, 185, 185, 0.5); */
  margin: 1% 1% 6%;
  background: ${({theme}) => theme.background};

  &:hover {
    box-shadow: 4px 8px 16px 4px rgba(0, 0, 0, 0.5);
  }

  tr {
    height: 60px;

    &:nth-child(even) {
      background-color: ${({theme}) => theme.secondBackground};
    }
  }

  th {
    vertical-align: middle;
    font-weight: 600;
    background: ${({theme}) => theme.body};
    text-align: center;
    color: #fff;
  }

  td {
    text-align: center;
    vertical-align: middle;
  }
`
