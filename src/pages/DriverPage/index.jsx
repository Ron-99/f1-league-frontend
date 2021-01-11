import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from "react-router-dom";
import { Profile, ProfileHeader, ProfileBody } from './style';

import ProfilePicture from './components/ProfilePicture';
import ProfileInfo from './components/ProfileInfo';
import ProfilePenalty from './components/ProfilePenalty';
import RecentResults from './components/RecentResults';
import ProfileTeams from './components/ProfileTeams';

const DriverPage = () => {
    const [driver, setDriver] = useState({});
    const [team, setTeam] = useState({});
    const [teams, setTeams] = useState([]);
    const [trophys, setTrophys] = useState({});
    const [penalty, setPenalty] = useState({});
    const [penalties, setPenalties] = useState([]);
    const [races, setRaces] = useState([]);
    const [page, setPage] = useState(0);
    const { id }= useParams();

    useEffect(()=>{
        loadDriver();
        loadTrophys();
        loadRaces();
        loadPenalties();
    },[page]);

    const loadDriver = async() => {
        try{
            const {data} = await api.get(`/driver/${id}`);
            setDriver(data);z
            setTeam(data.team[0]);
            setTeams(data.team);
            setPenalty(data.penalty);
            setPage(data.penalty.level);
        }catch(e){
            console.error(e);
        }
    }

    const loadTrophys = async() =>{
        try{
            const {data} = await api.get(`/driver/wins/${id}`);
            setTrophys(data);
        }catch(e){
            console.error(e);
        }
    }

    const loadPenalties = async() =>{
        try{
            const {data} = await api.get(`/penalty`);
            setPenalties(data);
        }catch(e){
            console.error(e);
        }
    }

    const loadRaces = async() => {
        try{
            const {data} = await api.get(`/driver/races/${id}`);
            setRaces(data);
        }catch(e){
            console.error(e);
        }
    }

    const updatePenalty = async(level) =>{
        try{
            await api.put(`/driver/penalty/${id}?level=${level}`)
        }catch(e){
            console.error(e);
        }
    }

    const minusPenalty = () =>{
        if(page === 0) return;

        const pageNumber = page - 1;
        setPage(pageNumber);
        updatePenalty(pageNumber);  
    }

    const plusPenalty = () => {
        if(page === penalties.length - 1) return;

        const pageNumber = page + 1;
        setPage(pageNumber);
        updatePenalty(pageNumber);
    }

    return(
        <Profile>
            <ProfileHeader>
                <ProfilePicture/>
                <ProfileInfo driver={driver} trophys={trophys} team={team}/>
                <ProfilePenalty penalty={penalty} minusPenalty={minusPenalty} plusPenalty={plusPenalty} /> 
            </ProfileHeader>

            <ProfileBody>
                <RecentResults races={races}/>
                <ProfileTeams teams={teams} team={team}/>
            </ProfileBody>
        </Profile>        
    )

}

export default DriverPage;