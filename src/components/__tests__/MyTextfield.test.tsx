import { render, screen, fireEvent } from "@testing-library/react";
import { MyTextfield } from '../MyTextfield';

describe("MyTextfield component",() => {
    it("should render MyTextfield component correctly",() => {
        
        const onChangeHandler=jest.fn();
        
        render(<MyTextfield 
            value={'abc'} 
            onChangeHandler={onChangeHandler} />);
        const element = screen.getByRole('input', {name:'abc'}); // to get the DOM element of the role input
        expect (element).toBeInTheDocument();

    })
});