import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MyAddButton } from '../MyAddButton';

describe("MyAddButton component", () => {
    it("should render MyAddButton component correctly", () => {
        
        const clickHandler = jest.fn();
        
        render(<MyAddButton 
            button_title={'abc'} 
            clickHandler={clickHandler} />);
        
        const elementButton = screen.getByRole('button', {name:'abc'}); // to get the DOM element of the role button
        expect (elementButton).toBeInTheDocument();
        
        expect (clickHandler).toHaveBeenCalledTimes(0);
        fireEvent.click(elementButton);
        expect (clickHandler).toHaveBeenCalledTimes(1);
    });
});

