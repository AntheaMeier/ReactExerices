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
          onChange={(event)=>{
            setTextValue(event.target.value)
            updateFnProp(event.target.value)
            console.log(event.target.value)
          }}
      />
    </div>
  );
}

export {MyTextfield2}