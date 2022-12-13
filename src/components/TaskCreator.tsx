import {useState} from 'react';
import { MyAddButton } from './MyAddButton';
import { MyTextfield1 } from './MyTextfield1';



interface TaskCreatorProps {
  /* onClick: (arg: string) => void */
  /* onClick: (arg: {}) => [] */
  /* onClick: (arg: {}) => JSX.Element */
  onClick: (argA: string, argB: boolean) => JSX.Element
  }

  
function TaskCreator({ onClick}: TaskCreatorProps) {
const [symbol_inTC, storeSymbols_inTC] = useState(''); //needed for the textfield


  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield1 
        valueProp={symbol_inTC}
        updateFnProp={storeSymbols_inTC} 
        />
    

      <MyAddButton 
        label='add it to the Checklist'
        onClick = {() =>  onClick(symbol_inTC, false)} //extends the userInput array with the latest input
        />


      
      
      </div>
    );
  }

  export {TaskCreator}