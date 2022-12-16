import { useState } from 'react';

interface MyCheckboxProps {
  
  clickHandler: (arg: boolean) => void
  checkedValue: boolean
  
  }

function MyCheckbox({ clickHandler, checkedValue }: MyCheckboxProps) { 

  
  return (
      <input
      type="checkbox"
      checked={checkedValue}
      onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
        clickHandler(event.target.checked)
      }}
      
       />  
    );
  }

  export {MyCheckbox}