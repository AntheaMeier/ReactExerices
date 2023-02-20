import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MyCheckbox } from '../MyCheckbox';

describe("MyCheckbox component", () => {
    it("should render MyCheckbox component correctly", () => {
        
        const onChangeHandler = jest.fn();
        
        render(<MyCheckbox 
            checked={false} 
            onChangeHandler={onChangeHandler} />);
        const element = screen.getByRole('checkbox'); // to get the DOM element of the role checkbox       
        expect (element).toBeInTheDocument();
        
        expect (onChangeHandler).toHaveBeenCalledTimes(0);
        fireEvent.click(element);
        expect (onChangeHandler).toHaveBeenCalledTimes(1);

    });
});

