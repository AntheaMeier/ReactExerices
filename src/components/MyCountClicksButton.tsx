import {useState} from 'react';

interface MyCountClicksButtonProps {
    /* children: string, 
    updateFn: (arg: number) => void */
  }
  
  function MyCountClicksButton({/* children, updateFn */}: MyCountClicksButtonProps) {

    const [count, setCount] = useState(0)
   
    return (
      <div>
        <button
            onClick = {() => setCount(count => count + 1)} 
            >Click me to display the added value!</button>
        <h3>You have clicked {count} times.</h3>
    </div>
      
    );
  }

  export {MyCountClicksButton}