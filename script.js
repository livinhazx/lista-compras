const { createElement } = require("react")

const adicionarItem = document.getElementById('form-compra')
const listaDeCompras = document.getElementById("lista-de-compras")
const adicionaItem = document.getElementById('adicionar-item')

let contador = 0

adicionaItem.addEventListener("click", (evento) => {
    evento.preventDefault()
    if (adicionarItem.value === "") {
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
    nomeItem.innerHTML = form-compra.value

    containerLista.appendChild(containerLista)
    listaDeCompras.appendChild(itemLista)



})
