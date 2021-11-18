import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

interface IContentHEaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHEaderProps> = ({
    title, lineColor, children
}) => {
    
    return(
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;