import React from 'react';

import {List, Driver, Row, Column} from './style';

const Cards = ({ drivers, teams, isDrivers }) => (
    <List>
        {console.log(drivers)}
        {
                drivers.map(driver => (
                    <article key={driver.id}>
                        <Row>
                            <strong>{driver.driver}</strong>
                            <strong>{driver.rank}</strong>
                        </Row>
                        
                        <Row>
                            <p>{driver.team}</p>
                        </Row>
                        
                        <Row>
                            <Driver to={`/driver/${driver.id}`}>Acessar</Driver>
                        </Row>
                    </article>
                ))
        }
    </List>
)

export default Cards;