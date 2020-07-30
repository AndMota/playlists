import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/dogtubeLogo2.png';
import {LogoImage, MenuWrapper, ButtonLink} from './style.js';
//import Button from'../Button'

//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <MenuWrapper>
        <Link to= "/">
            <LogoImage src={Logo} alt="DogTube logo"/>
        </Link>
        <ButtonLink as= {Link} to="/cadastro/video">
            Novo video
        </ButtonLink>
        </MenuWrapper>
    ); 
}

export default Menu;