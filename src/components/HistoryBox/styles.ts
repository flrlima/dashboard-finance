import styled from 'styled-components';

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
    margin-left: 10px;

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
`;



// ::-webkit-scrollbar {
//     width: 10px;

// }

// ::-webkit-scrollbar-thumb { 
//     background-color: ${props => props.theme.colors.info};
//     border-radius: 10px;
// }

// ::-webkit-scrollbar-track { 
//     background-color: ${props => props.theme.colors.tertiary};
// }
