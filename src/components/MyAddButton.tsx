
interface MyAddButtonProps {
  label: string, 
  clickHandler: () => void,
  
}
  
function MyAddButton({label, clickHandler}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => clickHandler()} 
      >{label}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}