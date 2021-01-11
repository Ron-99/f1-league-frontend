import React from 'react';
import {useParams} from 'react-router-dom';

import {Card, CardTitle, CardBody, Overlay} from './style'
import {Wrapper, Title, Cards} from '../../styles/global';

import brazil from '../../img/brazil.png'

const EventsPage = () => {

    const {id} = useParams();

    return(
        <Wrapper>
            <Title>Eventos da liga {id}</Title>
            <Cards>
                <Card image={brazil} >
                    <Overlay>
                        <CardTitle>Teste</CardTitle>
                        <CardBody>
                            Outro teste
                        </CardBody>
                    </Overlay>
                </Card>
            </Cards>
        </Wrapper>
    )
}

export default EventsPage;