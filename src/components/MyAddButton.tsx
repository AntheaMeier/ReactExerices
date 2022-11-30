
interface MyAddButtonProps {
    label: string, 
    onClick: (arg: string) => void,
  
}
  
function MyAddButton({label, onClick}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => onClick('')} // here a target would be the button, which has no value(input) beside the lable text
      >{label}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}