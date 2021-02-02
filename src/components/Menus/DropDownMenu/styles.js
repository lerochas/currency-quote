import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
`;

export const DivMenuToggle = styled.div`
 @media (max-width: 900px) {
    position: absolute;
    width: 40px;
    margin-right: 20px;
    margin-left: 85%;
    margin-top: -30px;
    
  }
`;

export const DivOne = styled.div`
  @media (max-width: 900px) {
    background-color: #000000;
    height: 5px;
    width: 100%;
    margin: 6px auto;
  }
`;

export const DivTwo = styled(DivOne)`

`;

export const DivThree = styled(DivOne)`

`;

export const Div = styled.div`
  background-color: #DCDDE1;
  opacity: 0.35;

  width: 100%;
  height: 54px;

  margin-top: 0;

  position: relative;

  border-radius: 5px 5px 5px 5px;
`;

export const Ul = styled.ul`
  top: 20px;
  position: absolute;
  width: 100%;
`;

export const A = styled.a`
  font-weight: bold;
  color: #000000;
  text-decoration: none;

  margin-left: 300px;

  font-size: 15px;

  &:hover {
    transition: .2s;

    transform: scale(1.06);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Ab = styled(A)`
  color: #44BD32;
  margin-left: 10px;
`;