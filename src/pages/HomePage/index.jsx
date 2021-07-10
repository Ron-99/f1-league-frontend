import React from 'react';
import Nav from '../../components/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


import {Body, Box, Button, Home, Title} from './style';
import logo from '../../assets/img/logo.svg'
import {Icons, Icon} from '../../components/Icons/style';

import Footer from '../../components/Footer';

const HomePage = ({theme, themeToggler}) => (
    <Home >
        <Nav theme={theme} themeToggler={themeToggler}/>
        <Body>
          <img src={logo} alt=""/>
          <h2>Venha participar de uma das comunidades gamers mais divertidas do Brasil</h2>
          <Button to='/register'>Inscrever-se</Button>
        </Body>

        <Footer/>
    </Home>
);

export default HomePage;
