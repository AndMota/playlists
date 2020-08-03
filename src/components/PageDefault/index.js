import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu'
import styled, { css } from 'styled-components'

const Main= styled.main`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 96px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll}) => css`
    padding: ${paddingAll};
    `}
  @media(max-width: 800px) {
    padding-top: 40px;
  }
`;

function PageDefault({children, paddingAll}){
    return(
    <>
        <Menu />
        <Main paddingAll={paddingAll}>
        {children}
        </Main>
        <Footer/>
    </>
    )
}

export default PageDefault;