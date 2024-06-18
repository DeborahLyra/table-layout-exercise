import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: var(--blue-greeny);
  height: 100vh;
  padding: 1.5rem;
  color: var(--pinky);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const UlContainer = styled.ul`
  list-style: none;
`;

export const LiItem = styled.li`
  text-decoration: none;
  margin-bottom: 2rem;
`;

export const LiAnchor = styled.a`
  text-decoration: none;
  color: var(--pinky);
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1rem;
  padding: 10px;

  &:hover {
    background-color: var(--hot-pink);
    padding: 5px 10px;
    border: 0;
    border-radius: 8px;
  }
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: var(--hot-pink);
  }

  p {
    font-size: 1.2rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 900px) {
    display: flex;
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    z-index: 100;
    color: var(--hot-pink);
  }
`;

export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-greeny);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 1.5rem;
  gap: 4rem;
`;
