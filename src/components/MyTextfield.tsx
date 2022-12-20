
interface MyTextfieldProps {
  textfieldInput: string, 
  textfieldUpdateFn: (arg: string) => void
}

function MyTextfield({textfieldInput, textfieldUpdateFn}: MyTextfieldProps) {

  return (
    <div>
      <input 
          placeholder= "type new task"
          type="text" 
          value={textfieldInput}
          onChange={(event)=>{
            textfieldUpdateFn(event.target.value)
            console.log(event.target.value)
          }}
      />
    </div>
  );
}

export {MyTextfield}