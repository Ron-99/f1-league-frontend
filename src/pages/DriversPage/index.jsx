import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import {isAuthenticated} from '../../services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { New } from '../ClassificationPage/style';

import Search from '../../components/Search';
import Cards from '../../components/Cards';
import DriverModal from '../../components/Modal/driverModal'

const DriversPage = () => {

    const [param, setParam] = useState("");
    const [drivers, setDrivers] = useState([]);
    const [show, setShow] = useState(false);
    const [teams, setTeams] = useState([]);
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        loadDrivers();
    }, [param]);

    const loadDrivers = async() => {
        try{
            const {data} = await api.get(`/driver?name=${param}`);
            setDrivers(data);
        }catch(error){
            console.error(error);
        }
    }

    const loadTeams = async() => {
        try{
            const {data} = await api.get(`/team`);
            setTeams(data);
        }catch(error){
            console.error(error);
        }
    }

    const loadRanks = async() => {
        try{
            const {data} = await api.get(`/rank`);
            setRanks(data);
        }catch(error){
            console.error(error);
        }
    }

    const newDriver = async() => {
        await loadTeams();
        await loadRanks();
        setShow(true);
    }

    return(
        <>
            <DriverModal loadTeams={loadTeams} drivers={drivers} isEdit={false} show={show} setShow={setShow} title={"Cadastrar piloto"} teams={teams} ranks={ranks} />
            <Search param={param} setParam={setParam} placeholder="Procurar piloto..."/>
            <Cards drivers={drivers} isDrivers={true}/>
            {
                isAuthenticated() ?
                <New onClick={newDriver}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </New>
                :
                ""
            }
        </>
    )
}

export default DriversPage;