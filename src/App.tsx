import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';
import {useState} from 'react';
import {Header} from './stories/Header';
import {Button} from './stories/Button';
import {MyTextfield} from './components/MyTextfield';
import {MyCountClicksButton} from './components/MyCountClicksButton';
import {MyAddButton} from './components/MyAddButton';


function App() {

  const [userInputs, setUserInputs] = useState<string[]>([]);

  function updateUserInputs(userInput: string){
    const userInputsCopy=[...userInputs]
    userInputsCopy.push(userInput)
    setUserInputs(userInputsCopy)
  }
  console.log('userInputs:', userInputs)

  /* for MTf1 instead of line 14-21:
  const [input, setInput] = useState(''); */

  return (
  
    <div className="App"> {/* its centred */}
      <h1>Own Components</h1>
      <header className="App-header"> {/* white text on blue background */}

      <h2>
        1. Component: MyTextField
      </h2>
      <p>
        This component is based on an input element of the type text, <br/>
        which prints on the console the input value currently <br/>
        entered using an onChange function within its <b>updateFn</b> prop <br/>
        and the typed in input for its <b>value</b> prop.
      </p>
        <MyTextfield
          /* value={textValue}   stays off, was a step in between MTf1-6*/

          updateFn={updateUserInputs} 

          /* for MTf1:
          value={input}
          updateFn={setInput}  */
        />
        {/* <h3>You have typed {onClick={setInput}} into the textfield above.</h3> */}
        <div style={{border:'1px solid black'}}></div>

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
