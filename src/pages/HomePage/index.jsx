import React from 'react';
import Nav from '../../components/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {Body, Box, Home, Title} from './style';
import {Icons, Icon} from '../../components/Icons/style';

import Footer from '../../components/Footer';

const HomePage = ({theme, themeToggler}) => (
    <Home >
        <Nav home={true} theme={theme} themeToggler={themeToggler}/>
        <Box>
            <Title>
                <h1>E-Race Brasil</h1>
            </Title>
            <Body>
                <h2>A maior comunidade de corridas virtuais</h2>
                <h3>Venha Participar!!!</h3>

                <Icons>
                    <Icon colorHover={"#7289DA"} color={"#fff"} href="https://discord.gg/QzVPRXt" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} />
                    </Icon>
                    
                    <Icon colorHover={"#FF0000"} color={"#fff"} href="https://www.youtube.com/channel/UCt4TIXg2FbYE6owWflFTSOg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Icon>

                    <Icon colorHover={"#E1306C"} color={"#fff"} href="https://www.instagram.com/eracebrasil/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Icon>
                </Icons>
            </Body>

            <Footer home={true}/>
        </Box>
    </Home>
);

export default HomePage;