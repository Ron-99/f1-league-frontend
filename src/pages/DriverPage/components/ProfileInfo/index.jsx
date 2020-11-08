import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { Data, Medals, Medal, ProfileInfoStyle } from './style';

const ProfileInfo = ({ driver, trophys, team }) => (
    <>
        <ProfileInfoStyle>
            <Data>
                <h1>{driver.name}</h1>
                <h3>Piloto {team.name}</h3>
            </Data>
            <Medals>
                <Medal>
                    <span>{trophys.first}</span>
                    <FontAwesomeIcon icon={faMedal} style={{ color: '#FFEB3B' }} />
                </Medal>

                <Medal>
                    <span>{trophys.second}</span>
                    <FontAwesomeIcon icon={faMedal} style={{ color: '#747D8C' }} />
                </Medal>

                <Medal>
                    <span>{trophys.third}</span>
                    <FontAwesomeIcon icon={faMedal} style={{ color: '#FF7F50' }} />
                </Medal>
            </Medals>
        </ProfileInfoStyle>
    </>
);

export default ProfileInfo;