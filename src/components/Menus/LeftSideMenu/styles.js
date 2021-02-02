import styled from 'styled-components';

export const Grid = styled.div`
  //grid-column: 1;
`;

export const Nav = styled.nav`
  opacity: 0.9;
  width: 270px;
  height: 100%;
  min-height: 100%;
  background-color: #DCDDE1;

  position: absolute;

  border-radius: 5px 5px 5px 5px;

  @media (max-width: 900px) {
    left: -290px;
  }
`;

export const Ul = styled.ul`
  top: 40px;
  position: absolute;
  width: 100%;
`;

export const A = styled.a`
  display: block;
  padding: 20px 25%;
  font-weight: bold;
  color: #000000;
  text-decoration: none;

  &:hover {
    background-color: #44BD32;
    color: #FFFFFF;
    opacity: 0.4;
    border-radius: 5px 5px 5px 5px;
    transition: .2s;

    box-shadow:
      inset -2px -2px 8px rgba(255,255,255,0.1),
      inset -2px -2px 12px rgba(255,255,255,0.1),
      inset 2px 2px 4px rgba(255,255,255,0.1),
      inset 2px 2px 8px rgba(0,0,0,0.15);

    transform: scale(1.0);
  }
`;

export const ASelected = styled(A)`
  color: #FFFFFF;
  background-color: #44BD32;
  opacity: 0.8;
  border-radius: 5px 5px 5px 5px;

  &:hover {
    transition: .2s;
    transform: scale(1.0);
  }
`;