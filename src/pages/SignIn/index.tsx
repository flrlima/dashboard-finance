import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira Digital" />
                <h2>Minha Carteira Digital</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    placeholder="email@email.com"
                    type="email"
                    // required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    // required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">Acessar</Button>

            </Form>
            <h1>CLIQUE e ENTRE</h1>
        </Container>
    );
}

export default SignIn;