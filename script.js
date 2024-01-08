let clickCount = 0;

document.getElementById("noButton").addEventListener("click", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + 'px';
    this.style.top = Math.random() * window.innerHeight + 'px';
});

document.getElementById("yesButton").addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        // First click: Change the GIF and statement
        document.getElementById("giftImage").src = "path_to_your_second_gift.gif";
        document.getElementById("statementText").innerHTML = "Your Second Bold Statement";
    } else if (clickCount === 2) {
        // Second click: Display the third statement and change buttons
        document.getElementById("statementText").innerHTML = "Your Third Bold Statement";
        document.getElementById("yesButton").style.display = "none";

        // Add a new Yes button
        let newYesButton = document.createElement("button");
        newYesButton.innerHTML = "Yes";
        newYesButton.id = "newYesButton";
        document.querySelector(".gift-container").appendChild(newYesButton);

        // Add event listener to new Yes button
        newYesButton.addEventListener("click", function() {
            // Add functionality for the final "Yes" click
            alert("Final action or message here!");
            // Implement any final action or message you want here
        });
    }
});
