const url = "https://thronesapi.com/api/v2/Characters";
const characterCard = document.querySelector(".results");


async function getCharacters() {

    try { const response = await fetch(url);

            const characters = await response.json();

            characterCard.innerHTML = "";

            // console.log(characters);


            for (let i = 0; i < characters.length; i++) {

                if (!characters[i].firstName || !characters[i].lastName) {
                
                    continue;
                }

                    characterCard.innerHTML += `<a href="details.html?id=${characters[i].id}" class="result">
                    <img src="${characters[i].imageUrl}" alt="${characters[i].firstName}"/><h3>
                    ${characters[i].firstName} ${characters[i].lastName}</h3></a>`;

            }
        }   
    catch(error) {

        characterCard.innerHTML = `<div class="get-error">"Oops, there was an error! " ${error}</div>`;
        console.log("There was an error" + error);
        }      

        
}

getCharacters();
