function criaPaletaDeCores() {
    let capturaClassColor = document.getElementsByClassName("color")

    for (let i = 0; i < capturaClassColor.length; i += 1) {
        if (i === 0) {
            capturaClassColor[i].style.backgroundColor = "black"
        } else if (i === 1) {
            capturaClassColor[i].style.backgroundColor = "pink"
        } else if (i === 2) {
            capturaClassColor[i].style.backgroundColor = "yellow"
        } else if (i === 3) {
            capturaClassColor[i].style.backgroundColor = "blue"
        }

    }
}
criaPaletaDeCores()



function criaColunas() {
    let colunaCapturada = document.querySelector("#pixel-board")
    for (let i = 0; i <= 4; i += 1) {
        let criaUl = document.createElement("ul")
        criaUl.className = "coluna"
        colunaCapturada.appendChild(criaUl)

        for (let i2 = 0; i2 <= 4; i2 += 1) {
            let criaLi = document.createElement("li")
            criaLi.className = "pixel"
            criaUl.appendChild(criaLi)
        }

    }


}
criaColunas()

let capturaCorPaleta = document.getElementsByClassName("color")
function escutadores() {
    capturaCorPaleta[0].addEventListener("click", lidaComClick)
    capturaCorPaleta[1].addEventListener("click", lidaComClick)
    capturaCorPaleta[2].addEventListener("click", lidaComClick)
    capturaCorPaleta[3].addEventListener("click", lidaComClick)
}
escutadores()

function lidaComClick(event) {
    capturaCorPaleta[0].classList.remove("selected")
    capturaCorPaleta[1].classList.remove("selected")
    capturaCorPaleta[2].classList.remove("selected")
    capturaCorPaleta[3].classList.remove("selected")
    event.target.classList = "color selected";
}

/**o forEach é uma HOF, que faz algo semelhante ao for, porém com ela consigo acessar minhas classes 'pixel' de uma forma mais simples. 
 * o forEach está tendo a funcionalidade de percorrer cada pixel.
 * index é cada pixel.
 * selected é cada cor dar paleta, e ao capturar ela, está passando o valor dela para os pixels, ou seja, as cores. 
 */
    
let capturaClassSelected = document.getElementsByClassName('selected')
    document.querySelectorAll(".pixel").forEach(index => {

        index.addEventListener("click", event => {
            event.target.style.backgroundColor = capturaClassSelected[0].style.backgroundColor 
        })
    })
