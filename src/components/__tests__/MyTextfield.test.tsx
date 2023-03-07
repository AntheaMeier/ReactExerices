
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MyTextfield } from '../MyTextfield';

describe("MyTextfield component",() => {
    it("should render MyTextfield component correctly",() => {
        
        const onChangeHandler=jest.fn();
        
        render(<MyTextfield 
            value={'abc'} 
            onChangeHandler={onChangeHandler} />);

        const element = screen.getByRole( 'textbox'); // to get the DOM element of the role textbox
        expect (element).toBeInTheDocument();

        const inputNode = screen.getByPlaceholderText('What is your next task?');
        expect (inputNode).toBeInTheDocument();

    });
});



it('should display input value', async () => {
    
    
    const user = userEvent.setup();

    const onChangeHandler = jest.fn((typedInput) => typedInput);
  
    render(<MyTextfield 
        value={'a'} 
        onChangeHandler={onChangeHandler} />
    );
    
    expect(onChangeHandler).toBeCalledTimes(0);
    const textField = screen.getByPlaceholderText('What is your next task?'); 
    
    // mock tying a letter
    await user.type(textField,'b')

    //check whether the onChangeHandler has been called
    expect(onChangeHandler).toBeCalledTimes(1);

    //check whether the right value has been passed
    expect(onChangeHandler).toHaveBeenCalledWith('ab'); 

  });
