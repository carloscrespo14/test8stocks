import React, { useContext } from 'react';
import moment from 'moment';

import { AppContext } from '../../context/Context';
import './index.scss';


const Header: React.FC = () => {

  const { appState } = useContext(AppContext)

  return (
    <header className='header'>
      <div className="container">
        <h1>Watchlists</h1>
        <p>{appState?.count} Items</p>
        <p>Updated {moment(new Date(appState?.date)).format("YYYY-MM-DD")} at {moment(new Date(appState?.date)).format("hh:mm:ss a")}</p>
      </div>
    </header>
  )
}

export default Header;
