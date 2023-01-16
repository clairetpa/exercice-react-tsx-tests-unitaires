import { render, screen } from '@testing-library/react';
import Btn from './Btn';

describe('Btn component testing', () => {

    it('Should...', () => {
    /* arrange */

    /* screen.debug();  */

    /* ici creation spy pour espionner le click */
    render(<Btn click={()=>{}} />);

    /* assert */
    /*  expect(screen.getByText()).toBeInTheDocument(); */
    });
});
