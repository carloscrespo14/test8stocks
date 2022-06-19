import React from 'react';
import Menu from '../Menu';
import './index.scss';

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

export default Layout;
