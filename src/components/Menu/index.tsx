import React from 'react';
import logo from '../../assets/img/logo.png'
import logoMobile from '../../assets/img/mobile-logo.png'
import avatar from '../../assets/img/icons/user-regular.svg'
import './index.scss';

/**
 * Component to show a menu bar
**/

const Menu: React.FC = () => {
  return (
    <aside className='menu'>
      <div className='menu-logo-container'>
        <img className='menu-logo' src={logo} alt='logo' />
        <img className='menu-logo-mobile' src={logoMobile} alt='mobile' />
      </div>
      <div className='menu-option-container'>
      </div>
      <div className='menu-avatar-container'>
          <img className='menu-avatar-container-img' src={avatar} alt='avatar' />
      </div>
    </aside>
  )
}

export default Menu;