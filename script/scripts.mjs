import myApi from '../script/display.mjs'

//----------------This module is responsible for fetching the data from my api-------------------

 async function Naruto(){
    try{
         
         const response = await fetch(myApi);
         if(!response.ok){
            throw new Error('this character is not available try something else.')
         } else {
         //create a new variable that allow us to display our data.
         const myData = await response.json();
         //try and see if this work as expected
         console.log(myData)

         return myData.characters;
         }
     }
     catch(error){
        console.error(error);
     }
 }

console.log("here you are", myApi)//test if everything works.

export default Naruto


