import {useState} from 'react';
import { Task } from '../App';
import { MyAddButton } from './MyAddButton';
import { MyTextfield } from './MyTextfield';



interface TaskCreatorProps {
  onClickProp: (arg: Task ) => void
  }
 
function TaskCreator({ onClickProp }: TaskCreatorProps) {
const [taskName_TaskCreator_value, setTaskName] = useState(''); 


  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield 
        textfieldInputProp={taskName_TaskCreator_value}
        textfieldUpdateFnProp={setTaskName} 
        />
    

      <MyAddButton 
        buttonLabelProp='add new task'
        buttonClickHandlerProp = {() =>  onClickProp({taskName:taskName_TaskCreator_value, taskCheckedValue: false})} //extends the userInput array with the latest input and seeting the boolean to false initially
        />                                                                              


      
      
      </div>
    );
  }

  export {TaskCreator}