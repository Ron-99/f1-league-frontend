import React from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';

import {Overflow, RecentResultsTable, BestLap, Line, TitleProfile} from './style';

const RecentResults = ({ races }) => {
    moment.locale('pt-br');
    return (
        <>
            <TitleProfile>Resultados Recentes</TitleProfile>
            <Overflow>
                <RecentResultsTable>
                    <tbody>
                        {
                            races.map(race => (
                                <Line key={race._id} data-id={race._id} position={race.position}>
                                    <td>{race.position}</td>
                                    <BestLap bestLap={race.bestLap}>{race.bestTime}</BestLap>
                                    <td>{race.trialTime}</td>
                                    <td>{race.points}</td>
                                    <td>{race.track.name}</td>
                                    <td>{moment(race.date).format('LL')}</td>
                                    <td>{race.rank}</td>
                                </Line>
                            ))
                        }
                    </tbody>
                </RecentResultsTable>
            </Overflow>
        </>
    )
}

export default RecentResults;