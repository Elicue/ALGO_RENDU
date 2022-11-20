
let main = document.querySelector('main');
for(let i = 0; i < 21; i++){
    let div = document.createElement('div')
    main.appendChild(div)
}

let divs = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        if(this.style.backgroundColor == 'pink'){
            this.style.backgroundColor = 'black'
        }else{
            this.style.backgroundColor = 'pink'
        }
    })
}

/*let divss = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    for(let j = 0; j < 2; j++){
        let div = document.createElement('div')
        divss[i].appendChild(div)
    }
}

let divss = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++){
    for(let j = 0; j < 1; j++){
        this.img = document.createElement('img')
        this.img.src = "img/matche.svg";
        divss[i].appendChild(img)
    }
}
 */

console.log(divs.length)
let joueur = document.querySelector('h1')
joueur.textContent = "On player 1's turn"
let button = document.querySelector('button')

button.addEventListener('click', function(){
    let divs = document.querySelectorAll('div')
    let count = 0
    for(let i = 0; i < divs.length; i++){
        if(divs[i].style.backgroundColor == 'pink'){
            count++
        }
    }
    if(count >= 1 && count <= 3){
        for(let i = 0; i < divs.length; i++){
            if(divs[i].style.backgroundColor == 'pink'){
                divs[i].remove()
            }
        }
        let alldivs = document.querySelectorAll('div')
        let allcont = 0
        for(let i = 0; i < alldivs.length; i++){
            allcont++
        }
        if (allcont == 0){
            if (joueur.textContent == "On player 1's turn"){
                alert ('Player 2 has won')}
            else{
                alert ('Player 1 has won')
            }
        }else{
            if (joueur.textContent == "On player 1's turn"){
                joueur.textContent = "On player 2's turn"}
            else{
                joueur.textContent = "On player 1's turn"
            }
        }
    } else {
        alert('You must select between 1 and 3 matches')
    }
})