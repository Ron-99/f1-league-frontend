import React from 'react';

import {List, Driver, Row, Column} from './style';

const Cards = ({ drivers, teams, isDrivers }) => (
    <List>
        {
            isDrivers ?
                drivers.map(driver => (
                    <article key={driver._id}>
                        <Row>
                            <strong>{driver.name}</strong>
                            <strong>{driver.rank[0].name}</strong>
                        </Row>
                        
                        <Row>
                            <p>{driver.team[0].name}</p>
                        </Row>
                        
                        <Row>
                            <Driver to={`/driver/${driver._id}`}>Acessar</Driver>
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