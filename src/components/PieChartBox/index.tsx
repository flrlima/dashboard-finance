import React from 'react';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface IPieChartsProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieCharts: React.FC<IPieChartsProps> = ({ data }) => (
    <Container >
        <SideLeft>
            <h2>Relação</h2>
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
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="percent"
                    >
                        { 
                            data.map((i) => (
                                <Cell key={i.name} fill={i.color}/>
                            ))
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>

    </Container>
);

export default PieCharts;