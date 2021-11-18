import React, { useState, useMemo, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router-dom';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import {Guid} from 'guid-typescript';
import listOfMonths from '../../utils/months';

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormat: string;
    tagColor: string
}

const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

    let { type } = useParams();

    const pageData = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#4E41F0',
            data: gains
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E',
            data: expenses
        }
    },[type])

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                    value: index + 1,
                    label: month
                }
        });
    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        pageData.data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    }, [pageData.data]);

    const handlerFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);
        }else{
            setFrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    };

    const handlerMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Mês inválido. Use somente 12 meses');
        }
    }

    const handlerYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw new Error('Ano inválido.');
        }
    }

    useEffect(() => {

        const filterDate = pageData.data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
        })

        const formattedDate = filterDate.map(item => {
            return {
                id: String(Guid.create()),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormat: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })
        
        setData(formattedDate);
    }, [pageData.data, monthSelected, yearSelected, data.length, frequencyFilterSelected])

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput 
                    options={months} 
                    onChange={(e) => handlerMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handlerYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter 
                                tag-filter-recurrent 
                                ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handlerFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className={`tag-filter 
                                tag-filter-eventual
                                ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handlerFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dateFormat}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>

        </Container>
    );
}

export default List;