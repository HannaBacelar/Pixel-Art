function criaPaletaDeCores() {
    let capturaClassColor = document.getElementsByClassName("color")

    for (let i = 0; i < capturaClassColor.length; i += 1) {
        if (i === 0) {
            capturaClassColor[i].style.backgroundColor = "black";
        } else if (i === 1) {
            capturaClassColor[i].style.backgroundColor = "pink";
        } else if (i === 2) {
            capturaClassColor[i].style.backgroundColor = "yellow";
        } else if (i === 3) {
            capturaClassColor[i].style.backgroundColor = "blue";
        }

    }
}
criaPaletaDeCores();



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

