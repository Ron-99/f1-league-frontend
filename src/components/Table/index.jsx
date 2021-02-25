import React from 'react';
import { Line, TableContent, Center } from '../../pages/ClassificationPage/components/Table/style';

const Table = ({ data, isDriver }) => (
    <Center>
        <TableContent>
            <thead>
                <tr>
                    <th>Posição</th>
                    <th>Nome</th>
                    <th>Equipe</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody>

                {
                    isDriver ?
                        data.map((value, i) => (
                            <Line key={value.id} position={i + 1}>
                                <td><span>Posição</span>{i + 1}</td>
                                <td><span>Nome</span>{value.driver}</td>
                                <td><span>Equipe</span>{value.team}</td>
                                <td><span>Pontos</span>{value.points}</td>
                            </Line>
                        ))
                        :
                        data.map((value, i) => (
                            <Line key={value.id} position={i + 1}>
                                <td><span>Posição</span>{i + 1}</td>
                                <td><span>Nome</span>{value.team}</td>
                                <td><span>Equipe</span>{value.drivers}</td>
                                <td><span>Pontos</span>{value.points}</td>
                            </Line>
                        ))
                }
            </tbody>
        </TableContent>
    </Center>
);

export default Table