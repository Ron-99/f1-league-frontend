import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataListInput from "react-datalist-input";
import { useAlert } from 'react-alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api';

import useInput from '../Input'

import { Fields, ModalBody, ModalContent, ModalFooter, ModalForm, ModalHeader, Field, New, Minus, Button } from './style';

const DriverModal = ({ show, setShow, ranks, teams, title, isEdit, loadTeams }) => {

    const [name, nameInput, setName, refName] = useInput({ type: 'text', id: 'name', name: 'name' });
    const [rank, rankInput, setRank] = useInput({ type: 'select', id: 'rank', name: 'rank', data: ranks });
    const [equipe, equipeInput, setEquipe] = useInput({ type: 'text', name: 'team', id: 'team' });
    const [reserve, reserveInput, setReserve] = useInput({ type: 'checkbox', name: 'reserve', id: 'reserve'})
    const [equipeId, setEquipeId] = useState('');
    const [team, setTeam] = useState('');
    const [newTeam, setNewTeam] = useState(false);
    const alert = useAlert();

    useEffect(() => {
        handleInput();
    }, [show])

    const handleInput = () => {
        if (refName.current !== null) {
            refName.current.focus();
        }
    }

    const saveTeam = async () => {
        const { data, status } = await api.post('/team', { name: equipe, created_by: 1, updated_by: 1 });
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
            const driver = {
                name: name,
                // idTeam: equipeId || team.key,
                created_by: 1,
                updated_by: 1
            }


            

            const { data, status } = await api.post(`/driver`, driver);
            if (status === 201) {
                const {data:season} = await api.get(`/season/rank/${rank || rankInput.props.children[0].key}`);
                console.log(equipeId || team.key)
                const {data: data2, status: status2} = await api.post(
                    `/driver/${data.data.id}/team/${equipeId || team.key}/season/${season[0].id}?reserve=${reserve}`, 
                    {
                        created_by: 1,
                        updated_by: 1
                    }
                )
                alert.success(data.message);
                console.log(data2.data)
                clearFields();
            }
        } else {
            alert.show('Por favor preencha todos os campos');
        }
    }

    const onSelect = useCallback((selectedItem) => {
        setTeam(selectedItem);
    }, []);

    const items = useMemo(
        () =>
            teams.map((team) => ({
                label: team.name,
                key: team.id, 
                ...team,
            })),
        [teams]
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
                                        {nameInput}
                                    </Field>

                                    <Field>
                                        <label htmlFor="team">Equipe</label>
                                        {
                                            !newTeam
                                                ?
                                                <DataListInput
                                                    placeholder="Selecione a equipe..."
                                                    items={items}
                                                    onSelect={onSelect}

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