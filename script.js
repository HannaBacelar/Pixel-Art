let colunaCapturada= document.querySelector("#pixel-board")

function criaColunas() {
    for (let i=0; i <= 4; i+=1) {
        let criaUl = document.createElement("ul")
        criaUl.className = "coluna" 
        colunaCapturada.appendChild(criaUl)

    for (let i2 =0;i2 <=4; i2 +=1){
        let criaLi = document.createElement("li")
        criaLi.className = "pixel"
        criaUl.appendChild(criaLi)
    }

    }
    
    
}
criaColunas()


