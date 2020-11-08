import React from 'react';

import useInput from '../Input'

import {Fields, ModalBody, ModalContent, ModalFooter, ModalForm, ModalHeader, Field} from './style';

const Modal = ({show, setShow, tracks, setTrack, setDate, setShowSecond}) => {

    const [date, dateInput] = useInput({type: "date", id:"date", name:"date"});
    const [track, trackInput] = useInput({type: 'select', id: 'track', name: 'track', data: tracks})    

    const close = () => {
        setShow(false); 
    }
    const next = () => {
        close();
        
        if(track)
            setTrack(track);
        else
            setTrack(trackInput.props.children[0].key)
            
        setDate(date);
        setShowSecond(true);
    }
    return(
        <>
            {show ? 
                <ModalForm>
                    <ModalContent>
                        <ModalHeader>
                            <span className="close" onClick={close}>&times;</span>
                            <h2>Cadastrar Classificação</h2>
                        </ModalHeader>
                        <ModalBody>
                            <Fields>
                                <Field>
                                    <label htmlFor="track">Pista</label>
                                    {trackInput}
                                </Field>
                                
                                <Field>
                                    <label htmlFor="date">Data</label>
                                    {dateInput}
                                </Field>
                            </Fields>
                        </ModalBody>
                        <ModalFooter>
                            <button className="next" disabled={!date} onClick={next}>Próximo</button>
                        </ModalFooter>
                    </ModalContent>
                </ModalForm>
            : 
            ""}
        </>        
    )
}

export default Modal;