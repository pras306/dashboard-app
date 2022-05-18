import React from 'react';
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart } from '@iconscout/react-unicons';

import './App.css';
import Sidebar from '../components/Sidebar/Sidebar';

const App = () => {

  const menuOptions = [
    { icon: UilEstate, heading: 'Dashboard' },
    { icon: UilClipboardAlt, heading: 'Orders' },
    { icon: UilUsersAlt, heading: 'Customers' },
    { icon: UilPackage, heading: 'Orders' },
    { icon: UilChart, heading: 'Analytics' },
  ]


  return(
    <div className='app'>
      <div className='app__glass'>
        <Sidebar menuOptions={menuOptions} />
        <div>Main Cards</div>
        <div>Users and Reviews</div>
      </div>
    </div>
  )
}

export default App;
