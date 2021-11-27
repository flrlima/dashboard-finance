import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira-digital-dentro-do-bolso:logged');

        return !!isLogged;
    })

    const signIn = (email: string, password: string) => {
        // if(email === 'flrlima@email.com' && password === '123'){
            localStorage.setItem('@minha-carteira-digital-dentro-do-bolso:logged', 'true');
            // <Link to="/"></Link>
        // }
        // else {
        //     alert('Usuário ou Senha inválidos!');
        // }
    }

    const signOut = () => {
        localStorage.setItem('@minha-carteira-digital-dentro-do-bolso:logged', 'false');
        setLogged(false);
        <Link to="/"></Link>
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth (): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };