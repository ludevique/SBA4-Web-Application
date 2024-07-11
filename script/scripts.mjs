import myapi from '../script/display.mjs'

//----------------This module is responsible for fetching the data from my api-------------------

 async function Naruto(){
    try{
         
         const response = await fetch(myApi);
         if(!response.ok){
            throw new Error('this character is not available try something else.')
         }
         //create a new variable that allow us to display our data.
         const myData = await response.json();
         //try and see if this work as expected
         console.log(myData)
     }
     catch(error){
        console.error(error);
     }
 }

console.log("here you are", myapi)//test if everything works.

export default Naruto


