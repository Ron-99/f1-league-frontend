import React from "react";
import {Container} from "../LoginPage/style";
import Form from "./components/Form";
import api from '../../services/api';
import { useAlert } from 'react-alert'

const RegisterPage = () => {
  const alert = useAlert();

  const handleRegister = async(driver, user) => {
    try{
      const {data: {data: {id}}} = await api.post('/driver', driver);
      user.driver_id = id
      console.log(user);
      const {data} = await api.post('/user', user)
      alert.success(data.message)

    }catch(e){
      alert.error(e.response.data[0].message)
    }
  }

  return(
    <Container>
      <Form register={handleRegister}>

      </Form>
    </Container>
  )
}

export default RegisterPage;
