import React, {useMemo, useState} from 'react';
import { Container, Profile, Wellcome, UserName } from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return(
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}            
            />

            <Profile>
                <Wellcome>Ola, { emoji }</Wellcome>
                <UserName>Fabio Lima</UserName>
            </Profile>

        </Container>
    );
}

export default MainHeader;