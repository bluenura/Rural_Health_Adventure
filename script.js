let gameText = document.getElementById("game-text");
let choicesContainer = document.getElementById("choices");
let banner = document.getElementById("banner");

function startGame() {
    // Show the banner only on the start page
    banner.style.display = "block";
    gameText.textContent = "You are in a rural area, far from any large city.";
    showChoices([
        { text: "Try to find a local clinic", next: sceneLocalClinic },
        { text: "Call a friend to discuss options", next: sceneCallFriend }
    ]);
}

function showChoices(choices) {
    // Hide the banner once the game begins
    banner.style.display = "none";
    choicesContainer.innerHTML = ""; // Clear existing choices

    // Create a numbered list of choices
    const optionsList = document.createElement("ul");
    optionsList.id = "options"; // Optional: For CSS styling

    choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice.text}`;
        listItem.onclick = choice.next; // Attach the function for the choice
        optionsList.appendChild(listItem);
    });

    choicesContainer.appendChild(optionsList);
}

function showChoices(choices) {
    banner.style.display = "none";
    choicesContainer.innerHTML = ""; // Clear existing choices

    // Create a numbered list of choices
    const optionsList = document.createElement("ul");
    optionsList.id = "options"; // Optional: For CSS styling

    choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice.text}`;
        listItem.onclick = choice.next; // Attach the function for the choice
        optionsList.appendChild(listItem);
    });

    choicesContainer.appendChild(optionsList);
}

function showChoices(choices) {
    banner.style.display = "none";
    choicesContainer.innerHTML = ""; // Clear existing choices

    // Create a numbered list of choices
    const optionsList = document.createElement("ul");
    optionsList.id = "options"; // Optional: For CSS styling

    choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice.text}`;
        listItem.onclick = choice.next; // Attach the function for the choice
        optionsList.appendChild(listItem);
    });

    choicesContainer.appendChild(optionsList);
}

function showChoices(choices) {
    banner.style.display = "none";
    choicesContainer.innerHTML = ""; // Clear existing choices

    // Create a numbered list of choices
    const optionsList = document.createElement("ul");
    optionsList.id = "options"; // Optional: For CSS styling

    choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice.text}`;
        listItem.onclick = choice.next; // Attach the function for the choice
        optionsList.appendChild(listItem);
    });

    choicesContainer.appendChild(optionsList);
}

function showChoices(choices) {
    banner.style.display = "none";
    choicesContainer.innerHTML = ""; // Clear existing choices

    // Create a numbered list of choices
    const optionsList = document.createElement("ul");
    optionsList.id = "options"; // Optional: For CSS styling

    choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice.text}`;
        listItem.onclick = choice.next; // Attach the function for the choice
        optionsList.appendChild(listItem);
    });

    choicesContainer.appendChild(optionsList);
}

function sceneLocalClinic() {
    banner.style.display = "none";
    gameText.textContent = "You look for a local clinic, but the nearest one is hours away.";
    showChoices([
        { text: "Try to arrange a car", next: sceneArrangeCar },
        { text: "Consider the cost and look for other options", next: sceneCostConcerns }
    ]);
}

function sceneCallFriend() {
    banner.style.display = "none";
    gameText.textContent = "You call a friend who lives in the city. They’re supportive and offer advice.";
    showChoices([
        { text: "Ask if you can stay with them", next: sceneStayWithFriend },
        { text: "Decide to handle it yourself", next: sceneHandleAlone }
    ]);
}

function sceneArrangeCar() {
    banner.style.display = "none";
    gameText.textContent = "You manage to arrange a car, but the cost is worrisome.";
    showChoices([
        { text: "Continue", next: endGame }
    ]);
}

function sceneCostConcerns() {
    banner.style.display = "none";
    gameText.textContent = "You realize the financial burden is significant.";
    showChoices([
        { text: "Continue", next: endGame }
    ]);
}

function sceneStayWithFriend() {
    banner.style.display = "none";
    gameText.textContent = "Your friend welcomes you and offers a place to stay while you visit a clinic.";
    showChoices([
        { text: "Continue", next: endGame }
    ]);
}

function sceneHandleAlone() {
    banner.style.display = "none";
    gameText.textContent = "You decide to handle this on your own, but the isolation feels heavy.";
    showChoices([
        { text: "Continue", next: endGame }
    ]);
}

function endGame() {
    banner.style.display = "none";
    gameText.textContent = "Thank you for playing. This concludes your journey.";
    choicesContainer.innerHTML = '<p id="play-again" onclick="startGame()">Play Again</p>';
}

