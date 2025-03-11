document.addEventListener("scroll", function () {
    let socialBox = document.getElementById("social-box");
    let scrollIndicator = document.getElementById("scroll-indicator");
    let rect = socialBox.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.7) {
        socialBox.style.opacity = "1";
        socialBox.style.transform = "translateY(-10px)";
        scrollIndicator.style.opacity = "0"; // Hide scroll indicator
    }
});
