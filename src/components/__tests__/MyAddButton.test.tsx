import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MyAddButton } from '../MyAddButton';
import userEvent from '@testing-library/user-event';

describe("MyAddButton component", () => {
    it("should be disabled when the disable prop is true", () => { 
       render(<MyAddButton 
          button_title={'abc'} 
          clickHandler={jest.fn()} 
          disabled={true}
          />);
        
        const elementButton = screen.getByRole('button', {name:'abc'}); // to get the DOM element of the role button
        expect (elementButton).toBeDisabled();
        
    });

    it("should be enabled when the disable prop is false", async () => { 
        const user = userEvent.setup();
        const clickHandler = jest.fn();

        render(<MyAddButton 
           button_title={'abc'} 
           clickHandler={clickHandler} 
           disabled={false}
           />);
         
         const elementButton = screen.getByRole('button', {name:'abc'}); // to get the DOM element of the role button
         expect (elementButton).not.toBeDisabled();
         
        //check what happens when clicking the button
         expect (clickHandler).toHaveBeenCalledTimes(0);
        
         await user.click(elementButton);
         expect (clickHandler).toHaveBeenCalledTimes(1);
     });
});

