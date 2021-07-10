import React, { useEffect, useState } from 'react';

import DateFilter from './components/DateFilter';


import Table from './components/Table'
import Modal from '../../components/Modal';
import SecondModal from '../../components/Modal/secondModal'
import { useAlert } from 'react-alert'

import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { New } from './style';

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
    const [season, setSeason] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [track, setTrack] = useState('');
    const [trackLabel, setTrackLabel] = useState('');
    const [drivers, setDrivers] = useState([]);
    const [driver, setDriver] = useState({});
    const [rating, setRating] = useState({});
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [page, setPage] = useState(0);
    const [dateModal, setDateModal] = useState('');

    const alert = useAlert();

    useEffect(async () => {
        await loadRanks();
        await loadDates();
        await loadTracks();
        await loadDrivers();
        await loadClassification();
    }, [rank, season, date])

    const loadClassification = async () => {
        moment.locale('pt-br');

        try {
            if (date !== '' && rank !== '' && season !== '') {

                const { data } = await api.get(`/classification?date=${date}&rank=${rank}&season=${season}`);
                
                setClassification(data);
                
                if (data.length !== 0) {
                    setTrackLabel(data[0].tracks.name);
                }

            }
        } catch (err) {
            console.error(err);
        }
    }

    const loadDates = async () => {
        moment.locale('pt-br');
        try {
            
            if (rank !== '' && season !== '') {

                const { data } = await api.get(`/classification/dates?rank=${rank}&season=${season}`);
                setDates(data);
                
                setDateLabel(moment(data[page].date.substr(0, 10)).format('LL') || '');
                
            
                setDate(data[page].date.substr(0, 10) || '');
            }

        } catch (err) {
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

    const loadTracks = async () => {
        try {
            const { data } = await api.get(`/track`);
            setTracks(data);
     
        } catch (err) {
            console.error(err);
        }
    }

    const loadDrivers = async () => {
        try {
            const { data } = await api.get(`/driver?all=true`);
            setDrivers(data);
        } catch (err) {
            console.error(err)
        }
    }

    const createClassification = async (classi) => {
        try {
            const { data, status } = await api.post(`/classification`, classi);
            if (status === 201)
                alert.success(data.message);

            await loadClassification();
        } catch (err) {
            console.error(err);
        }
    }

    const updateClassification = async (id, classi) => {
        try {
            const { data, status } = await api.put(`/classification/${id}`, classi);

            if (status === 200)
                alert.success(data.message);

            await loadClassification();
        } catch (err) {
            console.error(err);
        }
    }

    const deleteClassification = async (id) => {
        try {
            const { data, status } = await api.delete(`/classification/${id}`);
            if (status === 200)
                alert.success(data.message);

            await loadClassification();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Modal show={show} setShow={setShow} tracks={tracks} setTrack={setTrack} setDate={setDateModal} setShowSecond={setShowSecond} />
            <SecondModal title={"Cadastrar Classificação"} show={showSecond} setShow={setShowSecond} drivers={drivers} track={track} date={dateModal} createClassification={createClassification} rating={rating} driverEdit={driver} isEdit={edit} />

            <DateFilter date={date} setPage={setPage} page={page} date={date} dateLabel={dateLabel} dates={dates} setDate={setDate} setDateLabel={setDateLabel} setDates={setDates} />
            <Track track={trackLabel} />
            <Filter isRaces={true} setPage={setPage} ranks={ranks} seasons={seasons} setRank={setRank} loadSeason={loadSeasons} setSeason={setSeason} />

            {
                isAuthenticated() ?
                    <New onClick={() => { setShow(true); setEdit(false); }}>
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                    </New>
                    :
                    ""
            }

            <Table load={classification} updateClassification={updateClassification} drivers={drivers} deleteClassification={deleteClassification} setShow={setShowSecond} setRating={setRating} setDriver={setDriver} setEdit={setEdit} />
        </>
    )
}

export default ClassificationPage;
