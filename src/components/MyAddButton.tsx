
interface MyAddButtonProps {
  button_title: string, 
  clickHandler: () => void,
  
}
  
function MyAddButton({button_title, clickHandler}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => clickHandler()} 
      >{button_title}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}