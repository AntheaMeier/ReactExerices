import {useState} from 'react';
import { Task } from '../App';
import { MyAddButton } from './MyAddButton';
import { MyTextfield } from './MyTextfield';



interface TaskCreatorProps {
  /* onClick: (arg: string) => void */
  onClick: (arg: Task ) => void
  }

  
function TaskCreator({ onClick }: TaskCreatorProps) {
const [taskTextValue_inTC, storeTaskTextValue_inTC] = useState(''); //needed for the textfield


  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield 
        valueProp={taskTextValue_inTC}
        updateFnProp={storeTaskTextValue_inTC} 
        />
    

      <MyAddButton 
        label='add it to the Checklist'
        clickHandler = {() =>  onClick({inputs:taskTextValue_inTC, checked: false})} //extends the userInput array with the latest input
        />


      
      
      </div>
    );
  }

  export {TaskCreator}