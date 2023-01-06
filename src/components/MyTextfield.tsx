
interface MyTextfieldProps {
  textfieldInputProp: string, 
  textfieldUpdateFnProp: (arg: string) => void
}

function MyTextfield({textfieldInputProp, textfieldUpdateFnProp}: MyTextfieldProps) {

  return (
    <div>
      <input 
          placeholder= "type new task"
          type="text" 
          value={textfieldInputProp}
          onChange={(event)=>{
            textfieldUpdateFnProp(event.target.value)
            
            console.log(event.target.value)
          }}
      />
    </div>
  );
}

export {MyTextfield}