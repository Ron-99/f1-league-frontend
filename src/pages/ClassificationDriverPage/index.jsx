import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Filter from '../../components/Filter';
import Table from '../../components/Table';

const ClassificationDriverPage = () => {

    const [classification, setClassification] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [rank, setRank] = useState('');
    const [seasons, setSeasons] = useState([]);
    const [season, setSeason] = useState('');

    useEffect(() => {
        loadRanks();
        loadClassification();
    }, [rank, season]);

    const loadClassification = async () => {
        
        try{
            
            if(rank && season){
                const {data} = await api.get(`/classification/drivers-points?rank=${rank}&season=${season}`);
                setClassification(data);
            }
        }catch(err){
            console.error(err);
        }
    }

    const loadRanks = async () => {
        try{
            const {data} = await api.get(`/rank`);

            if(!rank)
                setRank(data[0].name);

            setRanks(data);

            if(!rank)
                loadSeasons(data[0]._id);
        }catch(err){
            console.error(err);
        }
    }

    const loadSeasons = async (idRank) => {
        try{
            const {data} = await api.get(`/rank/season/${idRank}`)

            setSeasons(data);
            setSeason(data[0].number.toString());
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
            <Filter ranks={ranks} seasons={seasons} setRank={setRank} loadSeason={loadSeasons} setSeason={setSeason}/>
            <Table data={classification} isDriver={true}/>
        </>
    )

}

export default ClassificationDriverPage;