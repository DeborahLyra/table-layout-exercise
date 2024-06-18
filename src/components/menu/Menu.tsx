import { useState } from 'react';
import { List, UserCircle } from "@phosphor-icons/react";
import {
  LiAnchor,
  LiItem,
  MenuContainer,
  MenuInfo,
  UlContainer,
  HamburgerIcon,
  MobileMenuContainer
} from "./styles";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>
       <List size={30}/>
      </HamburgerIcon>

      <MenuContainer>
        <MenuInfo>
          <UserCircle size={96} />
          <h1>Nome do usuário</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Placeat iste quisquam sequi necessitatibus debitis. Necessitatibus,
            repellendus fuga. Iste explicabo dolorum praesentium doloremque obcaecati,
            ullam maxime at dolores cupiditate, officia animi.
          </p>
        </MenuInfo>
        <UlContainer>
          <LiItem><LiAnchor href="#">Link 1</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 2</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 3</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 4</LiAnchor></LiItem>
        </UlContainer>
      </MenuContainer>
      <MobileMenuContainer isOpen={isOpen}>
        <MenuInfo>
          <UserCircle size={96} />
          <h1>Nome do usuário</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Placeat iste quisquam sequi necessitatibus debitis. Necessitatibus,
            repellendus fuga. Iste explicabo dolorum praesentium doloremque obcaecati,
            ullam maxime at dolores cupiditate, officia animi.
          </p>
        </MenuInfo>
        <UlContainer>
          <LiItem><LiAnchor href="#">Link 1</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 2</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 3</LiAnchor></LiItem>
          <LiItem><LiAnchor href="#">Link 4</LiAnchor></LiItem>
        </UlContainer>
      </MobileMenuContainer>
    </>
  );
}
