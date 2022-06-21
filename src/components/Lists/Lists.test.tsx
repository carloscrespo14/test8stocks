import { act, render, waitFor, screen } from '@testing-library/react';
import Lists from './index';

describe('Lists component',  ()=>{
    const promise = Promise.resolve()
    it('should render companies info on screen', async () => {

        const {container} = render(<Lists />)

        expect(container).toBeInTheDocument()

        await waitFor(()=>{
            screen.getByText("GOOG")
            screen.getByText("MSFT")
            screen.getByText("AAPL")
        })
       
        await act(async () => {
            await promise
        })
            
    });

})
