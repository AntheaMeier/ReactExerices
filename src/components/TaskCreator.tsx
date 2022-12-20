import {useState} from 'react';
import { Task } from '../App';
import { MyAddButton } from './MyAddButton';
import { MyTextfield } from './MyTextfield';



interface TaskCreatorProps {
  onClick: (arg: Task ) => void
  }
 
function TaskCreator({ onClick }: TaskCreatorProps) {
const [taskInputValue, storeTaskInputValue] = useState(''); 


  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield 
        textfieldInput={taskInputValue}
        textfieldUpdateFn={storeTaskInputValue} 
        />
    

      <MyAddButton 
        buttonLabel='add new task'
        buttonClickHandler = {() =>  onClick({inputs:taskInputValue, checked: false})} //extends the userInput array with the latest input and seeting the boolean to false initially
        />                                                                              


      
      
      </div>
    );
  }

  export {TaskCreator}