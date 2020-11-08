import React from 'react';
import api from '../../services/api';

import {Container} from './style';
import Form from './components/Form'

const LoginPage = () => {

    const login = async (form) => {
        try{
            console.log(form)
            const {data} = await api.post(`/user/login`, form);
            console.log(data);
            if(data){
                localStorage.setItem('authenticate', true);
                localStorage.setItem('name', data.name);
                localStorage.setItem('email', data.email);
                localStorage.setItem('role', data.role);
                window.location.reload();
                window.location.href = '/'
            }

            
        }catch(err){
            console.error(err);
        }
    }

    return(
        <Container>
            <Form login={login}/>
        </Container>
        
    )
}

export default LoginPage;