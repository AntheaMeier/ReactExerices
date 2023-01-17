import { useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { MyCheckbox } from './components/MyCheckbox';


//Clean_up after discussing all variable names with Maja

//interface to be used in the hook for the taskList array full of objects
export interface Task {
  taskName: string;
  taskCheckedValue: boolean;
  
};

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  
  //for adding new tasks
  function addNewTask(newTask: Task){ 
    console.log('shows the new task added to MyChecklist using the addButton:', arguments)
    const extendedTaskList=[...taskList]     // creating a shallow copy of taskList[]     
    extendedTaskList.push(newTask)           // adding the new taks into this copy - creates a new task
    setTaskList(extendedTaskList)            // storing in taskList the added task
    
    //to show the stringified Array - doesn't work
    /* const jsonTaskList = JSON.stringify(taskList)
    console.log('Showing the stringified Array',jsonTaskList) */

    window.localStorage.setItem('taskListKey', JSON.stringify(taskList)); // stores taskList in the local storage  in the shape fo strings
    
    /* const taskListFromLS = localStorage.getItem("taskListKey");  */
    // to get the stringified array from the LS
    /* console.log('Local Storage: ', taskListFromLS)  */
    //display array of strings on console

    window.localStorage.getItem(JSON.parse(JSON.stringify(taskList)));




  }
  console.log('Shows taskList after adding a new task', taskList)
  

  

  //for changing the boolean value by checking or unchecking
  function updateCheckedValue(updatedTask: Task, index: number){
    const updatedTaskList=[...taskList] // creating a shallow copy of taskList[] (internatlly are still the same references, only the ref to the array changed)
    updatedTaskList[index]= updatedTask  // put the updatedObject value from the parameter into the index passed through the parameter
    setTaskList(updatedTaskList)      // storing in taskList the new checkedValue of the updated task
  }
  console.log('Shows taskList after changing a checked value:', taskList)
  

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}
      
      <h2>
        A Checklist Component
      </h2>

        <TaskCreator 
          onClick={addNewTask}     
        />

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
                    checked={task.taskCheckedValue}
                    onChangeHandler={(newCheckedValue: boolean) => updateCheckedValue({... task, taskCheckedValue: newCheckedValue }, index) }
                  />
                  {task.taskName}
                </label> 
              </li>)}
        </ul>
        

        <span style={{border:'2px solid white', 
                    color: 'white',
                    textAlign:'center', 
                    marginTop: '50px',
                    padding: '5%'}}>
        
        Note: <br/>
        <br/>

        The Checklist component uses 2 components: <br/>
        - TaskCreator and<br/>
        - MyCheckbox, <br/>
        <br/>
        <br/>
        In app.tsx are 2 functions. A: addNewTask, which is used as a prop <br/>
        in TaskCreator and B: updateCheckedValue, which is used as a prop <br/>
        in MyCheckbox.<br/>

        The TaskCreator component combines in itself: <br/>
        - MyTextField and<br/>
        - MyAddButton, <br/>
        <br/>
        which both use the array of objects <br/>
        called taskList declared in app.tsx.<br/>
        <br/>
        
        <br/>
        All coponents starting with "My" do not declare own variables and only use their props. <br/>
        Which means they are stateless and are called pure components. Only TaskCreator uses a <br/>
        Hook to declare a taskName value and a set method for the value prop of MyTextfield. <br/>
        <br/>
        MyAddButton called in TaskCreator uses this taskName Value just used by MyTextfield within the <br/>
        TaskCreator und sets the initial boolean value fo the interface type Task to false.<br/>
        <br/>
      
      </span>
     

    
     
    </header> 
   </div> 
 );
}



export default App;

