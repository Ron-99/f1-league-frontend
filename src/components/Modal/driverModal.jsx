import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataListInput from "react-datalist-input";
import { useAlert } from 'react-alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api';

import {getId} from '../../services/auth';

import useInput from '../Input'

import { Fields, ModalBody, ModalContent, ModalFooter, ModalForm, ModalHeader, Field, New, Minus, Button } from './style';

const DriverModal = ({ show, setShow, ranks, teams, drivers, title, isEdit, loadTeams }) => {

    const [name, nameInput, setName, refName] = useInput({ type: 'text', id: 'name', name: 'name' });
    const [rank, rankInput, setRank] = useInput({ type: 'select', id: 'rank', name: 'rank', data: ranks });
    const [equipe, equipeInput, setEquipe] = useInput({ type: 'text', name: 'team', id: 'team' });
    const [reserve, reserveInput, setReserve] = useInput({ type: 'checkbox', name: 'reserve', id: 'reserve'})
    const [equipeId, setEquipeId] = useState('');
    const [team, setTeam] = useState('');
    const [driver, setDriver] = useState('');
    const [newTeam, setNewTeam] = useState(false);
    const alert = useAlert();

    useEffect(() => {
        handleInput();
        console.log(drivers);
    }, [show])

    const handleInput = () => {
        if (refName.current !== null) {
            refName.current.focus();
        }
    }

    const saveTeam = async () => {
        const { data, status } = await api.post('/team', { name: equipe, created_by: getId(), updated_by: getId() });
        setEquipeId(data.data.id);
        if (status === 201) {
            alert.success(data.message);
            setNewTeam(false);
            loadTeams();
            setEquipe('');
        }
    }

    const save = async () => {
        if (name !== '' && (equipeId !== '' || team !== '')) {       
            
            const {data:season} = await api.get(`/season/rank/${rank || rankInput.props.children[0].key}`);
            console.log(equipeId || team.key)
            const {data: data2} = await api.post(
                `/driver/${driver.key}/team/${equipeId || team.key}/season/${season[0].id}?reserve=${reserve}`, 
                {
                    created_by: getId(),
                    updated_by: getId()
                }
            )
            console.log(data2.data)
            clearFields();
            
        } else {
            alert.show('Por favor preencha todos os campos');
        }
    }

    const onSelectTeams = useCallback((selectedItem) => {
        
        setTeam(selectedItem);
    }, []);

    const onSelectDriver = useCallback((selectedItem) => {
        console.log(selectedItem);
        setDriver(selectedItem);
    }, []);

    const itemsTeams = useMemo(
        () =>
            teams.map((team) => ({
                label: team.name,
                key: team.id, 
                ...team,
            })),
        [teams]
    );

    const itemsDrivers = useMemo(
        () =>
            drivers.map((driver) => ({
                label: driver.name,
                key: driver.id, 
                ...driver,
            })),
        [drivers]
    );

    const clearFields = () => {
        setTeam('');
        setName('');
        setRank('');
        setEquipe('');
    }

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
                                        <label htmlFor="name">Nome</label>
                                        <DataListInput
                                                    placeholder="Selecione o piloto..."
                                                    items={itemsDrivers}
                                                    onSelect={onSelectDriver}

                                                />
                                    </Field>

                                    <Field>
                                        <label htmlFor="team">Equipe</label>
                                        {
                                            !newTeam
                                                ?
                                                <DataListInput
                                                    placeholder="Selecione a equipe..."
                                                    items={itemsTeams}
                                                    onSelect={onSelectTeams}

                                                />
                                                :
                                                equipeInput
                                        }


                                    </Field>

                                    <Button>
                                        {
                                            !newTeam ?
                                                <New onClick={() => { setNewTeam(true) }}>
                                                    <FontAwesomeIcon icon={faPlus} size="2x" />
                                                </New>
                                                :
                                                <>
                                                    <New onClick={saveTeam}>
                                                        <FontAwesomeIcon icon={faCheck} size="2x" />
                                                    </New>
                                                    <Minus onClick={() => { setNewTeam(false) }}>
                                                        <FontAwesomeIcon icon={faMinus} size="2x" />
                                                    </Minus>
                                                </>

                                        }

                                    </Button>

                                    <Field>
                                        <label htmlFor="rank">Liga</label>
                                        {rankInput}
                                    </Field>
                                    <Field>
                                        <label htmlFor="reserve">Reserva</label>
                                        {reserveInput}
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

export default DriverModal;