import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import {isAuthenticated} from '../../../../services/auth';
import { Penalty, ProfilePenaltyStyle } from './style';

const ProfilePenalty = ({ penalty, minusPenalty, plusPenalty }) => (
    <ProfilePenaltyStyle>
        {
            isAuthenticated() ? <FontAwesomeIcon className="arrow" icon={faMinus} onClick={minusPenalty} /> : ""
        }
        
        <Penalty title={penalty.description} style={{ borderColor: penalty.color }}>
            <h3>{penalty.level}</h3>
        </Penalty>
        {
            isAuthenticated() ? <FontAwesomeIcon className="arrow" icon={faPlus} onClick={plusPenalty} /> : ""
        }
    </ProfilePenaltyStyle>
)

export default ProfilePenalty;