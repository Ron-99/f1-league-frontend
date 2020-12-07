import React from 'react';

import { faUsers } from '@fortawesome/free-solid-svg-icons'

import { Card, Cards, LeaguesWrapper, Title, Overlay, EnterLeague, CardTitle, Icon, CardBody } from './style';

import auto from '../../img/auto.jpg';
import dirt from '../../img/dirt.jpg';

const LeaguesPage = () => {

    const ligas = [
        {
            code: 'f1',
            title: 'F1',
            img: 'https://www.mkaugaming.com/wp-content/uploads/2020/07/2020-07-03_00006.jpg',
        },
        {
            code: 'dirt',
            title: 'Dirt Rally 2.0',
            img: dirt
        },
        {
            code: 'automobilista2',
            title: 'Automobilista 2',
            img: auto
        }
    ]

    return (
        <LeaguesWrapper>
            <Title>Ligas Oficiais E-Race Brasil</Title>
            <Cards>
                {
                    ligas.map(liga => (
                        <Card image={liga.img}>
                            <Overlay>  
                                <CardTitle>{liga.title}</CardTitle>
                                <CardBody>
                                    <Icon icon={faUsers} />
                                    50 pilotos
                                </CardBody>
                                <EnterLeague to={`/leagues/events/${liga.code}`}>Acessar</EnterLeague>
                            </Overlay>
                            
                                             
                    </Card>
                    ))
                }
            </Cards>  
        </LeaguesWrapper>
    )
}

export default LeaguesPage;