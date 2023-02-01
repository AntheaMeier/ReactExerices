import {useState} from 'react';
import { Task } from '../App';
import { MyAddButton } from './MyAddButton';
import { MyTextfield } from './MyTextfield';



interface TaskCreatorProps {
  onClick: (arg: Task ) => void
  }
 
function TaskCreator({ onClick }: TaskCreatorProps) {
const [taskName, setTaskName] = useState(''); 


  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield 
        value={taskName}
        onChangeHandler={setTaskName} 
        />
    

      <MyAddButton 
        label='add new task'
        clickHandler = {() =>  onClick({taskName: taskName, taskCheckedValue: false})} //extends the taskList array with the latest taskName and setting the initial boolean to false
        />                                                                              


      
      
      </div>
    );
  }

  export {TaskCreator}