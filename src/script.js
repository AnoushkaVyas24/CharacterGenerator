// Splash Screen Fade Out
setTimeout(() => {
    const splashScreen = document.getElementById("splashScreen");
    splashScreen.style.animation = "fadeOut 1s ease-in-out"; // Apply fade-out animation
    splashScreen.style.opacity = "0"; // Set opacity to 0 after animation

    // Remove the splash screen from the DOM after the animation completes
    setTimeout(() => {
        splashScreen.style.display = "none";
    }, 1000); // Wait for the animation to finish (1 second)
}, 1000); // Wait 1 second before starting the fade-out

// Random Background Selection
const backgroundImages = [
    "../images/backgrounds/bg2.png",
    "../images/backgrounds/bg3.png",
    "../images/backgrounds/bg4.png",
    "../images/backgrounds/bg5.png",
    "../images/backgrounds/bg6.png",
    "../images/backgrounds/bg7.png",
    "../images/backgrounds/bg8.png",
    "../images/backgrounds/bg9.png",
    "../images/backgrounds/bg10.png",
    "../images/backgrounds/bg11.png",
    "../images/backgrounds/bg12.png",
    "../images/backgrounds/bg13.png",
    "../images/backgrounds/bg14.png",
    "../images/backgrounds/bg15.png",
    "../images/backgrounds/bg16.png",
    "../images/backgrounds/bg17.png",
    "../images/backgrounds/bg18.png",
    "../images/backgrounds/bg19.png",
    "../images/backgrounds/bg20.png"
];

function getRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
}

document.body.style.backgroundImage = `url(${getRandomBackgroundImage()})`;

// Character Generator Logic
const ancestries = [
    {
        name: "Ancestry 1",
        image: "../images/ancestry1.png",
        categories: {
            normal: ["Normal Subitem 1", "Normal Subitem 2"],
            rare: ["Rare Subitem 1", "Rare Subitem 2"]
        }
    },
    {
        name: "Ancestry 2",
        image: "../images/ancestry2.png",
        categories: {
            normal: ["Normal Subitem 3", "Normal Subitem 4"],
            rare: ["Rare Subitem 3", "Rare Subitem 4"]
        }
    },
    // Add more ancestries here
];

function getRandomAncestry() {
    const randomIndex = Math.floor(Math.random() * ancestries.length);
    return ancestries[randomIndex];
}

function getRandomCategory() {
    const randomNum = Math.random();
    return randomNum < 0.75 ? "normal" : "rare"; // 75% Normal, 25% Rare
}

function getRandomItem(sublist) {
    const randomIndex = Math.floor(Math.random() * sublist.length);
    return sublist[randomIndex];
}

// Generate Character
document.getElementById("generateButton").addEventListener("click", function () {
    const button = this;
    button.disabled = true; // Disable the button during generation

    // Clear previous results
    document.getElementById("ancestryResult").textContent = "";
    document.getElementById("categoryResult").textContent = "";
    document.getElementById("itemResult").textContent = "";
    document.getElementById("ancestryImageContainer").style.display = "none";

    // Generate Ancestry
    setTimeout(() => {
        const ancestry = getRandomAncestry();
        document.getElementById("ancestryResult").textContent = `Ancestry: ${ancestry.name}`;

        // Generate Category
        setTimeout(() => {
            const category = getRandomCategory();
            document.getElementById("categoryResult").textContent = `Category: ${category}`;

            // Generate Item
            setTimeout(() => {
                const sublist = ancestry.categories[category];
                const item = getRandomItem(sublist);
                document.getElementById("itemResult").textContent = `Item: ${item}`;

                // Display Ancestry Image
                document.getElementById("ancestryImage").src = ancestry.image;
                document.getElementById("ancestryImageContainer").style.display = "block";

                // Re-enable the button
                button.disabled = false;
            }, 1000); // 1-second delay for item
        }, 1000); // 1-second delay for category
    }, 1000); // 1-second delay for ancestry
});