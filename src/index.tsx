import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
