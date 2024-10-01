let image = document.getElementById("pokeImg")
let reponse = document.querySelector("#proposition")
let result = document.getElementById("result")
let scoreElement = document.getElementById('score')
let score = 0
let pokemonName;

async function getPoke(idpoke) {
    let response = await fetch("https://tyradex.tech/api/v1/pokemon/" + idpoke, { method: "GET" })
    let data = await response.json()
    // document.querySelector('#namePoke').innerHTML = data.name.fr
    image.src = data.sprites.regular;
    pokemonName = data.name.fr
}
function getRandomPokemon() {
    let randomNumber = Math.ceil(Math.random() * 1024) + 1;
    getPoke(randomNumber);
}

reponse.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendProposition();
    }
})

function sendProposition(){
    let inputText = reponse.value
    let name = inputText.toLowerCase().charAt(0).toUpperCase() + inputText.substr(1).toLowerCase();
    if(name === pokemonName){
        result.innerHTML = "Bonne reponse !"
        getRandomPokemon()
        reponse.value = "";
        score += 1;
        scoreElement.innerHTML = `Score : ${score}`
    }else{
        result.innerHTML = "Mauvaise reponse !"
        reponse.value = ""
        getRandomPokemon()
        if(score  > 0){
            score -= 1
        }
          scoreElement.innerHTML = `Score : ${score}`
    }
    

}

getRandomPokemon();




