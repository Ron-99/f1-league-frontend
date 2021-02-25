import React, {useState, useMemo, useCallback, useEffect} from 'react';
import DataListInput from "react-datalist-input";

import useInput from '../Input'
import { useAlert } from 'react-alert'

import {Fields, ModalBody, ModalContent, ModalFooter, ModalForm, ModalHeader, Field} from './style';

const SecondModal = ({show, setShow, title, drivers, track, date, createClassification, rating, driverEdit, isEdit, updateClassification}) => {

    const [position, inputPosition, setPosition, refPosition] = useInput({type: 'number', id: 'position', name: 'position', min: '0', focus: true});
    const [points, inputPoints, setPoints] = useInput({type: 'number', id: 'points', name: 'points', min: '0', max: '26'});
    const [bestTime, inputBestTime, setBestTime] = useInput({type: 'mask', id: 'bestTime', name: 'bestTime', mask: '9:99,999'});
    const [trialTime, inputTrialTime, setTrialTime] = useInput({type: 'mask', id: 'trialTime', name: 'trialTime', mask: '9:99:99,999'});
    const [driver, setDriver] = useState('');
    const alert = useAlert();

    useEffect(() => {
        load();
    }, [show])

    const load = () =>{
        if(refPosition.current !== null)
            refPosition.current.focus()

        if(isEdit){

            setPosition(rating.position);
            setPoints(rating.points);
            setBestTime(rating.best_time);
            setTrialTime(rating.trial_time);
            setDriver(driverEdit.id);
        }        
    }

    const clearFields = () => {
        setPosition('');
        setPoints('');
        setBestTime('');
        setTrialTime('');
        setDriver('');
    }

    const save = async () => {
        
        if(position !== '' && points !== '' && driver !== ''){
            const data = {
                position: parseInt(position),
                track_id: track || rating.tracks.id,
                date: date || rating.date,
                points: parseInt(points),
                best_time: bestTime || "-",
                trial_time: trialTime ? trialTime : bestTime ? "NC" : "DNS",
                driver_id: driver.key || driver.id,
                created_by: 1,
                updated_by: 1
            }
            
            if(!isEdit)
                await createClassification(data);
            else
                await updateClassification(rating.id, data);
        }else{
            alert.show('Por favor preencha todos os campos');
        }
    }


    const onSelect = useCallback((selectedItem) => {
        setDriver(selectedItem);
    }, []);

    const items = useMemo(
        () =>
            drivers.map((driver) => ({
            label: driver.name,
            key: driver.id,
            ...driver,
            })),
        [drivers]
    );

    const close = () => {
        setShow(false); 
        clearFields();
    }

    return (
        <>  
            {
                show ?
                    <ModalForm>
                        <ModalContent>
                            <ModalHeader>
                                <span className="close" onClick={close}>&times;</span>
                                <h2>{title}</h2>
                            </ModalHeader>
                            
                            <ModalBody>
                                <Fields>
                                    <Field>
                                        <label htmlFor="position">Posição</label>
                                        {inputPosition}
                                    </Field>
                                    
                                    <Field>
                                        <label htmlFor="driver">Piloto</label>
                                        <DataListInput
                                            placeholder="Selecione o piloto..."
                                            items={items}
                                            onSelect={onSelect}
                                            initialValue={driverEdit.name}
                                        />
                                    </Field>

                                    <Field>
                                        <label htmlFor="points">Pontos</label>
                                        {inputPoints}
                                    </Field>
                                </Fields>

                                <Fields>
                                    <Field>
                                        <label htmlFor="bestTime">Melhor Tempo</label>
                                        {inputBestTime}
                                    </Field>

                                    <Field>
                                        <label htmlFor="trialTime">Tempo de Prova</label>
                                        {inputTrialTime}
                                    </Field>
                                </Fields>
                            </ModalBody>

                            <ModalFooter>
                                <button className="next" onClick={save}>{isEdit ? 'Atualizar' : 'Próximo'}</button>
                            </ModalFooter>
                        </ModalContent>
                    </ModalForm>
                :
                    ""
            }
        </>
    )
}

export default SecondModal;