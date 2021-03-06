import React from 'react';
import styled from 'styled-components';

const Button = () => {

    return (
        <ButtonStyled className='Button'>
            { Children } 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`

background-color: white;
padding: 10px, 20px;
font-size:10px;

border: solid 3px black;
border-radius: 5px;
outline: none;
    
`;