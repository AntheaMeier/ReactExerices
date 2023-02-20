
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCreator } from '../TaskCreator';

describe("TaskCreator component", () => {
    it("should render TaskCreator component correctly", () => {
        
        const clickHandler = jest.fn();
        
        render(<TaskCreator 
            onClick={clickHandler} 
            />);

        const elementTextfield = screen.getByRole( 'textbox'); // to get the DOM element of the role textbox
        expect (elementTextfield).toBeInTheDocument();

        const elementButton = screen.getByRole('button'); // to get the DOM element of the role button
        expect (elementButton).toBeInTheDocument();

        
        expect (clickHandler).toHaveBeenCalledTimes(0);
        fireEvent.click(elementButton);
        expect (clickHandler).toHaveBeenCalledTimes(1);
    });
});

