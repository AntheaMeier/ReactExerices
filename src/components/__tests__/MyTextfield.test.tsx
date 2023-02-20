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
    
    const MY_INPUT = 'my first task';
    const Changed_Input = 'another task'; 
    const user = userEvent.setup();

    const onChangeHandler = jest.fn((v) => v);
  
    render(<MyTextfield 
        value={MY_INPUT} 
        onChangeHandler={onChangeHandler} />
    );
  
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    await user.type(input, `[Space]${Changed_Input}`);

    expect(
        screen.getByDisplayValue(`${MY_INPUT} ${Changed_Input}`)
    ).toBeInTheDocument();

    /* input.blur(); */
    
    expect(onChangeHandler).toBeCalledTimes(1);
  });

