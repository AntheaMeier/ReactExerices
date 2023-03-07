import {useState} from 'react';
import { Task } from '../App';
import { MyAddButton } from './MyAddButton';
import { MyTextfield } from './MyTextfield';



interface TaskCreatorProps {
  onClick: (arg: Task ) => void
  }
 
function TaskCreator({ onClick }: TaskCreatorProps) {
const [taskName, setTaskName] = useState(''); 

const handleClick = () => {
  if (taskName) {
    onClick({taskName: taskName, taskCheckedValue: false}); // pass the taskName and initial checked value to the onClick handler
    setTaskName(''); // reset the text field value "taskName" after adding a task
  }
};

const isButtonDisabled = taskName.length === 0;

  return (
    <div
    style={{display:'inline-flex'}}
    >
      <MyTextfield 
        value={taskName}
        onChangeHandler={setTaskName} 
        />
    

      <MyAddButton 
        button_title='add new task'
        //new to fix the integration test:
        clickHandler={handleClick}
        disabled={isButtonDisabled} // disables the button when taskName is empty
        /* it was before fixing:
        clickHandler = {() =>  onClick({taskName: taskName, taskCheckedValue: false})}  *///extends the taskList array with the latest taskName and setting the initial boolean to false
        
        />                                                                              
      </div>
    );
  }

  export {TaskCreator}