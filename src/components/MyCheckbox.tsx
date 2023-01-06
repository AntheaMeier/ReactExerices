import { useState } from 'react';

interface MyCheckboxProps {
  
  checkboxValueProp: boolean
  checkboxClickHandlerProp: (arg: boolean) => void
  
  }

function MyCheckbox({ checkboxClickHandlerProp, checkboxValueProp }: MyCheckboxProps) { 

  
  return (
      <input
      type="checkbox"
      checked={checkboxValueProp}
      onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
        checkboxClickHandlerProp(event.target.checked)

        console.log(event.target.checked)
      }}
      
       />  
    );
  }

  export {MyCheckbox}