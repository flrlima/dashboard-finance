import React from 'react';
import { Container } from './styles';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;        
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) => (
    <Container >
        <h2>Histórico anual</h2>

        <ResponsiveContainer>
            <LineChart data={data} margin={{top: 5, right: 10, left: 10, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                <XAxis dataKey="month" stroke="#cecece"/>
                <Tooltip/>
                <Line
                    type="monotone"
                    dataKey="amountEntry"
                    name="Entradas"
                    stroke={lineColorAmountEntry}
                    strokeWidth={5}
                    dot={{r: 5}}
                    activeDot={{r: 15}}
                />
                <Line
                    type="monotone"
                    dataKey="amountOutput"
                    name="Saídas"
                    stroke={lineColorAmountOutput}
                    strokeWidth={5}
                    dot={{r: 5}}
                    activeDot={{r: 10}}
                />
            </LineChart>
        </ResponsiveContainer>
    </Container>
);

export default HistoryBox;