import React from 'react';

import {List, Driver} from './style';

const Cards = ({ drivers, teams, isDrivers }) => (
    <List>
        {
            isDrivers ?
                drivers.map(driver => (
                    <article key={driver._id}>
                        <strong>{driver.name}</strong>
                        <p>{driver.team[0].name}</p>

                        <Driver to={`/driver/${driver._id}`}>Acessar</Driver>
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