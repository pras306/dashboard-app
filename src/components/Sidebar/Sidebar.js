import React, { useState } from 'react';
import { UilSignOutAlt } from '@iconscout/react-unicons';

import './Sidebar.css';
import logo from '../../assets/images/logo.png';

const Sidebar = ({ menuOptions }) => {

    const [ active, setActive ] = useState(1);
    
    return (
        <div className='app__sidebar'>
            <div className='app__sidebar-logo'>
                <img src={logo} alt='Logo' />
                <h4>Shops</h4>
            </div>
            {menuOptions?.map((option, idx) => {
                return (
                    <div className={`app__sidebar-menu_item ${active === idx ? 'active' : ''}`} key={idx} onClick={() => setActive(idx)} >
                        <option.icon />
                        <span>{option.heading}</span>
                    </div>
                );
            })}
            <div className='app__sidebar-footer'>
                <UilSignOutAlt />
            </div>
        </div>
    );
};

export default Sidebar;