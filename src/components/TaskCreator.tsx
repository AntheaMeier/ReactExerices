import {useState} from 'react';

interface TaskCreatorProps {
  
    updateFn: (arg: string) => void
  }
  
  function TaskCreator({updateFn}: TaskCreator) {
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

  export {TaskCreator}