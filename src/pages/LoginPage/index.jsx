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
            console.log(form)
            const {data} = await api.post(`/user/login`, form);
            console.log(data);
            if(data){
                login(data.token)
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