import React from 'react';
import { Container, Header, LogImg, Title, MenuContainer, MenuLink } from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira Digital"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <MenuLink href="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuLink>
                
                <MenuLink href="/list/entry-balance">
                    <MdArrowDownward/>
                    Entradas
                </MenuLink>
                
                <MenuLink href="/list/exit-balance">
                    <MdArrowUpward/>
                    Saídas
                </MenuLink>
                
                <MenuLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;