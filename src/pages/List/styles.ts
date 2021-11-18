import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 15px;
        margin-bottom: 30px;

        transition: opacity .3s;
        opacity: .4;
        text-decoration: line-through 4px;
        text-decoration-style: wavy ;
        text-decoration-color: ${props => props.theme.colors.info};
        
        &:hover {
            opacity: .3;
        }        
    }

    .tag-filter-recurrent::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.theme.colors.success};
            margin: 0 auto;
    }
        
    .tag-filter-eventual::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
            margin: 0 auto;
    }

    .tag-actived {        
        opacity: 1;
        font-size: 22px;
        text-decoration: none;
    }
`;
