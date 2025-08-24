const adicionarItem = document.getElementById('form-compra')
const listaDeCompras = document.getElementById("lista-de-compras")
const adicionaItem = document.getElementById('adicionar-item')
const paragrafoLista = document.getElementById('paragrafo-lista')

const atualizarMensagem = () => {
  const itensVisiveis = Array.from(listaDeCompras.children).filter(li => li.style.display !== "none")
  if(itensVisiveis.length === 0) {
    paragrafoLista.style.display = "block"
  } else {
    paragrafoLista.style.display = "none"
  }
}



// chama no início
atualizarMensagem()


let contador = 0

adicionaItem.addEventListener("click", (evento) => {
    evento.preventDefault()

    if (adicionarItem.value.trim() === "") {
        alert("É necessário adicionar algo.")
        return
    } 

    const itemLista = document.createElement("li")
    const containerLista = document.createElement("div")
    containerLista.classList.add("lista-item-container")

    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++

    const nomeItem = document.createElement("p")
    nomeItem.textContent = adicionarItem.value

    
    containerLista.appendChild(inputCheckbox)
    containerLista.appendChild(nomeItem)
    itemLista.appendChild(containerLista)
    listaDeCompras.appendChild(itemLista)

    
inputCheckbox.addEventListener("click", () => {
    if(inputCheckbox.checked) {
        itemLista.style.textDecoration = "line-through";
    } else {
        itemLista.style.textDecoration = "none";
    }
})


    adicionarItem.value = ""
    
    atualizarMensagem()

})


