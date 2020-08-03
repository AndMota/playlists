import styled from "styled-components"
import Button from '../Button'

export const LogoImage = styled.img`
    max-width: 168px;
    @media (max-width:800px){
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width:100%;
    height: 94px;
    z-index:100;

    position: fixed; /*fixa o menu na tela*/
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;

    display: flex; /* será sempre em row */
    justify-content: space-between; /* pega o espaço da dela e distribui os componentes entre elas e sempre será na direção do flex */
    /* space around divide ao redor dos componentes e between entre um e outro*/
    align-items: center; /* align organina a direção oposta */

    background-color: var(--black); 
    border-bottom: 2px solid var(--primary); 
    
    body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
    }
    @media (max-width:800px){
        height: 40px;
        justify-content: center;
        body {
        --bodyPaddingTop: 40px;
        padding-top: var(--bodyPaddingTop);
        }
    }

`;


export const ButtonLink = styled(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    font-style: normal;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: .5;
    }
    @media(max-width: 800px){
        border: 0;
        border-radius:0;
        position: fixed;
        left: 0;
        right:0;
        bottom: 0;
        background-color: var(--primary);
        color: var(--white);
        outline: 0;
        text-align: center;
    }
`;