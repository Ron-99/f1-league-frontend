import React from 'react';

import { useHistory } from "react-router-dom";
import { isAuthenticated, logout } from '../../services/auth';

import { Item, Ul, Right, Left, Logout } from './style';

const LeftNav = ({ home, open }) => {

    const history = useHistory();

    return (
        <Ul open={open}>

            <Left>
                <li>
                    <Item home={home} open={open} exact to="/" activeStyle={{ fontWeight: '600' }}>Início</Item>
                </li>
                <li>
                    <Item home={home} open={open} exact to="/classification" activeStyle={{ fontWeight: '600' }}>Classificação</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/driver" activeStyle={{ fontWeight: '600' }}>Tabela de Pilotos</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/team" activeStyle={{ fontWeight: '600' }}>Tabela de Equipes</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/driver" activeStyle={{ fontWeight: '600' }}>Pilotos</Item>
                </li>
            </Left>

            <Right>
                {
                isAuthenticated()?
                <li>
                    <Logout home={home} open={open} onClick={() => {logout(); history.push('/');}}>Sair</Logout>
                </li>
                :
                <li>
                    <Item home={home} open={open} to="/login" activeStyle={{ fontWeight: '600' }}>Entrar</Item>
                </li>
}
                {/* <li>
                <Item home={home} open={open} to="/signup" activeStyle={{ fontWeight: '600' }}>Cadatrar</Item>
            </li> */}
            </Right>
            {/* <li>
                <Item home={home} open={open} to="/team" activeStyle={{fontWeight: '600'}}>Equipes</Item>
            </li> */}
        </Ul>
    )
}

export default LeftNav;