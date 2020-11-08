import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import Search from '../../components/Search';
import Cards from '../../components/Cards';

const DriversPage = () => {

    const [param, setParam] = useState("");
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        loadDrivers();
    }, [param]);

    const loadDrivers = async() => {
        try{
            const response = await api.get(`/driver/drivers?name=${param}`);
            setDrivers(response.data);
        }catch(error){
            console.error(error);
        }
    }

    return(
        <>
            <Search param={param} setParam={setParam} placeholder="Procurar piloto..."/>
            <Cards drivers={drivers} isDrivers={true}/>
        </>
    )
}

export default DriversPage;