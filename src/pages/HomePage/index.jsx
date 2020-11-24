import React from 'react';
import Nav from '../../components/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
                    
                    <Icon colorHover={"#25D366"} color={"#fff"} href="https://chat.whatsapp.com/CKbymTMiP7r6LURlNbHQnI" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </Icon>
                </Icons>
            </Body>

            <Footer home={true}/>
        </Box>
    </Home>
);

export default HomePage;