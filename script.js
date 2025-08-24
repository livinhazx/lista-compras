const adicionarItem = document.getElementById("form-compra");
const listaDeCompras = document.getElementById("lista-de-compras");
const adicionaItem = document.getElementById("adicionar-item");
const paragrafoLista = document.getElementById("paragrafo-lista");
const textoData = document.getElementById("texto-data")

const atualizarMensagem = () => {
  const itensVisiveis = Array.from(listaDeCompras.children).filter(
    (li) => li.style.display !== "none"
  );
  if (itensVisiveis.length === 0) {
    paragrafoLista.style.display = "block";
  } else {
    paragrafoLista.style.display = "none";
  }
};

// chama no início
atualizarMensagem();

let contador = 0;

adicionaItem.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (adicionarItem.value.trim() === "") {
    alert("É necessário adicionar algo.");
    return;
  }

  const itemLista = document.createElement("li");
  const containerLista = document.createElement("div");
  containerLista.classList.add("lista-item-container");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;

  const nomeItem = document.createElement("p");
  nomeItem.innerText = adicionarItem.value;

  
  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  const data = new Date().toLocaleDateString("pt-BR")

  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric"
  }
  )

  const dataCompleta = ` ${diaDaSemana} (${data}) as ${hora}`
  const itemData = document.createElement("p")
  itemData.innerText = dataCompleta
  itemData.classList.add("texto-data")

  containerLista.appendChild(inputCheckbox);
  containerLista.appendChild(nomeItem);
  itemLista.appendChild(containerLista);
  listaDeCompras.appendChild(itemLista);
  itemLista.appendChild(itemData)

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      itemLista.style.textDecoration = "line-through";
    } else {
      itemLista.style.textDecoration = "none";
    }
  });

  
  atualizarMensagem();
});
