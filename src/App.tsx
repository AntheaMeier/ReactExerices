import { useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { MyTextfield } from './components/MyTextfield';
import { MyTextfield2 } from './components/MyTextfield2';
import { MyCountClicksButton } from './components/MyCountClicksButton';
import { MyAddButton } from './components/MyAddButton';
import { MyCheckbox } from './components/MyCheckbox';


//my_checkbox branch

//interface to be used in the hook for the taskList with objects Array
export interface Task {
  checked: boolean;
  inputs: string;
};

function App() {

  /* for showing the single component MTf instead of line 18-25: */
  const [taskTextValue_inApp, storeTaskTextValue_inApp] = useState(''); 

  /* a useState hook, collecting inputs in an array (uiA) and for showing the single component MTf2*/
  const [userInputs, setUserInputs] = useState<string[]>([]); 

  function updateUserInputs(userInput: string){  // my function updateUserInputs receives a parameter in form of a string value
    const userInputsCopy=[...userInputs]        // declartion of an Array (uiA-Copy) containing the content of uiA
    userInputsCopy.push(userInput)        // uiA-Copy extended by the functions parameter containing the currrent input
    setUserInputs(userInputsCopy)         // exchanging the former uiA with the extended uiA-Copy
  }
   /*  console.log('userInputs:', userInputs)  */  // shows the new AA, which got extended by the copy



  /* anonymous without interface or type 
  const [tasks, setTasks] = useState<{input: string, checked: boolean }[]>([]); 
  function createTask(task: {checked: boolean, inputs: string}){
    return task;
  } */


  /* -----------------------------------------------------------------------------
  for creating an array full of task objects containing a string and a boolean */
  

  /* function createTask(task: Task){
    return task;
  } */

  const [taskList, setTaskList] = useState<Task[]>([]);
  
  function createTaskInList(newTask: Task){ 
    console.log('Updated task arguments:',arguments)
    const newTaskList=[...taskList]     // creating a copy of taskList[]     
    newTaskList.push(newTask)           // adding the new taks into this copy - creates a new task
    setTaskList(newTaskList)            //putting the values of this extended copy into the original task list
  }
  console.log('Updated task list:', taskList)

  function updateTaskList(modifiedTask: Task, index: number){
    const copiedTaskList=[...taskList] 
    copiedTaskList[index]= modifiedTask
    setTaskList(copiedTaskList) 
  }
  

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}

      <h2>
        TaskCreator (a joined Component)
      </h2>
      <p>
        This component combines so far: <br/>
        MyTextField and MyAddButton <br/>
      </p>

      <TaskCreator 
          /* onClick={updateUserInputs}  */ 
          onClick={createTaskInList}     
          />

        <h2>
        My Checklist 
        </h2>
        <ul style={{border:'2px solid white', 
                    color: 'white',
                    textAlign:'left', 
                    listStyleType: 'none', 
                    margin: '0',
                    padding: '5%'}}
          

              >{taskList.map((eachArrayElement, index)=> 
              <li key={index}> 
                <label>
                  <MyCheckbox
                    checkedValue={eachArrayElement.checked}
                    clickHandler={(newCheckedValue: boolean) => updateTaskList({... eachArrayElement, checked: newCheckedValue }, index) }
                  />
                  {eachArrayElement.inputs}
                </label> 
              </li>)}
        </ul>
        
       
      {/* Aim:
  
      change the Userinput Array into a task Array, each Elemnt ist not just a string,
      but has a text(string) and a state(checked or unchecked)
      
      the aim is that we change the style of the checked list items, eg. crossed out or being brighter
      and we will need a onChange Prop, which changes the checked prop*/}
      
     <div style={{paddingTop:'100px'}}>

      <h1>
        Single Components
      </h1>

      <h2>
        1. Component: MyTextField
      </h2>
      <p>
        This component is based on an input element of the type text, <br/>
        which prints on the console the input value currently <br/>
        entered using an onChange function within its <b>updateFn</b> prop <br/>
        and the typed in input for its <b>value</b> prop.
      </p>

      <MyTextfield // works with a hook
          valueProp={taskTextValue_inApp}
          updateFnProp={storeTaskTextValue_inApp} 
      />
      <span>Textfield using a hook</span>

      <MyTextfield2 // works with a function based on a hook
          updateFnProp={updateUserInputs} 
      />
      <span>Textfield2 using a function based a hook</span>
        

      <h2>
        2. Component: MyAddButton
      </h2>
      <p>
        This component is based on a simple button element, which displays <br/>
        the value of the input element of the textfield above directly <br/>
        underneath it when clicking the button. Hence the first and second <br/>
        component are connected.
      </p>
 
        <MyAddButton
          label='Click to display value of the first component!'
          clickHandler={() => undefined}
        />
    

      <h2>
        3. Component: MyCountClicksButton
      </h2>

      <p>
        This component is based on a simple button element, which displays <br/>
        the total amount of clicks when clicking on it.
      </p>
        <MyCountClicksButton/>

        <h2>
        4. Component: MyCheckbox
      </h2>
        {/* <MyCheckbox/> */}
     
     
     </div> {/* space before the single components */}    
    </header> 
   </div> 
 );
}



export default App;

