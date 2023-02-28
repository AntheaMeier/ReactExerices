import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import { TaskCreator } from '../TaskCreator';

describe("TaskCreator component", () => {
    it("should render TaskCreator component correctly", async () => {
        
        const clickHandler = jest.fn();
        const user = userEvent.setup();
        
        
        render(<TaskCreator 
            onClick={clickHandler} 
            />);

        const elementTextField = screen.getByPlaceholderText('What is your next task?');
        expect (elementTextField).toBeInTheDocument();

        const elementButton = screen.getByRole('button'); // to get the DOM element of the role button
        expect (elementButton).toBeInTheDocument();

        fireEvent.change(elementTextField, {target: { value: 'aaa' }});

        await user.click(elementButton);
        expect(elementTextField).toHaveValue('aaa')
        /* expect (clickHandler).toHaveBeenCalledWith('A'); */
        expect (clickHandler).toHaveBeenCalledTimes(1);
        
        
        
        
        
        /* const elementTextfield = screen.getByRole( 'textbox'); // to get the DOM element of the role textbox
        expect (elementTextfield).toBeInTheDocument();

        const elementButton = screen.getByRole('button'); // to get the DOM element of the role button
        expect (elementButton).toBeInTheDocument();

        
        expect (clickHandler).toHaveBeenCalledTimes(0);
        await user.click(elementButton);
        expect (clickHandler).toHaveBeenCalledTimes(1); */
        
        
        
    });
});


