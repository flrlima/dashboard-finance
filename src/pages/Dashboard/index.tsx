import React, { useMemo, useState } from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import HistoryBox from '../../components/HistoryBox';
import PieChart from '../../components/PieChartBox';
import BarChartsBox from '../../components/BarChartsBox';

import listOfMonths from '../../utils/months';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import happyImg from '../../assets/happy.svg';
import saDImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

        [...expenses, ...gains].forEach(item => {
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
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            if(month === monthSelected && year === yearSelected){
                try {
                    total += Number(item.amount);                    
                } catch {
                    throw new Error('Invalid amount!');
                }
            }
        })

        return total;

    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            if(month === monthSelected && year === yearSelected){
                try {
                    total += Number(item.amount);                    
                } catch {
                    throw new Error('Invalid amount!');
                }
            }
        })

        return total;

    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas.",
                icon: saDImg
            }   
        } 
        else if(totalBalance === 0){
            return {
                title: "Ufaaaa!",
                description: "Neste mês, você gastou exatmente o que ganhou.",
                footerText: "Tenha cuidado. No próximo mês tente poupar o seu dinheiro. ",
                icon: grinningImg
            }
        }
        else {
            return{                
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continua assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }
    }, [totalBalance]);

    const relationExpenseVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const gainsPercent = (totalGains / total) * 100;
        const expensesPercent = (totalExpenses / total) * 100;

        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: Number(gainsPercent.toFixed(1)),
                // color: '#F7931B'
                color: '#4CAF50'
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: Number(expensesPercent.toFixed(1)),
                color: '#E44C4E'
            }
        ]

        return data;

    }, [totalGains, totalExpenses]);

    const relationExpenseRecurrentVesusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente')
                return amountRecurrent += Number(expense.amount);
            else
                return amountEventual += Number(expense.amount);
        });

        const total = amountRecurrent + amountEventual;

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
                color: '#4E41F0'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: Number(((amountEventual / total) * 100).toFixed(1)),
                color: '#E44C4E'
            }
        ];

    },[monthSelected, yearSelected]);

    const relationGainRecurrentVesusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente')
                return amountRecurrent += Number(gain.amount);
            else
                return amountEventual += Number(gain.amount);
        });

        const total = amountRecurrent + amountEventual;

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
                color: '#4E41F0'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: Number(((amountEventual / total) * 100).toFixed(1)),
                color: '#E44C4E'
            }
        ];

    },[monthSelected, yearSelected]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {

            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('AmountEntry inválido');
                    }
                }
            });
            
            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try {
                        amountOutput += Number(expense.amount);
                    } catch {
                        throw new Error('AmountOutput inválido');
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) 
                    || (yearSelected < currentYear)
        })
    },[yearSelected]);

    const handlerMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Mês inválido. Use somente 12 meses');
        }
    };

    const handlerYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Ano inválido.');
        }
    };

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
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

            <Content>
                <WalletBox 
                    title="Saldo"
                    typeColor="#4E41F0"
                    amount={totalBalance}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="dolar"
                />
                
                <WalletBox 
                    title="Entradas"
                    typeColor="#4CAF50"
                    amount={totalGains}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                />
                
                <WalletBox 
                    title="Saídas"
                    typeColor="#E44C4E"
                    amount={totalExpenses}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChart data={relationExpenseVersusGains} />

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#4CAF50"
                    lineColorAmountOutput="#E44C4E"
                />

                <BarChartsBox 
                    title="Saídas"
                    data={relationExpenseRecurrentVesusEventual}
                />
                
                <BarChartsBox 
                    title="Entradas"
                    data={relationGainRecurrentVesusEventual}
                />

            </Content>

        </Container>
    );
}

export default Dashboard;