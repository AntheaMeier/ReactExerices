import {useState} from 'react';


 /*  --------------------------- MTf7 --------------------------------------

  this didn't work, already starting to change it into TaskCreator */

interface MyTextfield7Props {
  
    updateFn: (arg: string) => void
  }
  
  function MyTextfield7({updateFn}: MyTextfield7Props) {
    /* const [textValue, setTextValue] = useState('');   go to TaskCreator */
    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            placeholder="type something"
            onChange={(event)=>{
              setTextValue(event.target.value)
              updateFn(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield7}


 /*  ------------------------ MTf2 -----------------------------------------

  That worked with UserInput Array: */



interface MyTextfield2Props {
  
    updateFn: (arg: string) => void
  }
  
  function MyTextfield2({updateFn}: MyTextfield2Props) {
    const [textValue, setTextValue] = useState('');
    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            placeholder="type something"
            onChange={(event)=>{
              setTextValue(event.target.value)
              updateFn(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield2}

 

  /*  ------------------------------- MTf1 ---------------------------------

  works as it did without our addjustments on Wednesday,
  Attention: in App.tsx have the "const [input, setInput]" hook instead of an
  Array function to show on the console
  
  differnce to MTf2, it has the hook in the App.tsx, so the MTf1 works without 
  "const [textValue, setTextValue]" and has the "const [input, setInput]" in the App.tsx
  hence MTf2 has a line more in the onChange function but a prop less in the interface */

  interface MyTextfield1Props {
    valueProp: string, 
    updateFnProp: (arg: string) => void
  }
  
  function MyTextfield1({valueProp, updateFnProp}: MyTextfield1Props) {

    return (
      <div>
        <input 
            type="text" 
            value={valueProp}
            onChange={(event)=>{
              updateFnProp(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield1}
