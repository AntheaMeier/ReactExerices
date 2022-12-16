import { useState } from 'react';
import { Task } from '../App';

interface MyCheckboxProps {
  /* checked: (arg: boolean ) => void */
  checked: boolean
  }

function MyCheckbox({ checked }: MyCheckboxProps) { 

  const [taskBooleanValue, storeTaskBooleanValue] = useState(false);
  return (
      <input
      type="checkbox"
      checked={taskBooleanValue}
      
       />  
    );
  }

  export {MyCheckbox}