import {useState} from 'react';

interface MyTextfield2Props {
  
  updateFnProp: (arg: string) => void
}

function MyTextfield2({updateFnProp}: MyTextfield2Props) {
  const [textValue, setTextValue] = useState('');
  return (
    <div>
      <input 
          type="text" 
          value={textValue}
          placeholder='enter a new task'
          onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
            setTextValue(event.target.value) // target is the current input
            updateFnProp(event.target.value)
            console.log(event.target.value)
           
          }}
      />
    </div>
  );
}

export {MyTextfield2}