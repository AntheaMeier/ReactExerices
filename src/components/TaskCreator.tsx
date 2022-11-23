import {useState} from 'react';

interface TaskCreatorProps {
  /* valueProp: string, 
  updateFnProp: (arg: string) => void */
  // both props are taken out as useState hook is inside the component's function
  label: string, 
  onClick: (arg: string) => void,
  }

  
function TaskCreator({ label, onClick}: TaskCreatorProps) {
const [textValue, setTextValue] = useState(''); //needed for the textfield

  return (
    <div>
      <input 
          type="text" 
          value={textValue}
          onChange={(event)=>{ // event is a listener activated by onChange, creates a call back function
            setTextValue(event.target.value) // target is the current input
            console.log(event.target.value)
          }}
      />
    
      <button
        onClick = {() => onClick(textValue)} // here a traget would be the button, which has no value(input) beside the lable text
        >{label}
        </button>
        
        
        {/*target would be the button
        onClick={(event)=>{
          (event.target.value)  
        }}*/}
      
      </div>
    );
  }

  export {TaskCreator}