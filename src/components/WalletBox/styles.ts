import styled from 'styled-components';

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`

    width: 31%;
    height: 200px;

    margin: 10px 0;
    border-radius: 10px;
    padding: 10px 20px;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    overflow: hidden;
    position: relative;

    > img {
        height: 114%;
        opacity: .3;

        position: absolute;
        top: -12px;
        right: -30px;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px){
        > span {
            font-size: 14px;
        }

        > h1 {
            display: inline-block;
            width: 100%;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }

        > small {
            display: flex;
        }

    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            align-items: center;

            strong {
                position: initial;
                width: auto;
                font-size: 22px;
            }

            strong::after {
                display: inline-block;
                content: ' ';
            }
        }
    }

`;
