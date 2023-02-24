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
    
    const MY_FIRST_INPUT = 'a';
    const MY_SECOND_INPUT = 'b'; 
    const user = userEvent.setup();

    const onChangeHandler = jest.fn((typedInput) => typedInput);
  
    render(<MyTextfield 
        value={MY_FIRST_INPUT} 
        onChangeHandler={onChangeHandler} />
    );
  
   const input = screen.getByRole('textbox', /* {name: MY_FIRST_INPUT} */ ); 
   /* const input = screen.getByDisplayValue('MY_FIRST_INPUT'); */
    
   expect(input).toBeInTheDocument();

    /* await user.type(input,'{MY_SECOND_INPUT}'); */
   

    /* expect(
        screen.getByDisplayValue(`${MY_FIRST_INPUT} ${MY_SECOND_INPUT}`)
    ).toBeInTheDocument(); */

    
    expect(
        screen.getByDisplayValue(`a`)).toBeInTheDocument();

   /*  input.blur();  not applicable*/
    
    expect(onChangeHandler).toBeCalledTimes(0);
  });
