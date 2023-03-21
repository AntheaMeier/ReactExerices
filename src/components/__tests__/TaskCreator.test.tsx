import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import { act } from "react-dom/test-utils";
import { TaskCreator } from '../TaskCreator';

describe("TaskCreator component", () => {
    it("should render TaskCreator component correctly", async () => {
        
        const clickHandler = jest.fn();
        const user = userEvent.setup();
        const promise = Promise.resolve() // attempt to resolve the warp in act() warning with a mocked return value -> didn't work
        
        render(<TaskCreator 
            onClick={clickHandler} 
            />);

        // to check whether myTextfield exists -> works
        const elementTextField = screen.getByPlaceholderText('What is your next task?');
        expect (elementTextField).toBeInTheDocument();
        
        // to mock typing 'a' into the Textfield 
           /* await user.type(elementTextField,'a'); */ // -> caused the "wrap in act() warning"
           /* await waitFor(()=> expect(user.type(elementTextField,'abc'))); */ // -> helped with the act() warning, but isn't needed anymore
        user.type(elementTextField,'abc');
        await waitFor(()=> expect(elementTextField).toHaveValue('abc'));
               
       
        // to check whether my button is enabled -> works
        const elementButton = screen.getByRole('button', { name: 'add new task' }); 
        expect(elementButton).not.toBeDisabled();

        user.click(elementButton);
        await waitFor(()=> expect (clickHandler).toHaveBeenCalledTimes(1));
     
        // to check whether the right value of the Textfield has been passed -> works
        expect (clickHandler).toHaveBeenCalledWith({
            taskName: 'abc',
            taskCheckedValue: false,
          }); 

        // to check whether the Textfield VALUE has been emptied afterwards -> works
        await waitFor(()=> expect(elementTextField).toHaveValue('')); 
        
    });
});


// these tests pass as long 86-91 are commented out and the act warning still appears refering to to the onChange handler within MyTextfield
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { TaskCreator } from '../TaskCreator';

// describe('TaskCreator component', () => {
//   test('should render TaskCreator component correctly', async ()  => {
//     render(<TaskCreator onClick={() => {}} />);

//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });

//   test('should enable button when text is entered into text field', async () => {
//     render(<TaskCreator onClick={() => {}} />);
//     const user = userEvent.setup();

//     const textField = screen.getByRole('textbox');
//     const addButton = screen.getByRole('button', { name: 'add new task' });

//     expect(addButton).toBeDisabled();
    
//     await user.type(textField, 'a'); // user types 'a'
//     expect(addButton).not.toBeDisabled(); // button get enabled
//     expect(textField).toHaveValue('a'); // text field has the value 'a'
//   });

//   test('should call onClick handler with task object when add button is clicked', async () => {
//     const handleClick = jest.fn();
//     render(<TaskCreator onClick={handleClick} />);

//     const textField = screen.getByRole('textbox');
//     const addButton = screen.getByRole('button');

//     userEvent.type(textField, 'a');
//     userEvent.click(addButton);

//     /* await waitFor(() => {
//       expect(handleClick).toHaveBeenCalledWith({
//         taskName: 'a',
//         taskCheckedValue: false,
//       });
//     }); */
//   });

//   test('should reset text field value after adding a task', async () => {
//     const handleClick = jest.fn();
//     render(<TaskCreator onClick={handleClick} />);

//     const textField = screen.getByRole('textbox');
//     const addButton = screen.getByRole('button', { name: 'add new task' });

//     userEvent.type(textField, 'a');
//     userEvent.click(addButton);

//     await waitFor(() => {
//       expect(textField).toHaveValue('');
//     });
//   });

//   test('should not call onClick handler when add button is clicked with empty text field', async () => {
//     const handleClick = jest.fn();
//     render(<TaskCreator onClick={handleClick} />);

//     const addButton = screen.getByRole('button');

//     userEvent.click(addButton);

//     expect(handleClick).not.toHaveBeenCalled();
//   });
// });


