import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { validateHeaderValue } from 'http';
import { assert } from 'console';

/* importer UserEvent  */
import userEvent from '@testing-library/user-event';

/* Usign AAA Method :
Arrange: Prepare the class you want to test.
Act: Perform the action you are testing.
Assert: Check the result of the action you are testing (Expect...).*/


describe('App component testing', () => {
  /*   beforeEach(() => {
    
  }); */
  
  /*   beforeAll(() => {
    
  }); */

  it('Should display default value',()=>{
    /* arrange: afficher le composant */
    render(<App />);
    /* screen.debug(); */

    /* assert: verifier que la phrase s'affiche*/
    expect(screen.getByText(/le chiffre est 0/i)).toBeInTheDocument();

    /* assert: verifier que le bouton INCREMENTER s'affiche*/
    /* expect(screen.getByRole('button')).toBeInTheDocument(); */
    expect(screen.getByRole('button', {name:/INCREMENTER/i})).toBeTruthy();
  });
  
  it('Should incemente value by one when user click on the button', () => {
    /* arrange : */
    render(<App />);
    /* screen.debug();  */

    /* act : click btn */
    userEvent.click(screen.getByRole('button'));
    /* assert : verifier que la valeur a change */
    expect(screen.getByText(/le chiffre est 1/i)).toBeInTheDocument();

    /* act : click btn */
    userEvent.click(screen.getByRole('button'));
    /* assert : verifier que la valeur a change */
    expect(screen.getByText(/le chiffre est 2/i)).toBeInTheDocument();
    
  }); 
  
});




