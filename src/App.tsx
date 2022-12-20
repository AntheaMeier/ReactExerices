import { useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { MyCheckbox } from './components/MyCheckbox';


//task_creator_clean_up branch

//in January: check both array funtions and the arguments used for MyCheckList

//interface to be used in the hook for the taskList array full of objects
export interface Task {
  checked: boolean;
  inputs: string;
};

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  
  //for adding new tasks
  function addNewTaskToTaskList(newTask: Task){ 
    console.log('shows the new task added to MyChecklist using the addButton:', arguments)
    const newTaskList=[...taskList]     // creating a copy of taskList[]     
    newTaskList.push(newTask)           // adding the new taks into this copy - creates a new task
    setTaskList(newTaskList)            //putting the values of this extended copy into the original taskList
  }
  /* console.log('Shows taskList after adding a new task', taskList) */

  //for changing the boolean value for checked
  function updateTaskList(modifiedTask: Task, index: number){
    const copiedTaskList=[...taskList] 
    copiedTaskList[index]= modifiedTask
    setTaskList(copiedTaskList) 
  }
  console.log('Shows updated taskList:', taskList)
  

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}

      <h2>
        TaskCreator
      </h2>
      

      <TaskCreator 
          onClick={addNewTaskToTaskList}     
          />

        <h3>
        My Checklist 
        </h3>
        <ul style={{border:'2px solid white', 
                    color: 'white',
                    textAlign:'left', 
                    listStyleType: 'none', 
                    margin: '0',
                    padding: '5%'}}
          

              >{taskList.map((task, index)=> 
              <li key={index}> 
                <label>
                  <MyCheckbox
                    checkboxValue={task.checked}
                    checkboxClickHandler={(newCheckedValue: boolean) => updateTaskList({... task, checked: newCheckedValue }, index) }
                  />
                  {task.inputs}
                </label> 
              </li>)}
        </ul>
         
      <p>
        The TaskCreator component is firstly used in the app.tsx <br/>
        and combines in itself: <br/>
        - MyTextField<br/>
        - MyAddButton <br/>
        <br/>
        Both of these components generate an array of string and <br/>
        boolean values called taskList[]<br/>
        <br/>
        The MyCheckbox component is secondly used in the app.tsx <br/>
        being based on the taskList array.
      </p>

    
     
    </header> 
   </div> 
 );
}



export default App;

