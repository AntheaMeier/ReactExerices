
export function parseJSONfromLocalStorage(json: string){
    try {
        return JSON.parse(json); // parsing the object handed in as a parameter -> I return an object
     } catch (notAproperJSON) {
   
         localStorage.setItem('taskList', '[]'); // overwirting the object with the local storage with an empty array
         return []; // -> I return an empty array
     } 
}