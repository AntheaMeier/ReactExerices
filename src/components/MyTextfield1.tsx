
interface MyTextfield1Props {
  valueProp: string, 
  updateFnProp: (arg: string) => void
}

function MyTextfield1({valueProp, updateFnProp}: MyTextfield1Props) {

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

export {MyTextfield1}