let gameText = document.getElementById("game-text");
let choicesContainer = document.getElementById("choices");
let banner = document.getElementById("banner");

function startGame() {
    // Show the banner only on the start page
    banner.style.display = "block";
    gameText.textContent = "You receive surprising news: your birth control has failed, and you’re now dealing with an unwanted  pregnancy. What do you do next?";
    showChoices([
        { text: "Go to a clinic that seems to specialize in abortion services.", next: sceneLocalClinic },
        { text: "Call a friend to discuss options.", next: sceneCallFriend }
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
    gameText.textContent = "Upon arrival, you discover that the clinic is actually a Pro-Life facility, designed to look like it offers comprehensive reproductive care. The closest legitimate clinic is over 9 hours away and you don't own a car.";
    showChoices([
        { text: "Hitch hike", next: sceneArrangeCar },
        { text: "Borrow money", next: sceneCostConcerns }
    ]);
}

function sceneCallFriend() {
    banner.style.display = "none";
    gameText.textContent = "Your friend suggests that you keep the baby.";
    showChoices([
        { text: "Nervously ask if they are willing to drive you out of state where abortion services are easier to come by.", next: sceneStayWithFriend },
        { text: "Pretend you were joking and hang up the phone.", next: sceneHandleAlone }
    ]);
}

function sceneArrangeCar() {
    banner.style.display = "none";
    gameText.textContent = "You manage to get lucky and find someone going that exact way";
    showChoices([
        { text: "but he murders you.", next: endGame }
    ]);
}

function sceneCostConcerns() {
    banner.style.display = "none";
    gameText.textContent = "You borrow money from a local mob boss and get your abortion";
    showChoices([
        { text: "but he kills you.", next: endGame }
    ]);
}

function sceneStayWithFriend() {
    banner.style.display = "none";
    gameText.textContent = "She agrees but";
    showChoices([
        { text: "she murders you when you get back.", next: endGame }
    ]);
}

function sceneHandleAlone() {
    banner.style.display = "none";
    gameText.textContent = "You decide to handle this on your own.";
    showChoices([
        { text: "It seems like the local clinic might be able to give you an abortion.", next: sceneLocalClinic }
    ]);
}

function endGame() {
    banner.style.display = "none";
    gameText.textContent = "fuck! Thanks for clicking through.";
    choicesContainer.innerHTML = '<p id="play-again" onclick="startGame()">Play Again</p>';
}
