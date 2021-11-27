import styled, {keyframes, Keyframes} from 'styled-components';

const animate = keyframes`

    0%{
        transform: translateY(-100px);
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

    width: 100%;

    display: flex;
    flex-direction: column;
    
    margin: 10px 0;
    padding: 15px 15px 5px;

    border-radius: 10px;

    animation: ${animate} .8s;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
`;

export const ChartsContainer = styled.div`
    flex-direction: 1;
    height: 400px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    > h2 {
            padding-bottom: 20px;
            margin-left: 10px;
        }
    
    @media(max-width: 1200px){
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 10px;
`;

export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;

    margin-bottom: 10px;
    margin-left: 16px;

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
        margin-left: 5px;
    }

    @media(max-width: 1200px){
        > div {
            width: 40px;
            height: 40px;
        }
    }
`;

