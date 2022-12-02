import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';
import { useState } from 'react';
import { TaskCreator } from './components/TaskCreator';
import { MyTextfield1 } from './components/MyTextfield1';
import { MyTextfield2 } from './components/MyTextfield2';
import { MyCountClicksButton } from './components/MyCountClicksButton';
import { MyAddButton } from './components/MyAddButton';
import { MyCheckbox } from './components/MyCheckbox';
import { string } from 'prop-types';


function App() {

  /* for showing the single component MTf1 instead of line 18-25: */
  const [symbol_inApp, storeSymbols_inApp] = useState(''); 

  /* for the TaskCreator plus the creation of MyChecklist by button click and for showing the single component MTf2*/
  const [userInputs, setUserInputs] = useState<string[]>([]); // a useState hook, collecting inputs in an array (uiA)

  function updateUserInputs(userInput: string){  // my function updateUserInputs receives a parameter in form of a string value
    const userInputsCopy=[...userInputs]        // declartion of an Array (uiA-Copy) containing the content of uiA
    userInputsCopy.push(userInput)        // uiA-Copy extended by the functions parameter containing the currrent input
    setUserInputs(userInputsCopy)         // exchanging the former uiA with the extended uiA-Copy
  }
  /* next line only for MTf2*/
    console.log('userInputs:', userInputs)   // shows the new AA, which got extended by the copy


  /*  for creating an arry full of task objects containing a string and a boolean*/
  const [checked, setChecked] = useState<boolean>(false); // a useState hook, to determine whether a task is checked or unchecked


  /* for creating an arry full of task objects containing a string and a boolean */
  

  //interface to be used in thge hook below
  type task = {
    checked: boolean;
    inputs: string;
  };

  const [tasks, setTasks] = useState<task[]>([]);
  
  /* const [tasks, setTasks] = useState<{input: string, checked: boolean }[]>([]); */ // a useState hook, collecting inputs in an array (uiA)
  
  // that was for the pure string array: const [userInputs, setUserInputs] = useState<string[]>([]);
  
  function createTask(checked, input ){ 
    const task= {checked: false, input: ''} 
    /* return task;    - why not? */              
  }

  // next Wednesday: Create a new task! And then write the updateTask function



  // needs to be fixing:
  function updateTasks(task:{input: string, checked: boolean}){ 
    const tasksCopy=[...tasks]        
    tasksCopy.push(task)        
    setTasks(tasksCopy)         
  }
  console.log('tasks:', tasks)
    
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
          onClick={updateTasks}     
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
          

              >{userInputs.map((eachArrayElement)=> 
              <li> 
                <label>
                  <MyCheckbox/>
                  {eachArrayElement}
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

      <MyTextfield1 // works with a hook
          valueProp={symbol_inApp}
          updateFnProp={storeSymbols_inApp} 
      />
      <span>Textfield1 using a hook</span>

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
          onClick={() => undefined}
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
        <MyCheckbox/>
     
     
     </div> {/* space before the single components */}    
    </header> 
   </div> 
 );
}



export default App;
