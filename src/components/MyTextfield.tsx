
interface MyTextfieldProps {
  value: string, 
  onChangeHandler: (arg: string) => void
}

function MyTextfield({value, onChangeHandler}: MyTextfieldProps) {

  return (
    <div>
      <input 
          placeholder= "type new task"
          type="text" 
          value={value}
          onChange={(event)=>{
            onChangeHandler(event.target.value)
            
            console.log(event.target.value)
          }}
      />
    </div>
  );
}

export {MyTextfield}