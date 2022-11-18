import {useState} from 'react';

interface MyTextfieldProps {
    value: string, 
    updateFn: (arg: string) => void
  }
  
  function MyTextfield({value, updateFn}: MyTextfieldProps) {
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

  export {MyTextfield}