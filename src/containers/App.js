import React from 'react';

import './App.css';
import { SidebarData } from '../data/AppData';
import Sidebar from '../components/Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import SideContent from './SideContent/SideContent';

const App = () => {

  return(
    <div className='app'>
      <div className='app__glass'>
        <Sidebar menuOptions={SidebarData} />
        <MainContent />
        <SideContent />
      </div>
    </div>
  )
}

export default App;
