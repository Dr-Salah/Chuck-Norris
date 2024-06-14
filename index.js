const button = document.getElementById('button');

const fetchFact = () => {
    fetch('https://api.chucknorris.io/jokes/random').then((response)=>response.json()).then((json)=>{
        
        document.getElementById('chuck').innerHTML='Did you know?'
        document.getElementById('fact').innerHTML = json.value
    })

    
}

button.addEventListener('click', ()=>{
    fetchFact()
});