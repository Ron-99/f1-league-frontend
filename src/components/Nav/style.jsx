import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ home, open, theme }) => home ? '#fff' : open ? '#fff': theme.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 4px 1px rgb(0 0 0 / 20%);
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(42,42,42, 0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 2;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

export const Item = styled(NavLink)`
    cursor: pointer;
    transition: 0.5s;
    text-decoration: none;
    font-weight: normal;
    color: ${({ home, open, theme }) => home ? '#fff' : open ? '#fff' : theme.text};
    &:hover{
        color: #E1306C;
    }
`

export const Logout = styled.p `
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  color: ${({ home, open, theme }) => home ? '#fff' : open ? '#fff' : theme.text};
  &:hover{
      font-weight: 600;
  }
`

export const Left = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  
  .home{
    img{
      width: 25%;
    }
  }
  

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
  }
`

export const Center = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
  }
`

export const Right = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    flex-direction: column;
  }
`
