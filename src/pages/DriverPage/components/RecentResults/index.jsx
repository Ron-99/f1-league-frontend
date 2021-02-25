import React from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';

import {Overflow, RecentResultsTable, BestLap, Line, TitleProfile} from './style';

const RecentResults = ({ races }) => {
    moment.locale('pt-br');
    return (
        <>
            <TitleProfile>Resultados Recentes</TitleProfile>
            
                <RecentResultsTable>
                    <tbody>
                        {
                            races.map(race => (
                                <Line key={race.id} data-id={race.id} position={race.position}>
                                    <td><span>Posição</span>{race.position}</td>
                                    <BestLap bestLap={race.best_lap === 1}><span>Melhor Volta</span>{race.best_time}</BestLap>
                                    <td><span>Tempo de Prova</span>{race.trial_time}</td>
                                    <td><span>Pontos</span>{race.points}</td>
                                    <td><span>Pista</span>{race.track}</td>
                                    <td><span>Data</span>{moment(race.date).format('LL')}</td>
                                    <td><span>Liga</span>{race.rank}</td>
                                </Line>
                            ))
                        }
                    </tbody>
                </RecentResultsTable>
        </>
    )
}

export default RecentResults;