let score = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function drop(event) {
    event.preventDefault();

    const foodId = event.dataTransfer.getData("text/plain");
    const foodElement = document.getElementById(foodId);
    
    if (!foodElement) return;

    const foodType = foodElement.getAttribute("data-type");
    const scoreElement = document.getElementById("score");

    if (foodType === "healthy") {
        // Alimento saudável: ganha 10 pontos e é removido da lista
        score += 10;
        foodElement.remove();
    } else if (foodType === "junk") {
        // Junk food: perde 10 pontos e o item permanece disponível
        score -= 10;
    }

    // Atualiza o placar na interface
    scoreElement.textContent = score;
}