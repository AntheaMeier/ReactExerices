import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';
import {useState} from 'react';
import {Header} from './stories/Header';
import {Button} from './stories/Button';
import {TaskCreator} from './components/TaskCreator';
import {MyTextfield1} from './components/MyTextfield1';
import {MyTextfield2} from './components/MyTextfield2';
import {MyCountClicksButton} from './components/MyCountClicksButton';
import {MyAddButton} from './components/MyAddButton';


function App() {

  /* for MTf1 instead of line 18-25: */
  const [input, setInput] = useState(''); 

  /* for MTf2 instead of l.15 or l.21*/
  const [userInputs, setUserInputs] = useState<string[]>([]); // a useState hook, collecting inputs in an array (uiA)

  function updateUserInputs(userInput: string){  // my function updateUserInputs receives a parameter in form of a string value
    const userInputsCopy=[...userInputs]        // declartion of an Array (uiA-Copy) containing the content of uiA
    userInputsCopy.push(userInput)        // uiA-Copy extended by the functions parameter containing the currrent input
    setUserInputs(userInputsCopy)         // exchanging the former uiA with the extended uiA-Copy
  }
  /* next line only for MTf2*/
    console.log('userInputs:', userInputs)   // shows the new AA, which got extended by the copy

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}

      <h2>
        joined Component: TaskCreator 
      </h2>
      <p>
        This component combines MyTextField and MyAddButton <br/>
      </p>

      <TaskCreator   
          label='Click to show the value of left textfield below!'
          onClick={updateUserInputs}
      />

      {/* first attempt with Maja to connect first 2 components
        <h3>You have typed {onClick={user}} into the textfield above.</h3> */}
        <ul style={{border:'1px solid black'}}>{userInputs.map((text)=> <li>{text}</li>)}</ul>

      


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
          valueProp={input}
          updateFnProp={setInput} 
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
    





  <div style={{paddingTop:'100px'}}>

      <h2>
        3. Component: MyCountClicksButton
      </h2>

      <p>
        This component is based on a simple button element, which displays <br/>
        the total amount of clicks when clicking on it.
      </p>

        {/* <MyCountClicksButton>Click me to display the added value!</MyCountClicksButton> */}
        
        <MyCountClicksButton/>
  </div>
        
      </header> 
    </div> 
  );
}



export default App;
