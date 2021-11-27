import styled, {keyframes, Keyframes} from 'styled-components';

const animate = keyframes`

    0%{
        transform: translateY(100px);
        opacity: 0;
    }

    50%{
        opacity: .3;
    }

    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 10px;

    display: flex;

    animation: ${animate} .8s;

    @media(max-width: 1200px){
        display: flex;

        width: 100%;
        height: auto;
    }

`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
    flex: 1;

    > h2 {
        padding-left: 10px;
        margin-bottom: 10px;
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    max-width: 180px;

    display: flex;
    justify-content: left;

    margin-right: 30px;

    padding-top: 35px;
    padding-bottom: 10px;

`;

export const LegendContainer = styled.ul`
    list-style: none;

    flex: 1;

    height: 160px;
    padding: 10px 20px 5px 5px;
    overflow-y: scroll;

    
    ::-webkit-scrollbar {
        width: 10px;
        
    }

    ::-webkit-scrollbar-thumb { 
        background-color: ${props => props.theme.colors.info};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track { 
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;

    margin-bottom: 10px;
    padding-left: 5px;

    > div {
        background-color: ${props => props.color};

        width: 45px;
        height: 45px;
        border-radius: 5px;

        font-size: 14px;
        line-height: 45px;
        text-align: center;
    }

    > span {
        margin-left: 10px;
    }
`;
