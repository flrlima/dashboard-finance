import React from 'react';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

interface IBarChartsBoxProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

const BarChartsBox: React.FC<IBarChartsBoxProps> = ({ title, data }) => {
    return (
        <Container>
             <SideLeft>
                <h2>{title}</h2>
            <LegendContainer>
                {
                    data.map((i) => (

                        <Legend key={i.name} color={i.color}>
                            <div>{i.percent}%</div>
                            <span>{i.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
             </SideLeft>
             
             <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data} width={10}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((i) => (
                                    <Cell
                                        key={i.name}
                                        fill={i.color}
                                    />
                                ))
                            }
                        </Bar>                        
                    <Tooltip 
                        cursor={{fill: 'none'}}
                        formatter={(value: any) => formatCurrency(value)}
                    />
                    </BarChart>
                </ResponsiveContainer>
             </SideRight>
        </Container>
    )
};

export default BarChartsBox;