
interface MyTextfieldProps {
  valueProp: string, 
  updateFnProp: (arg: string) => void
}

function MyTextfield({valueProp, updateFnProp}: MyTextfieldProps) {

  return (
    <div>
      <input 
          type="text" 
          value={valueProp}
          onChange={(event)=>{
            updateFnProp(event.target.value)
            console.log(event.target.value)
          }}
      />
    </div>
  );
}

export {MyTextfield}