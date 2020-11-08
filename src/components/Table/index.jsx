import React from 'react';
import { Line, TableContent } from '../../pages/ClassificationPage/components/Table/style';

const Table = ({data, isDriver}) => (
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
                    <Line key={value._id._id} position={i+1}>
                        <td>{i+1}</td>
                        <td>{value._id.name}</td>
                        <td>{value._id.team[0].name}</td>
                        <td>{value.points}</td>
                    </Line>
                ))
            :
                data.map((value, i) => (
                    <Line key={value._id} position={i+1}>
                        <td>{i+1}</td>
                        <td>{value.team}</td>
                        <td>{value.drivers}</td>
                        <td>{value.points}</td>
                    </Line>
                ))
            }
        </tbody>
    </TableContent>
);

export default Table