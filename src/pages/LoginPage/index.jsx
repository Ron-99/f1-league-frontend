import React from 'react';
import api from '../../services/api';
import {login} from '../../services/auth';
import { useHistory } from "react-router-dom";

import {Container} from './style';
import Form from './components/Form'

const LoginPage = () => {

    const history = useHistory();

    const entrar = async (form) => {
        try{
            const {data} = await api.post(`/user/login`, form);
            if(data){
                login(data)
                history.push("/");
                window.location.reload();
            }
        }catch(err){
            console.error(err);
        }
    }

    return(
        <Container>
            <Form login={entrar}/>
        </Container>
        
    )
}

export default LoginPage;