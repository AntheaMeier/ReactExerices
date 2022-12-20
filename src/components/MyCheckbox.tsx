import { useState } from 'react';

interface MyCheckboxProps {
  
  checkboxValue: boolean
  checkboxClickHandler: (arg: boolean) => void
  
  }

function MyCheckbox({ checkboxClickHandler, checkboxValue }: MyCheckboxProps) { 

  
  return (
      <input
      type="checkbox"
      checked={checkboxValue}
      onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
        checkboxClickHandler(event.target.checked)
      }}
      
       />  
    );
  }

  export {MyCheckbox}