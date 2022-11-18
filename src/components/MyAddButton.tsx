import {useState} from 'react';

interface MyAddButtonProps {
    label: string, 
    onClick: () => void,
  
}
  
function MyAddButton({label, onClick}: MyAddButtonProps) { 
  return (
    <div>
      <button
          onClick = {() => onClick()} 
      >{label}</button>
        
    </div>
      
    );
  }

  export {MyAddButton}