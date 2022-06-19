import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Layout component',()=>{
    it('can render any children', () => {
      render(<Layout><h1>Layout</h1></Layout>)
      const titleElement = screen.getByText(/Layout/i);
      expect(titleElement).toBeInTheDocument();
    });
})
