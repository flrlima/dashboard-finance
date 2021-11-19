import React from 'react';
import { Container, ChartsContainer, Header, LegendContainer, Legend } from './styles';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import  formatCurrency from '../../utils/formatCurrency';

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
        <Header>
            <h2>Histórico anual</h2>

            <LegendContainer>
                <Legend color={lineColorAmountEntry}>                    
                    <div>{}</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>                    
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartsContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip formatter={(value: any) => formatCurrency(value)}/>
                    <Line
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 20 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 20 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartsContainer>
    </Container>
);

export default HistoryBox;