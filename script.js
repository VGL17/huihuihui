let yesClickCount = 0;

function handleYes() {
    yesClickCount++;

    // Trigger fireworks specific to this "Yes" click
    showFireworks(yesClickCount);

    // Create a new random "Yes" button
    createNewYesOption();
}

function handleNo() {
    // Display the message when "No" is clicked
    document.getElementById("response-message").textContent = "Ye allowed nahi hai";
}

function handleMaybe() {
    window.location.href = "https://www.youtube.com/watch?v=ArSzaJDaIxU"; // New link provided
}

function showFireworks(count) {
    const fireworksElement = document.getElementById("fireworks");

    // Create a firework explosion at a random position
    let firework = document.createElement("div");
    firework.classList.add("firework");

    // Randomize the starting position of the firework
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;

    // Add the firework to the fireworks container
    fireworksElement.appendChild(firework);

    // Create additional particles for explosion effect
    for (let i = 0; i < 30; i++) {
        let particle = document.createElement("div");
        particle.classList.add("firework-particle");

        // Randomize direction for particles
        particle.style.left = `${firework.offsetLeft + Math.random() * 200 - 100}px`;
        particle.style.top = `${firework.offsetTop + Math.random() * 200 - 100}px`;

        fireworksElement.appendChild(particle);

        // Remove firework and particles after animation ends
        setTimeout(() => {
            firework.remove();
            particle.remove();
        }, 1500);
    }
}

function createNewYesOption() {
    // Create a new "Yes" button
    const newYesBtn = document.createElement("button");
    newYesBtn.textContent = "Yes";
    newYesBtn.classList.add("yes-btn");
    newYesBtn.onclick = handleYes;

    // Position the new "Yes" button randomly on the screen
    newYesBtn.style.left = `${Math.random() * 80}%`;  // 80% to keep the button within bounds
    newYesBtn.style.top = `${Math.random() * 80}%`;

    // Append it to the container
    document.querySelector(".container").appendChild(newYesBtn);
}

// Function to create floating hearts
function createFloatingHeart(event) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '❤️';  // Heart emoji

    // Position the heart where the user clicked
    heart.style.left = `${event.pageX - 20}px`;  // Adjusting for the heart size
    heart.style.top = `${event.pageY - 20}px`;  // Adjusting for the heart size

    // Append to the body
    document.body.appendChild(heart);

    // Remove heart from DOM after animation ends
    setTimeout(() => {
        heart.remove();
    }, 2000);  // Remove after animation (2 seconds)
}

// Add event listener to create hearts on click
document.body.addEventListener('click', createFloatingHeart);
