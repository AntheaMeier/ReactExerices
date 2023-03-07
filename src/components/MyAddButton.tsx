
interface MyAddButtonProps {
  button_title: string, 
  clickHandler: () => void,
  disabled?: boolean,
  
}
  
function MyAddButton({button_title, clickHandler, disabled}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => clickHandler()}
          disabled = {disabled} 
      >{button_title}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}