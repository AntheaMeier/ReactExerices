import React from 'react';
import { render, screen } from "@testing-library/react";
import { MyAddButton } from '../MyAddButton';

describe("MyAddButton component", () => {
    it("should render MyAddButton component correctly", () => {
        render(<MyAddButton 
            button_title={''} 
            clickHandler={function (): void {
            throw new Error('Function not implemented.');
            } } />);
        const element = screen.getByRole('button');
        expect (element).toBeInTheDocument();
    });
});

it("should do something when clicked", () => {
    render(<MyAddButton 
        button_title={''} 
        clickHandler={function (): void {
        throw new Error('Function not implemented.');
        } }  />);
    const buttonElement = screen.getByRole("button");
    MouseEvent.click(buttonElement);
});