import React from 'react';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className="container">
        <h1>Watchlists</h1>
        <p>3 Items</p>
        <p>Updated 19/06/2022 at 16:14 PM</p>
      </div>
    </header>
  )
}

export default Header;
