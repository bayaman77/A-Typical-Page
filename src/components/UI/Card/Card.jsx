import React from 'react';
import styled from 'styled-components';

const Card = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Card;

const Container = styled.div`
    padding: 2rem 1.5rem;
    box-shadow: 0px 2px 8px 3px rgba(34, 60, 80, 0.2);
    width: 500px;
    margin: 10px auto;
    border-radius: 10px;
    text-align: center;
`

