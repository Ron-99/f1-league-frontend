import React from 'react';

import {List, Driver, Row, Column} from './style';

const Cards = ({ drivers, teams, isDrivers }) => (
    <List>
        {
            isDrivers ?
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
                :
                teams.map(team => (
                    <article key={team._id}>
                        <strong>{team.name}</strong>

                        <Driver to={`/team/${team._id}`}>Acessar</Driver>
                    </article>
                ))
        }
    </List>
)

export default Cards;