
interface MyDeleteButtonProps {
  button_title: string, 
  clickHandler: () => void,
  
}
  
function MyDeleteButton({button_title, clickHandler}: MyDeleteButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => clickHandler()} 
      >{button_title}</button>
        
    </div>
      
    );
  }

  export {MyDeleteButton}