import { render, screen } from '@testing-library/react';
import Menu from './index';

describe('Menu component',()=>{
    it('has logo', () => {
        render(<Menu />)
        const logo = screen.getByAltText(/logo/i);
        expect(logo).toHaveAttribute('src', 'logo.png');
        expect(logo).toHaveAttribute('alt', 'logo');
    });
    
    it('has avatar', () => {
        render(<Menu />)
        const avatar = screen.getByAltText(/avatar/i);
        expect(avatar).toHaveAttribute('alt', 'avatar');
        expect(avatar).toHaveAttribute('src', 'user-regular.svg');
    });
})

