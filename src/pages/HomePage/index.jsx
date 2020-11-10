import React from 'react';
import Nav from '../../components/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import {Body, Box, Home, IconDiscord, Icons, Title, IconWhatsapp} from './style';

const HomePage = () => (
    <Home >
        <Nav home={true}/>
        <Box>
            <Title>
                <h1>E-Race Brasil</h1>
            </Title>
            <Body>
                <h2>A maior comunidade de corridas virtuais</h2>
                <h3>Venha Participar!!!</h3>

                <Icons>
                    <IconDiscord href="https://discord.gg/QzVPRXt" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} />
                    </IconDiscord>
                    
                    <IconWhatsapp href="https://chat.whatsapp.com/CKbymTMiP7r6LURlNbHQnI" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </IconWhatsapp>
                </Icons>
            </Body>
        </Box>
    </Home>
);

export default HomePage;