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


 /*  ------------------------ MTf6 -----------------------------------------

  That worked with UserInput Aarry: */



interface MyTextfield6Props {
  
    updateFn: (arg: string) => void
  }
  
  function MyTextfield6({updateFn}: MyTextfield6Props) {
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

  export {MyTextfield6}

 /*  --------------------------- MTf5 -------------------------------------

  that worked as well but without UI Array */


  interface MyTextfield5Props {
  
    updateFn: (arg: string) => void
  }
  
  function MyTextfield5({updateFn}: MyTextfield5Props) {
    const [textValue, setTextValue] = useState('');
    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            placeholder="type something"
            onChange={(event)=>{
              setTextValue(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield5}

   /*  ----------------------------- MTf4 -----------------------------------

  works - maybe the same as above just with value in the interface */

  interface MyTextfield4Props {
    value: string, 
    updateFn: (arg: string) => void
  }
  
  function MyTextfield4({value, updateFn}: MyTextfield4Props) {
    const [textValue, setTextValue] = useState('');
    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            placeholder="type something"
            onChange={(event)=>{
              setTextValue(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield4}

     /*  ------------------------------ MTf3 ----------------------------------

  doesn work, cant type into the textfield and cant delete
  but the console shows event */

  interface MyTextfield3Props {
    value: string, 
    updateFn: (arg: string) => void
  }
  
  function MyTextfield3({value, updateFn}: MyTextfield3Props) {
  const [textValue, setTextValue] = useState('');
    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            placeholder="type something"
            onChange={(event)=>{
              updateFn(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield3}

  /*  ------------------------------- MTf2 ---------------------------------

  seems to work, have to check wheter its differnet to MTf6 */

  interface MyTextfield2Props {
    value: string, 
    updateFn: (arg: string) => void
  }
  
  function MyTextfield2({value, updateFn}: MyTextfield2Props) {
    /* const [textValue, setTextValue] = useState('');    is not needed here*/
    return (
      <div>
        <input 
            type="text" 
            value={value}
            placeholder="type something"
            onChange={(event)=>{
              updateFn(event.target.value) // in App.tsx a seperate function called updateUserInputs
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield2}

  /*  ------------------------------- MTf1 ---------------------------------

  seems to work as it works as it did without our addjustments on Wednesday,
  Attention: in App.tsx have the line 190 und instead of Array function have 
  alternative props for value and updateFn */

  interface MyTextfield1Props {
    value: string, 
    updateFn: (arg: string) => void
  }
  
  function MyTextfield1({value, updateFn}: MyTextfield1Props) {
    /* const [input, setInput] = useState('');  already in the app.tsx*/

    return (
      <div>
        <input 
            type="text" 
            value={value}
            placeholder="type something"
            onChange={(event)=>{
              updateFn(event.target.value)
              console.log(event.target.value)
            }}
        />
      </div>
    );
  }

  export {MyTextfield1}
