import React, { useState } from 'react';
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
} from './styles';
import logoImg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toggle';

const Aside: React.FC = () => {

    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Minha Carteira Digital" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <MenuLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuLink>

                <MenuLink href="/list/entry-balance">
                    <MdArrowDownward />
                    Entradas
                </MenuLink>

                <MenuLink href="/list/exit-balance">
                    <MdArrowUpward />
                    Saídas
                </MenuLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>

        </Container>
    );
}

export default Aside;