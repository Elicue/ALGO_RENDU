let main = document.querySelector('main');
for(let i = 0; i < 21; i++){
    let div = document.createElement('div')
    main.appendChild(div)
}

let divs = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        if(this.style.backgroundColor == 'black'){
            this.style.backgroundColor = 'transparent'
        }else{
            this.style.backgroundColor = 'black'
        }
    })
}

let divss = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    for(let j = 0; j < 2; j++){
        let div = document.createElement('div')
        divss[i].appendChild(div)
    }
}

console.log(divs.length)
let player = document.querySelector('h1')
player.textContent = 'Au tour du player 1'
let button = document.querySelector('button')

button.addEventListener('click', function(){
    let divs = document.querySelectorAll('div')
    let count = 0
    for(let i = 0; i < divs.length; i++){
        if(divs[i].style.backgroundColor == 'black'){
            count++
        }
    }
    if(count >= 1 && count <= 3){
        for(let i = 0; i < divs.length; i++){
            if(divs[i].style.backgroundColor == 'black'){
                divs[i].remove()
            }
        }
        let alldivs = document.querySelectorAll('div')
        let allcont = 0
        for(let i = 0; i < alldivs.length; i++){
            allcont++
        }
        if (allcont == 0){
            if (player.textContent == 'Au tour du joueur 1'){
                alert ('Le joueur 2 a gagné')}
            else{
                alert ('Le joueur 1 a gagné')
            }
        }else{
            if (player.textContent == 'Au tour du joueur 1'){
                player.textContent = 'Au tour du joueur 2'}
            else{
                player.textContent = 'Au tour du joueur 1'
            }
        }
    } else {
        alert('Il vous faut sélectionner  entre 1 et 3 div')
    }
})