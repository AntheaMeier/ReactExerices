import {useState} from 'react';

interface TaskCreatorProps {
  /* valueProp: string, 
  updateFnProp: (arg: string) => void */
  label: string, 
  onClick: () => void,
  }
  
  function TaskCreator({/* valueProp,updateFnProp */ label, onClick}: TaskCreatorProps) {
    const [textValue, setTextValue] = useState(''); //noted to put it into the TaskCreator, but do not know how 

    return (
      <div>
        <input 
            type="text" 
            value={textValue}
            onChange={(event)=>{
              setTextValue(event.target.value)
              /* updateFnProp(event.target.value) */
              console.log(event.target.value)
            }}
        />
        <button
          onClick = {() => onClick()} 
          >{label}</button>
      </div>
      
    );
  }

  export {TaskCreator}