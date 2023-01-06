import { useState } from 'react';

interface MyCheckboxProps {
  
  checked: boolean
  onChangeHandler: (arg: boolean) => void
  
  }

function MyCheckbox({ onChangeHandler, checked }: MyCheckboxProps) { 

  
  return (
      <input
      type="checkbox"
      checked={checked}
      onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
        onChangeHandler(event.target.checked)

        console.log(event.target.checked)
      }}
      
       />  
    );
  }

  export {MyCheckbox}