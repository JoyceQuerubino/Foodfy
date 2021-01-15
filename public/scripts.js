const cards = document.querySelectorAll(".card");

// Para cada cartão de cartões faça:
for (let i = 0; i < cards.length; i++) {
  const recipe = cards[i];
  recipe.addEventListener("click", () => {
    window.location.href = `/receita/${i}`;
  });
}

// Ação de mostrar e esconder
const btnmostra = document.querySelectorAll(".mostrar");
const sessao = document.querySelector(".sessao");

function mostrarEsconder() {
  sessao.classList.toggle("onOff");
}

btnmostra.forEach(function (item, index) {
  console.log(index);

  item.addEventListener("click", mostrarEsconder);
});
