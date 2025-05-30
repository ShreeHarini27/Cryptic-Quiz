let timer = 200; // Set timer to 200 seconds
let interval = setInterval(updateTimer, 1000);

function checkCode() {
    const code = document.getElementById("lock-code").value;
    if (code === "1234") {
        transitionToNextPuzzle("puzzle-1", "puzzle-2");
        showNotification("Correct! You've unlocked the first door!");
    } else {
        showNotification("Incorrect code. Try again.");
    }
}

function checkRiddle() {
    const answer = document.getElementById("riddle-answer").value.toLowerCase();
    if (answer === "piano") {
        transitionToNextPuzzle("puzzle-2", "puzzle-3");
        showNotification("Correct! On to the final puzzle.");
    } else {
        showNotification("Wrong answer. Try again.");
    }
}

function checkFinal() {
    const answer = document.getElementById("final-answer").value;
    if (answer === "7") {
        showNotification("You found the number! You've completed the game.");
        clearInterval(interval);
        transitionToNextPuzzle("puzzle-3", "game-complete");
    } else {
        showNotification("That's not the right number. Try again!");
    }
}

function transitionToNextPuzzle(currentId, nextId) {
    const currentPuzzle = document.getElementById(currentId);
    const nextPuzzle = document.getElementById(nextId);
    
    currentPuzzle.classList.add("hidden");
    nextPuzzle.classList.remove("hidden");
}

function updateTimer() {
    timer--;
    document.getElementById("time").textContent = timer;

    if (timer <= 0) {
        clearInterval(interval);
        alert("Time's up! You failed to escape.");
        document.querySelectorAll('input, button').forEach(el => el.disabled = true);
    }
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    const messageElement = document.getElementById("notification-message");
    
    messageElement.textContent = message;
    notification.classList.remove("hidden");
    
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 4000);
}

function closeNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("hidden");
}