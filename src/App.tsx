import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/theme';

import Routes from './routes/intex';

const App: React.FC = () => {
    const {theme} = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;