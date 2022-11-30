import {useState} from 'react';
import { MyTextfield1 } from './MyTextfield1';

interface TaskCreatorProps {
  /* valueProp: string, 
  updateFnProp: (arg: string) => void */
  // both props are taken out as useState hook is inside the component's function
  label: string, 
  onClick: (arg: string) => void,
  }

  
function TaskCreator({ label, onClick}: TaskCreatorProps) {
const [textValue, setTextValue] = useState(''); //needed for the textfield

  return (
    <div>
      <MyTextfield1 
        updateFnProp={setTextValue} 
        valueProp={textValue}      />
    
      <span>
      <button
        onClick = {() => onClick(textValue)} // here a traget would be the button, which has no value(input) beside the lable text
        >{label}
        </button>
      </span>
        
        
      
      </div>
    );
  }

  export {TaskCreator}