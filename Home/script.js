document.getElementById("loveButton").addEventListener("click", function() {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let left = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    heart.style.left = `${left}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

