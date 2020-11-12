import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FooterStyle, Line, Copy } from './style';
import {Icons, Icon} from '../../components/Icons/style';

const Footer = ({home}) => (
    <FooterStyle>

        <Icons>
            <Icon colorHover={"#6a737d"} color={home ? "#fff" :"#424242"} style={{fontSize: "25px"}} href="https://www.linkedin.com/in/ron99/" target="_blank"> 
                <FontAwesomeIcon icon={faLinkedin} />
            </Icon>

            <Icon colorHover={"#6a737d"} color={home ? "#fff" :"#424242"} style={{fontSize: "25px"}} href="https://github.com/ron-99" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </Icon>

            <Icon colorHover={"#6a737d"} color={home ? "#fff" :"#424242"} style={{fontSize: "25px"}} href="https://www.instagram.com/ron99__/?hl=pt-br" target="">
                <FontAwesomeIcon icon={faInstagram} />
            </Icon>
        </Icons>
        <Line color={home ? "#fff" :"#424242"}/>
        <Copy>
            2020 &copy; Desenvolvido por Ronaldo Gomes
        </Copy>        
    </FooterStyle>
)

export default Footer;