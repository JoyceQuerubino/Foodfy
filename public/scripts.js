const cards = document.querySelectorAll('.card')

// Para cada cartão de cartões faça:
for (let i=0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/receita/${i}`
    })
}