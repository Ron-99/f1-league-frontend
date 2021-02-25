import React from 'react';
import { CurrentTeam, PastTeam, TitleProfile, TeamsTable } from './style';

const ProfileTeams = ({teams, team}) => (
    <>
        <CurrentTeam>
            <TitleProfile>Equipe Atual</TitleProfile>
            <TeamsTable>
                <tbody>
                    <tr>
                        <td style={{textAlign: 'left', paddingLeft: '1%'}}>{team}</td>
                    </tr>
                </tbody>
            </TeamsTable>
        </CurrentTeam>

        <PastTeam>
            <TitleProfile>Equipes anteriores</TitleProfile>
            <TeamsTable>
                <tbody>
                    {
                        teams.map(team => (
                            <tr key={team.id}>
                                <td style={{textAlign: 'left', paddingLeft: '1%'}}>{team.name}</td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </TeamsTable>
        </PastTeam>
    </>
)

export default ProfileTeams;