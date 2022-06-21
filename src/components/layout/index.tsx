import React from 'react';
import  PropTypes from 'prop-types';

import Menu from '../Menu';
import './index.scss';

/**
 * Component to define the applicacion layout
 * this layout could be use to wrap the whole application or just some views
**/

  
type Props = {
    children: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return (
    <section className='layout'>
        <Menu />
        {children}
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}



export default Layout;
