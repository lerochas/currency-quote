import {React} from 'react';
import { IconContext } from 'react-icons';
import { 
  FaLayerGroup, 
  FaMobileAlt, 
  FaChartBar, 
  FaRegThumbsUp 
} from 'react-icons/fa';
import {Grid, Nav, Ul, A, ASelected} from './styles';

const LeftSideMenu = () => {
  const menu = 
    <IconContext.Provider value={{size: '1em'}}>
    <Grid>
      <Nav>
        <Ul>
          <li>
            <ASelected href=""><FaLayerGroup />  DASHBOARD</ASelected>
          </li>
          <li>
            <A href=""><FaMobileAlt />  APP</A>
          </li>
          <li>
            <A href=""><FaChartBar />  FUNÇÕES</A>
          </li>
          <li>
            <A href=""><FaRegThumbsUp />  SOLUÇÕES</A>
          </li>
        </Ul>
      </Nav>
    </Grid>
    </IconContext.Provider>

  return(menu);
}

export default LeftSideMenu;