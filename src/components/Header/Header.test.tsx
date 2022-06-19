import { render, screen } from '@testing-library/react';
import Header from '.';


describe('Header component',()=>{
    it('can render Header title', () => {
      render(<Header />)
      const title = screen.getByText('Watchlists')
      expect(title).toBeInTheDocument()

    });
})
