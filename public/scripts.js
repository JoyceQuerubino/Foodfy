const cards = document.querySelectorAll('.card')

// Para cada cartão de cartões faça:
for (let card of recipeCards) {
    card.addEventListener("click", function(){
        const recipeIndex = card.getAttribute("id")
        window.location.href = `/receita/${recipeIndex}`
    })
}

