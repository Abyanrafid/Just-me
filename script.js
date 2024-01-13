let clickCount = 0;

document.getElementById("noButton").addEventListener("click", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + 'px';
    this.style.top = Math.random() * window.innerHeight + 'px';
});

document.getElementById("yesButton").addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        document.getElementById("giftImage").src = "94A9F7A5-066E-412E-8B1C-3D83F1EF3E65.gif";
        document.getElementById("statementText").innerHTML = "HEHE, no was never the right answer, also wanna tell you something you wanna know what it is?";
    } else if (clickCount === 2) {
        document.getElementById("giftImage").src = "75E6F8F3-A36F-4049-BC53-7B4B2F6B8751.gif";
        document.getElementById("statementText").innerHTML = "HAPPY BIRTHDAY, WOOOOOO, YOUR OFFICIALY LEGAL";
        document.getElementById("yesButton").style.display = "none";

        let newYesButton = document.createElement("button");
        newYesButton.innerHTML = "Yes";
        newYesButton.id = "newYesButton";
        document.querySelector(".gift-container").appendChild(newYesButton);

        newYesButton.addEventListener("click", function() {
            alert("Final action or message here!");
        });
    }
});
