import { useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { MyCheckbox } from './components/MyCheckbox';


//task_creator_clean_up branch

//in January: check both array funtions and the arguments used for MyCheckList

//interface to be used in the hook for the taskList array full of objects
export interface Task {
  taskName: string;
  taskCheckedValue: boolean;
  
};

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  
  //for adding new tasks
  function addingNewTasks(newTask: Task){ 
    console.log('shows the new task added to MyChecklist using the addButton:', arguments)
    const extendedTaskList=[...taskList]     // creating a pure copy of taskList[]     
    extendedTaskList.push(newTask)           // adding the new taks into this copy - creates a new task
    setTaskList(extendedTaskList)            // storing in taskList the added task
  }
  console.log('Shows taskList after adding a new task', taskList)

  //for changing the boolean value by checking or unchecking
  function updatingCheckedValues(updatedTask: Task, index: number){
    const updatedTaskList=[...taskList] // creating a pure copy of taskList[] 
    updatedTaskList[index]= updatedTask  // put the updatedObject value from the parameter into the index passed through the parameter
    setTaskList(updatedTaskList)      // storing in taskList the new checkedValue of the updated task
  }
  console.log('Shows taskList after changing checks:', taskList)
  

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}
      
      <h2>
        TaskCreator Component
      </h2>

        <TaskCreator 
          onClickProp={addingNewTasks}     
        />

      <h2>
        My Checklist Component
      </h2>
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
                    checkboxValueProp={task.taskCheckedValue}
                    checkboxClickHandlerProp={(newCheckedValue: boolean) => updatingCheckedValues({... task, taskCheckedValue: newCheckedValue }, index) }
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

        The TaskCreator component combines in itself: <br/>
        - MyTextField and<br/>
        - MyAddButton, <br/>
        <br/>
        which both use the array of objects <br/>
        called taskList declared in app.tsx.<br/>
        <br/>
        <br/>
        In app.tsx are 2 functions: A addingNewTasks, which is passed through <br/>
        when calling TaskCreator and B updatingCheckedValues, which is passed through <br/>
        when calling MyCheckbox.<br/>
        <br/>
        All coponents starting with "My" do not declare own variables and only use their props. <br/>
        Only TaskCreator uses a Hook to declare a taskName value and a set method for implementing  <br/>
        MyTextfield. <br/>
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

