import {Field, Fields, FormBody, FormHeader, FormStyle} from "./style";
import React from "react";
import useInput from "../../../../components/Input";
import {FormFooter} from "../../../LoginPage/components/Form/style";

const Form = ({register}) => {
  const [email, emailInput] = useInput({type: 'email', id: 'email', name: 'email', placeholder: 'Digite seu e-mail'});
  const [nick, nickInput] = useInput({type: 'text', id: 'nick', name: 'nick', placeholder: 'Digite como deseja ser chamado'});
  const [name, nameInput] = useInput({type: 'text', id: 'name', name: 'name', placeholder: 'Digite o nome completo'});
  const [number, numberInput] = useInput({type: 'number', id: 'number', name: 'number', className: 'number', placeholder: 'Digite o seu número', max: 2});
  const [phone, phoneInput] = useInput({type: 'mask', mask: '(99)99999-9999', name: 'phone', id: 'phone'});
  const [password, passwordInput] = useInput({type: 'password', id: 'password', name: 'password', placeholder: 'Digite sua senha'});
  const [confirmPassword, confirmPasswordInput] = useInput({type: 'password', id: 'confirmPassword', name: 'confirmPassword', placeholder: 'Digite sua senha novamente'})


  const handleRegister = () => {
      const driver = {
        name: nick,
        number,
        email
      }
      const user = {
        name,
        email,
        role: 'user',
        phone
      }
      register(driver, user)
  }

  return(
    <FormStyle>
      <FormHeader>
        <h1>Formulário de Inscrição</h1>
      </FormHeader>
      <FormBody>
        <Fields>
          <Field>
            <label htmlFor="email">Email</label>
            {emailInput}
          </Field>
          <Field>
            <label htmlFor="nome">Nome</label>
            {nameInput}
          </Field>
        </Fields>
        <Fields>
          <Field>
            <label htmlFor="nick">Nickname</label>
            {nickInput}
          </Field>

          <Field width='50%'>
            <label htmlFor="number">Nº</label>
            {numberInput}
          </Field>

          <Field>
            <label htmlFor="phone">Celular</label>
            {phoneInput}
          </Field>
        </Fields>
      </FormBody>
      <FormFooter>
        <button onClick={handleRegister}>Inscrever-se</button>
      </FormFooter>
    </FormStyle>
  )
}

export default Form;
