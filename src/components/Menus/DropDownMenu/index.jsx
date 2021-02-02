import {React} from 'react';
import logoImg from '../../../assets/brydge-logo.png';

import { FaChevronRight } from 'react-icons/fa';
import {
  Label,
  DivMenuToggle,
  DivOne,
  DivTwo,
  DivThree, 
  Div, 
  Ul, 
  A, 
  Ab
} from './styles';

const DropDownMenu = () => {
  const menu = (
    <>
      <Label>
        <img src={logoImg} alt="Brydge" />
      </Label>
      <Div>
        <Ul>
          <li>
            <A>DASHBOARD  <FaChevronRight /></A>
            <Ab>Cotação de Moedas</Ab>
          </li>

          <DivMenuToggle>
            <DivOne></DivOne>
            <DivTwo></DivTwo>
            <DivThree></DivThree>
          </DivMenuToggle>
        </Ul>
      </Div>
    </>
  );
    

  return(menu);
}

export default DropDownMenu;