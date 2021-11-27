import React, { useMemo } from 'react';
import { Container } from './styles';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    typeColor: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title, amount, footerLabel, icon, typeColor
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg;

            case 'arrowUp':
                return arrowUpImg;

            case 'arrowDown':
                return arrowDownImg;

            default:
                return undefined;
        }
    }, [icon]);

    return (
        <Container color={typeColor}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    start={0}
                    end={amount}
                    duration={1}
                    // prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                /></h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    );
}

export default WalletBox;