import { render, screen } from '@testing-library/react';
import Menu from './index';

describe('Menu component',()=>{
    it('has logo', () => {
        render(<Menu />)
        const logo = screen.getByAltText(/logo/i);
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(logo).toHaveAttribute('alt', 'logo');
    });

    it('has Mobile logo', () => {
        render(<Menu />)
        const Mobilelogo = screen.getByAltText(/mobile/i);
        expect(Mobilelogo).toHaveAttribute('src', 'mobile-logo.png');
        expect(Mobilelogo).toHaveAttribute('alt', 'mobile');
    });
    
    it('has avatar', () => {
        render(<Menu />)
        const avatar = screen.getByAltText(/avatar/i);
        expect(avatar).toHaveAttribute('alt', 'avatar');
        expect(avatar).toHaveAttribute('src', 'user-regular.svg');
    });
})

