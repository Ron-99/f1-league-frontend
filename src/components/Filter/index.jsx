import React, { useEffect, useRef } from 'react';

import useInput from '../Input';
import { Filtro, Filtros } from './style';

const Filter = ({ranks, seasons, loadSeason, setRank, setSeason, setPage, isRaces}) => {

    const [rank, rankInput, , rankRef] = useInput({type: 'select', id: 'rank', name: 'rank', data: ranks}) 
    const seasonRef = useRef('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        await handleChangeRank();
        // eslint-disable-next-line no-use-before-define
    }, [handleChangeRank, rank])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChangeRank = async () => {
        if(rankRef.current){
            setRank(rankRef.current.value || '');

            if(isRaces)
                setPage(0)
            
            await loadSeason(rank);
        }
    }

    const handleChangeSeason = async () => {
        setSeason(parseInt(seasonRef.current.value));
    }
    
    return(
        <Filtros>
            <Filtro>
                <label htmlFor="rank">Liga:</label>
                {rankInput}
            </Filtro>

            <Filtro>
                <label htmlFor="season">Temporada</label>
                <select ref={seasonRef} name="season" id="season" onChange={handleChangeSeason}>
                {
                    seasons.map(season => (
                        <option key={season.id} data-id={season.id} value={season.number}>{season.number}</option>
                    ))
                }
                </select>
            </Filtro>
        </Filtros>
    )
}

export default Filter;