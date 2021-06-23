//link:  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


let container=document.querySelector('#container');

for(let i=1;i<=151;i++){
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    let txt=document.createElement('h3');
    txt.append(`${i}`);
    
    div.append(img);
    div.append(txt);
    // div.classList.add('')
    div.classList.add('pokemon');
    container.append(div);

}


