import { act, render } from '@testing-library/react';
import Lists from './index';

describe('Lists component',  ()=>{
    const promise = Promise.resolve()
    it('component render on screen', async () => {

        const {container} = render(<Lists />)

        expect(container).toBeInTheDocument()
       
        await act(async () => {
            await promise
        })
            
    });

})
