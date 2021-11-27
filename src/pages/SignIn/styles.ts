import styled from 'styled-components';

export const Container = styled.div`

    height: 100vh;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background:-webkit-gradient(linear, left top, left bottom, from(#000), to(#CCCCCC)) no-repeat;

    > h1 {
        color: ${props => props.theme.colors.success};
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 10px;
    }

    > img {
        height: 40px;
        width: 40px;
    }
`;

export const Form = styled.form`

    width: 320px;
    height: 320px;

    padding: 30px;

    border-radius: 10px;

    
    background:-webkit-gradient(linear, left top, left bottom, from(#000), to(#CCCCCC)) no-repeat;
    /* background-color: #313862; */
    /* background-color: ${props => props.theme.colors.success}; */
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: ${props => props.theme.colors.white};

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }

`;
