
interface MyAddButtonProps {
  buttonLabel: string, 
  buttonClickHandler: () => void,
  
}
  
function MyAddButton({buttonLabel, buttonClickHandler}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => buttonClickHandler()} 
      >{buttonLabel}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}