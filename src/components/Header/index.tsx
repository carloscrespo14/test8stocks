import React, { useContext } from 'react';
import moment from 'moment';

import { AppContext } from '../../context/Context';
import './index.scss';

/**
 * Component to define the information on Header\
 * @AppContext provides @appState (state) and @updateState (method to update state)
**/

const Header: React.FC = () => {

  const { appState } = useContext(AppContext)  
  return (
    <header className='header'>
      <div className="container">
        <h1>Watchlists</h1>
        <p>{appState?.count} Items</p>
        <p>Updated {moment(new Date(appState?.date)).format("YYYY-MM-DD")} at {moment(new Date()).format("hh:mm:ss a")}</p>
      </div>
    </header>
  )
}


export default Header;
