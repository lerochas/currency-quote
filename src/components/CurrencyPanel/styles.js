import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  width: 750px;
  height: 300px;

  max-width: 100%;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 290px;
  top: 0;
  margin: auto;
  grid-gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    width: 400px;
    height: 300px;

    max-width: 100%;

    left: 0;
  }
`;

export const Panel = styled.div`
  background: #000000;
  opacity: 0.75;
  border-radius: 15px 15px 15px 15px;
  padding: 40px 40px 40px 40px;
  
  text-align: center;

  &:hover {
    transition: .5s;
    transform: scale(1.03);
  }

  box-shadow:
    0 2.2px 0.1px -6px rgba(0,0,0,0.35),
    0 5.3px 6px -6px rgba(0,0,0,0.228),
    0 10px 14.2px -6px rgba(0,0,0,0.202),
    0 17.9px 24.8px -6px rgba(0,0,0,0.19),
    0 33.4px 39.4px -6px rgba(0,0,0,0.177),
    0 80px 69px -6px rgba(0,0,0,0.146);
`;

export const Text = styled.text`
  color: #FFFFFF;
  font-size: 20px;
`
export const TextSubTitle = styled(Text)`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

export const TextTitle = styled(TextSubTitle)`
  font-weight: bold;
  font-size: 60px;
  line-height: 120.7%;
`;

export const H1 = styled.h1`
  color: #FFFFFF;
`;

export const Div = styled.div`
  display: flex;
  background-color: #44BD32;
  justify-content: center;

  max-width: 200px;
  margin: 0 auto;
  margin-top: 50px;

  border-radius: 12px;
`;

