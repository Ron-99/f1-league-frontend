import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import SecondModal from '../../../../components/Modal/secondModal';

import { isAuthenticated} from '../../../../services/auth';

import {Center, TableContent, Line, BestLap, Driver, Button} from './style';

const Table = ({ load, deleteClassification, drivers, updateClassification }) => {

    const [classification, setClassitication] = useState({});
    const [driver, setDriver] = useState({});
    const [show, setShow] = useState(false);
 
    const update = (rating, driver) => {
        setClassitication(rating);
        setDriver(driver);
        setShow(true);
    }

    const remove = (id) => {
        confirmAlert({
            title: 'Confirmação de exclusão',
            message: 'Tem certeza que deseja remover essa classificação?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => deleteClassification(id)
                },
                {
                    label: 'Não'
                }
            ]
        });
    };

    return (
        <>
            <Center>
                <TableContent>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Piloto</th>
                            <th>Equipe</th>
                            <th>Melhor Tempo</th>
                            <th>Tempo de Prova</th>
                            <th>Pontos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            load.map(rating => (
                                <Line key={rating._id} data-id={rating._id} position={rating.position}>
                                    <td><span>Posição</span>{rating.position}</td>
                                    <td><span>Piloto</span><Driver to={`/driver/${rating.driver._id}`}>{rating.driver.name}</Driver></td>
                                    <td><span>Equipe</span>{rating.driver.team[rating.driver.team.length - 1].name}</td>
                                    <BestLap bestLap={rating.bestLap}><span>Melhor Tempo</span>{rating.bestTime}</BestLap>
                                    <td><span>Tempo de Prova</span>{rating.trialTime}</td>
                                    <td><span>Pontos</span>{rating.points}</td>
                                    {
                                        isAuthenticated()?
                                        <td><Button color={"edit"} onClick={() => update(rating, rating.driver)}><FontAwesomeIcon icon={faEdit} size="2x" /></Button> <Button color={"delete"} onClick={() => remove(rating._id)}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></Button></td>
                                        : ""
                                    }
                                    
                                </Line>
                            ))
                        }
                    </tbody>
                </TableContent>
            </Center>

            <SecondModal title={"Atualizar Classificação"} updateClassification={updateClassification} show={show} setShow={setShow} drivers={drivers} rating={classification} driverEdit={driver} isEdit={true} />
        </>
    )
}

export default Table;