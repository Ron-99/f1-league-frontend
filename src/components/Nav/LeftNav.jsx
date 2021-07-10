import React, { useState } from 'react';

import { Link, useHistory } from "react-router-dom";
import { isAuthenticated, logout } from '../../services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as LightBlack } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as LightWhite } from '@fortawesome/free-regular-svg-icons';
import ToggleButton from 'react-toggle-button'

import { Item, Ul, Right, Left, Logout, Center } from './style';
import caracolgif from '../../assets/img/caracol.gif';
import caracol from '../../assets/img/caracol.png';

const LeftNav = ({ home, open, theme, themeToggler }) => {

    const history = useHistory();
    const [self, setSef] = useState(theme === "light")
    const [animated, setAnimated] = useState(false);

    const handleMouseOver = () => {
        setAnimated(true)
    }
    const handleMouseLeave = () => {
        setAnimated(false)
    }

    return (
        <Ul open={open}>

          <Left>
              <Link to='/' className="home">
                <img onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} src={animated ? caracolgif : caracol} alt=""/>
              </Link>
          </Left>

            <Center>
                <li>
                    <Item home={home} open={open} exact to="/" activeStyle={{ color: '#E1306C' }}>Início</Item>
                </li>
                <li>
                    <Item home={home} open={open} exact to="/classification" activeStyle={{ color: '#E1306C' }}>Corridas</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/driver" activeStyle={{ color: '#E1306C' }}>Classificação</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/classification/team" activeStyle={{ color: '#E1306C' }}>Construtores</Item>
                </li>
                <li>
                    <Item home={home} open={open} to="/driver" activeStyle={{ color: '#E1306C' }}>Pilotos</Item>
                </li>
            </Center>

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
                          base: 'rgba(245,48,81,1)',
                          hover: 'rgb(243,90,114)',
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
                            <Item home={home} open={open} to="/register" activeStyle={{ fontWeight: '600' }}>Inscrever-se</Item>
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
