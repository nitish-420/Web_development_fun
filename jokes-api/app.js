let search = document.querySelector("#search");
console.log(search)

let container=document.querySelector(".container");


function getJokes(url) {
    
    params = {
        headers: {
            Accept: "application/json"
        }
    }
    
    let ul=document.createElement('ul')
    
    axios.get(url, params)
    .then(data => {
        console.log(data)
        for(vals of data.data.results){
            let li=document.createElement('li');
            li.innerText=vals.joke;
            ul.append(li);
        }
        search.value="";
        return ;
    })
    .catch(e => {
        search.value="";
        
        return console.log("something went wrong!!");
    })
    ul.classList.add("jokesList");
    
    container.append(ul);
    
}

getJokes("https://icanhazdadjoke.com/search?term= ");


search.addEventListener('change', () => {
    let jokel=document.querySelector(".jokesList");
    jokel.remove();
    let url=`https://icanhazdadjoke.com/search?term=${search.value.replace(/ /g,"%20")}`;
    getJokes(url)
})
