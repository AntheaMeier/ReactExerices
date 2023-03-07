import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import { act } from "react-dom/test-utils";
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
        
        // to mock typing 'a' into the Textfield -> causes the "wrap in act() warning"
        await user.type(elementTextField,'a');
        await waitFor(()=> expect(elementTextField).toHaveValue('a'));
       
       
        // to check whether my button is enabled -> works
        const elementButton = screen.getByRole('button', { name: 'add new task' }); 
        expect(elementButton).not.toBeDisabled();

        //to check whether clickHandler has been called when clicking the button -> works
        await act(async()=>{
        user.click(elementButton);
       })
       setTimeout(() => {
        expect(clickHandler).toHaveBeenCalledTimes(1);
      }, 100); // Wait for 100ms before checking the clickHandler
      

        // user.click(elementButton);
        // await waitFor(()=> expect (clickHandler).toHaveBeenCalledTimes(1));
     
        // to check whether the right value of the Textfield has been passed -> works
        expect (clickHandler).toHaveBeenCalledWith({
            taskName: 'a',
            taskCheckedValue: false,
          }); 

        // to check whether the Textfield VALUE has been emptied afterwards -> works
        await waitFor(()=> expect(elementTextField).toHaveValue('')); 
        
    });
});


