
interface MyAddButtonProps {
  buttonLabelProp: string, 
  buttonClickHandlerProp: () => void,
  
}
  
function MyAddButton({buttonLabelProp, buttonClickHandlerProp}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => buttonClickHandlerProp()} 
      >{buttonLabelProp}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}