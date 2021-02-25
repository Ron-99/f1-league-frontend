import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Filter from '../../components/Filter';
import Table from '../../components/Table';

const ClassificationTeamPage = () => {

    const [classification, setClassification] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [rank, setRank] = useState('');
    const [seasons, setSeasons] = useState([]);
    const [season, setSeason] = useState(null);

    useEffect(() => {
        loadRanks();
        loadClassification();
    }, [rank, season]);

    const loadClassification = async () => {
        
        try{
            
            if(rank && season){
                const {data} = await api.get(`/classification/teams-points?rank=${rank}&season=${season}`);
                setClassification(data);
            }
        }catch(err){
            console.error(err);
        }
    }

    const loadRanks = async () => {
        try {
            if(rank === '' && ranks.length === 0){
                const { data } = await api.get(`/rank`);
                setRank(data[0].name);
                setRanks(data);
                
                loadSeasons(data[0].id);
            }

            
        } catch (err) {
            console.error(err);
        }
    }

    const loadSeasons = async (idRank) => {
        try {
            if (idRank !== '') {
                const { data } = await api.get(`/season/rank/${idRank}`)

                setSeasons(data);

                if(season === null)
                    setSeason(data[0].number.toString());
            }



        } catch (err) {
            console.error(err);
        }
    }

    return(
        <>
            <Filter ranks={ranks} seasons={seasons} setRank={setRank} loadSeason={loadSeasons} setSeason={setSeason}/>
            <Table data={classification} isDriver={false}/>
        </>
    )

}

export default ClassificationTeamPage;