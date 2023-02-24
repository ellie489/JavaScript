const character = document.querySelector(".character-details");
const htmlTitle = document.querySelector(".title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://thronesapi.com/api/v2/Characters/" + id;
console.log(id)

async function getCharacter() {

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        makeHTML(data);
    }

    catch(error) {
        
        character.innerHTML = `<h3>Error: ${error}</h3>`;
    }

}

getCharacter();

function makeHTML(data) {
    character.innerHTML = `<h1>${data.fullName}</h1>
    <div><img src="${data.imageUrl}" alt="Image of ${data.fullName}"></div>
    <h2>Family: ${data.family}</h2>
    <h2>Title: ${data.title}</h2>`
    htmlTitle.innerHTML = `About ${data.fullName}`
}
