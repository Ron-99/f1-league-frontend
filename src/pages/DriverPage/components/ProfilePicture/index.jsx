import React from 'react';

import {Image, NoImage} from './style';

const ProfilePicture = ({picture}) => (
    <>
        {
            picture ?
                <Image src={picture}></Image>
            :
                <NoImage>?</NoImage>
        }
    </>
);

export default ProfilePicture;