import React from 'react';
import { 
    Container, 
    Header, 
    LogImg, 
    Title, 
    MenuContainer, 
    MenuLink, 
    MenuItemButton 
} from './styles';
import logoImg from '../../assets/logo.svg';
import { 
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp 
} from 'react-icons/md';
import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {

    const { signOut } = useAuth();

    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira Digital"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <MenuLink href="/">
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
                
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;