import React, {useMemo} from 'react';
import { Container, Profile, Wellcome, UserName } from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {
    
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]
    }, []);

    return(
        <Container>
            <Toggle/>

            <Profile>
                <Wellcome>Ola, {emoji}</Wellcome>
                <UserName>Fabio Lima</UserName>
            </Profile>

        </Container>
    );
}

export default MainHeader;