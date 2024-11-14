let gameText = document.getElementById("game-text");
let choicesContainer = document.getElementById("choices");
let banner = document.getElementById("banner");

function startGame() {
    // Show the banner only on the start page
    banner.style.display = "block";
    gameText.textContent = "You receive surprising news: your birth control has failed, and you’re now dealing with an unwanted  pregnancy. What do you do next?";
    showChoices([
        { text: "Visit clinic that looks like it gives abortions.", next: sceneLocalClinic },
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
        { text: "Ask if you can stay with them since they live near a Planned Parenthood.", next: sceneStayWithFriend },
        { text: "You decide to handle it yourself.", next: sceneHandleAlone }
    ]);
}

function sceneArrangeCar() {
    banner.style.display = "none";
    gameText.textContent = "You manage to hitch a ride but you are worried you're gonna get murdered.";
    showChoices([
        { text: "You got murdered by the shady guy who picked you up.", next: endGame }
    ]);
}

function sceneCostConcerns() {
    banner.style.display = "none";
    gameText.textContent = "You borrow money from a local mob boss and get your abortion.";
    showChoices([
        { text: "The mob boss who loaned you money  ends up murdering you.", next: endGame }
    ]);
}

function sceneStayWithFriend() {
    banner.style.display = "none";
    gameText.textContent = "Your friend welcomes you and offers a place to stay while you visit the Planned Parenthood.";
    showChoices([
        { text: "She murders you when you get back.", next: endGame }
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
    gameText.textContent = "Better stories to come! Thanks for clicking through.";
    choicesContainer.innerHTML = '<p id="play-again" onclick="startGame()">Play Again</p>';
}
