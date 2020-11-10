import React, { useEffect, useState } from 'react';

import DateFilter from './components/DateFilter';
import Table from './components/Table'
import Modal from '../../components/Modal';
import SecondModal from '../../components/Modal/secondModal'

import api from '../../services/api';
import {isAuthenticated} from '../../services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import {New} from './style';

import * as moment from 'moment';
import 'moment/locale/pt-br';
import Filter from '../../components/Filter';
import Track from './components/Track';

const ClassificationPage = () => {

    const [classification, setClassification] = useState([]);
    const [dates, setDates] = useState([]);
    const [dateLabel, setDateLabel] = useState('');
    const [date, setDate] = useState('');
    const [ranks, setRanks] = useState([]);
    const [rank, setRank] = useState('');
    const [seasons, setSeasons] = useState([]);
    const [season, setSeason] = useState('');
    const [tracks, setTracks] = useState([]);
    const [track, setTrack] = useState('');
    const [trackLabel, setTrackLabel] = useState('');
    const [drivers, setDrivers] = useState([]);
    const [driver, setDriver] = useState({});
    const [rating, setRating] = useState({});
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [dateModal,setDateModal] = useState('');

    useEffect(() => {
        loadDates();
        loadRanks();
        loadTracks();
        loadDrivers();
        loadClassification();
    },[date,season, rank])

    const loadClassification = async () => {
        moment.locale('pt-br');
        
        try{
            
            if(date && rank && season){
                const {data} = await api.get(`/classification?date=${date}&rank=${rank}&season=${season}`);
                setClassification(data);
                setTrackLabel(data[0].track.name);
            }
        }catch(err){
            console.error(err);
        }
    }

    const loadDates = async () => {
        moment.locale('pt-br');
        try{
            const {data} = await api.get(`/classification/dates?rank=F1`);
            setDates(data);

            if(!date)
                setDateLabel(moment(data[0].substr(0, 10)).format('LL'));
            else
                setDateLabel(moment(date.substr(0, 10)).format('LL'))

            if(!date)
                setDate(data[0].substr(0, 10));
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

    const loadTracks = async () => {
        try{
            const {data} = await api.get(`/track`);
            setTracks(data);
        }catch(err){
            console.error(err);
        }
    }

    const loadDrivers = async () => {
        try{
            const {data} = await api.get(`/driver`);
            setDrivers(data);
        }catch(err){
            console.error(err)
        }
    }

    const createClassification = async (data) =>{
        try{
            await api.post(`/classification`, data);
            await loadClassification();
        }catch(err){
            console.error(err);
        }
    }

    const updateClassification = async (id, data) =>{
        try{
            await api.put(`/classification/${id}`, data);
            await loadClassification();
            console.log('aqui')
        }catch(err){
            console.error(err);
        }
    }

    const deleteClassification = async (id) => {
        try{
            await api.delete(`/classification/${id}`);
            await loadClassification();
        }catch(e){
            console.error(e);
        }
    }

    return (
        <>
            <Modal show={show} setShow={setShow} tracks={tracks} setTrack={setTrack} setDate={setDateModal} setShowSecond={setShowSecond}/>
            <SecondModal title={"Cadastrar Classificação"} show={showSecond} setShow={setShowSecond} drivers={drivers} track={track} date={dateModal} createClassification={createClassification}  rating={rating} driverEdit={driver} isEdit={edit} />
            <DateFilter setDates={setDates} dates={dates} setDate={setDate} date={dateLabel} setDateLabel={setDateLabel}/>
            <Track track={trackLabel}/>
            <Filter ranks={ranks} seasons={seasons} setRank={setRank} loadSeason={loadSeasons} setSeason={setSeason} />

            {
                isAuthenticated() ?
                <New onClick={() => {setShow(true); setEdit(false);}}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </New>
                :
                ""
            }
            
            <Table load={classification} updateClassification={updateClassification} drivers={drivers} deleteClassification={deleteClassification} setShow={setShowSecond} setRating={setRating} setDriver={setDriver} setEdit={setEdit}/>
        </>
    )
}

export default ClassificationPage;