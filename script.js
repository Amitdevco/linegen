const btn = document.querySelector("#btn");
const uname = document.querySelector("#nam");
const forms = document.querySelector("#forms");
const sec = document.querySelector("#sec");
const box = document.querySelector(".box");
const disname = document.querySelector("#disname");
const gen = document.querySelector("#gen");

// Array of 100 pick-up lines
const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you French? Because Eiffel for you.",
    "Is your dad a boxer? Because you’re a knockout!",
    "Do you believe in love at first sight, or should I walk by again?",
    "Is there an airport nearby, or is that just my heart taking off?",
    "Are you a time traveler? Because I can see you in my future.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    // Add more lines until you have 100...
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "You must be tired because you've been running through my mind all day.",
    "Are you a parking ticket? Because you’ve got FINE written all over you.",
    "Are you a campfire? Because you’re hot and I want s’more.",
    "If you were a vegetable, you’d be a cute-cumber.",
    // Continue adding more pick-up lines to complete 100...
];

// Handle form submission and show name
btn.addEventListener("click", function() {
    let user = uname.value;

    if (user) {
        localStorage.setItem("name", user);
        forms.style.display = "none"; 
        sec.style.display = "flex"

        // Display welcome message
        disname.textContent = "Welcome " + user;

        console.log(localStorage.getItem("name")); 
    } else {
        alert("Please enter a name!");
    }
});

// Function to generate a random pick-up line
gen.addEventListener("click", function() {
    // Get a random pick-up line from the array
    let randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];

    // Set the picked-up line text to the paragraph
    let p = document.querySelector("p");
    p.textContent = randomLine;
});
