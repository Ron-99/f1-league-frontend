import React, { useRef } from 'react';
import { Filtro, Filtros } from './style';


const Filter = ({ranks, seasons, loadSeason, setRank, setSeason}) => {

    const rankRef = useRef('');
    const seasonRef = useRef('');

    const handleChangeRank = async () => {
        const index = rankRef.current.selectedIndex;
        const optionElement = rankRef.current.childNodes[index];
        const rankId = optionElement.getAttribute('data-id');

        setRank(rankRef.current.value);
        await loadSeason(rankId);
    }

    const handleChangeSeason = async () => {
        setSeason(parseInt(seasonRef.current.value));
    }
    
    return(
        <Filtros>
            <Filtro>
                <label htmlFor="rank">Liga:</label>
                <select ref={rankRef} name="rank" id="rank" onChange={handleChangeRank}>
                    {
                        ranks.map(rank => (
                            <option key={rank._id} data-id={rank._id} value={rank.name}>{rank.name}</option>
                        ))
                    }
                </select>
            </Filtro>

            <Filtro>
                <label htmlFor="season">Temporada</label>
                <select ref={seasonRef} name="season" id="season" onChange={handleChangeSeason}>
                {
                    seasons.map(season => (
                        <option key={season._id} data-id={season._id} value={season.number}>{season.number}</option>
                    ))
                }
            </select>
            </Filtro>
        </Filtros>
    )
}

export default Filter;