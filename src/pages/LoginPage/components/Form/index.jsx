import React from 'react';

import useInput from '../../../../components/Input';

import { FormStyle, FormHeader, FormBody, Fields, Field, FormFooter } from './style';

const Form = ({login}) => {

    const [email, emailInput] = useInput({type: 'email', id: 'email', name: 'email'});
    const [password, passwordInput] = useInput({type: 'password', id: 'password', name: 'password'})

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        }

        login(data)
    }

    return (
        <FormStyle>
            <FormHeader>
                <h1>Entrar</h1>
            </FormHeader>
            <FormBody>
                <Fields>
                    <Field>
                        <label htmlFor="email">Email</label>
                        {emailInput}
                    </Field>
                </Fields>

                <Fields>
                    <Field>
                        <label htmlFor="password">Senha</label>
                        {passwordInput}
                    </Field>
                </Fields>
            </FormBody>
            <FormFooter>
                <button onClick={handleLogin}>Entrar</button>
            </FormFooter>
        </FormStyle>
    )

}

export default Form;