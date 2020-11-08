import React from 'react';

import {SearchStyle} from './style';

const Search = ({param, setParam, placeholder}) => (
    <SearchStyle>
        <input type="text" value={param} onChange={e => setParam(e.target.value)} placeholder={placeholder} />
    </SearchStyle>
)

export default Search;