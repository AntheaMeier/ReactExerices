import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import { TaskCreator } from '../TaskCreator';

describe("TaskCreator component", () => {
    it("should render TaskCreator component correctly", async () => {
        
        const clickHandler = jest.fn();
        const user = userEvent.setup();
        
        render(<TaskCreator 
            onClick={clickHandler} 
            />);

        // to check whether myTextfield exists -> works
        const elementTextField = screen.getByPlaceholderText('What is your next task?');
        expect (elementTextField).toBeInTheDocument();
        
        // to mock typing 'testValue' into the Textfield -> works
        await user.type(elementTextField,'testValue');
        expect(elementTextField).toHaveValue('testValue')
        
        // to check whether myButton exists -> works
        const elementButton = screen.getByRole('button', { name: 'add new task' }); 
        expect (elementButton).toBeInTheDocument();

        // to check whether clickHandler has been called when clicking the button -> works
        await user.click(elementButton);
        expect (clickHandler).toHaveBeenCalledTimes(1);
     
        // to check whether the right value of the Textfield has been passed -> works
        expect (clickHandler).toHaveBeenCalledWith({
            taskName: 'testValue',
            taskCheckedValue: false,
          }); 

        // to check whether the Textfield VALUE has been emptied afterwards -> works
        expect(elementTextField).toHaveValue('')
    });
});


