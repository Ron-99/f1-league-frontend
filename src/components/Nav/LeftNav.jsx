import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { isAuthenticated, logout } from '../../services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as LightBlack } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as LightWhite } from '@fortawesome/free-regular-svg-icons';
import ToggleButton from 'react-toggle-button'

import { Item, Ul, Right, Left, Logout } from './style';

const LeftNav = ({ home, open, theme, themeToggler }) => {

    const history = useHistory();
    const [self, setSef] = useState(theme === "light"? true : false)

    return (
        <Ul open={open}>

            <Left>
                <li>
                    <Item home={home} open={open} exact to="/" activeStyle={{ fontWeight: '600' }}>Início</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/leagues" activeStyle={{ fontWeight: '600' }}>Campeonatos</Item>
                </li>
                <li>
                    <Item home={home} open={open} exact to="/classification" activeStyle={{ fontWeight: '600' }}>Corridas</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/driver" activeStyle={{ fontWeight: '600' }}>Classificação</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/team" activeStyle={{ fontWeight: '600' }}>Construtores</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/driver" activeStyle={{ fontWeight: '600' }}>Pilotos</Item>
                </li>
            </Left>

            <Right>
                <ToggleButton
                    inactiveLabel={<FontAwesomeIcon icon={LightBlack} />}
                    activeLabel={<FontAwesomeIcon icon={LightWhite} />}
                    colors={{
                        activeThumb: {
                          base: 'rgb(250,250,250)',
                        },
                        inactiveThumb: {
                          base: 'rgb(250,250,250)',
                        },
                        active: {
                          base: 'rgb(65,66,68)',
                          hover: 'rgb(95,96,98)',
                        },
                        inactive: {
                          base: '#1e90ff',
                          hover: 'rgb(70, 162, 253)',
                        }
                      }}
                    value={self}
                    onToggle={(value) => {
                        setSef(!value)
                        themeToggler()
                    }} />


                {
                    isAuthenticated() ?
                        <li>
                            <Logout home={home} open={open} onClick={() => { logout(); history.push('/'); }}>Sair</Logout>
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