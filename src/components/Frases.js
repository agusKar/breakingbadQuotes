import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h1`
    color: black;
`;

const Frases = ({ frase }) => {
    const {author, quote} = frase;

    return ( 
        <Fragment>
            <Titulo>Frases</Titulo>
            <cite>{quote}</cite>
            <p><b>{author}</b></p>
        </Fragment>
     );
}
 
export default Frases;