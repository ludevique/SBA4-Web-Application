import Naruto from "../script/scripts.mjs"

//-------------------Adding an event listener to our button to get the data

document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('MYCHARAC');

    character.addEventListener('click', async () =>{
        try{
            const myData = await Naruto();
            console.log("character display successfully", myData)


            characterDisplaySpace.innerHTML

            //iterate through all my characters----------
            myData.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');

                const name = document.createElement('h3')
                name.textContent = character.name;

                const characDescription = document.createElement('p')
                characDescription.textContent = character.description;

                //--------Append my elements and their contents inside my webpage-----------------

                characterCard.appendChild(name);
                characterCard.appendChild(description);
                characterCard.appendChild(characterCard)
            });













        }catch(error) {
            console.error("can't get this character:", error);
        }
    })

})
