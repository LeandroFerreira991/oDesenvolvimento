import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import menuIconAbrir from '../assets/images/icons/abrirMenu.png';
import menuIconFechar from '../assets/images/icons/fecharMenu.png';

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

interface Props{
    clicked: any;
}

const NavBackground = styled.div<Props>`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background: #F5F5F5;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Navigation = styled.nav<Props>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: #000000;
  padding: 1rem 2rem;
  transition: all 0.4s;

  &:hover,
  &:active {
    transform: translateX(1rem);
  }
`;

const Wrapper = styled.header`
    top:0;
    padding: 0 8px 0 8px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
		  height: 90px;
	  }
`;

const IconAbrirMenu = styled.img.attrs({
	src: menuIconAbrir,
	alt: 'Logo do abrir menu',
})<Props>`
  cursor: pointer;
	height: 100%;
`;

const IconFecharMenu = styled.img.attrs({
	src: menuIconFechar,
	alt: 'Logo do fechar',
})<Props>`
	height: auto;
  cursor: pointer;
`;

const MenuLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 2%;
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Wrapper>
        <span><span style={{fontFamily: 'Inter' }}>APRESENTAÇÃO </span>PESSOAL</span>
        <div>
            <IconAbrirMenu onClick={handleClick} clicked={click}></IconAbrirMenu>
            <NavBackground clicked={click}></NavBackground>

            <Navigation clicked={click}>
                <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                    <IconFecharMenu clicked={click}></IconFecharMenu>
                </MenuLabel>
                <List>
                  <li>
                      <ItemLink onClick={handleClick} to="/">
                      Quem Sou Eu
                      </ItemLink>
                  </li>
                  <li>
                      <ItemLink onClick={handleClick} to="/formacao">
                      Formaçao
                      </ItemLink>
                  </li>
                  <li>
                      <ItemLink onClick={handleClick} to="/experiencias">
                      Experiências
                      </ItemLink>
                  </li>
                  <li>
                      <ItemLink onClick={handleClick} to="/hobbies">
                      Hobbies
                      </ItemLink>
                  </li>
                </List>
            </Navigation>
        </div>
    </Wrapper>
  );
}

export default HamburgerMenu;