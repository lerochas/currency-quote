import React from 'react';

import CurrencyLabel from '../../components/CurrencyPanel';
import DropDownMenu from '../../components/Menus/DropDownMenu';
import LeftSideMenu from '../../components/Menus/LeftSideMenu';

const Dashboard = () => {
  return (
    <>
      <DropDownMenu />
      <LeftSideMenu />
      <CurrencyLabel />
    </>
  );
}

export default Dashboard;
