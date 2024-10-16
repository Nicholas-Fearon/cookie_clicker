// DOM Nodes
const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const autoClicker = document.getElementById("auto-clicker");
const enhancedOven = document.getElementById("enhanced-oven");
const cookieFarm = document.getElementById("cookie-farm");
const robotBaker = document.getElementById("robot-baker");
const cookieFactory = document.getElementById("cookie-factory");
const magicFlour = document.getElementById("magic-flour");
const timeMachine = document.getElementById("time-machine");
const quantOven = document.getElementById("quantum-oven");
const alienTechnology = document.getElementById("alien-technology");
const interdimensionalBaker = document.getElementById("interdimensional-baker");

// Game State
let cookies = parseInt(localStorage.getItem("cookies")) || 0; // get from local storage, default to 0
let cps = parseInt(localStorage.getItem("cps")) || 0; // get from local storage, default to 0

// Update cookie display and cps display initially
cookieDisplay.textContent = cookies;
cpsDisplay.textContent = cps;

// Game Logic
// Every second, increase cookies by cps
setInterval(function () {
  cookies += cps;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies); // Update local storage
}, 1000);

// Get a cookie when clicking the main button
cookieBtn.addEventListener("click", function () {
  cookies += 1;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies); // Update local storage
});

// Upgrade logic
async function handleClickApi(buttonId) {
  try {
    const response = await fetch(
      "https://cookie-upgrade-api.vercel.app/api/upgrades"
    );
    const data = await response.json();

    // Find the upgrade that corresponds to the clicked button
    const upgrade = data.find((item) => item.id === buttonId);

    if (upgrade) {
      // Check if the player has enough cookies to purchase the upgrade
      if (cookies >= upgrade.cost) {
        // Subtract the cost of the upgrade
        cookies -= upgrade.cost;

        // Increase cookies per second (cps)
        cps += upgrade.increase;

        // Update the display
        cookieDisplay.textContent = cookies;
        cpsDisplay.textContent = cps;

        // Save the updated game state to local storage
        localStorage.setItem("cookies", cookies);
        localStorage.setItem("cps", cps);

        console.log(`You purchased: ${upgrade.name}`);
        console.log(`Cookies reduced by: ${upgrade.cost}`);
        console.log(`Cookies remaining: ${cookies}`);
      } else {
        console.log("Not enough cookies to purchase this upgrade.");
      }
    } else {
      console.log("Invalid button ID");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Set up event listeners for each upgrade button
autoClicker.addEventListener("click", () => handleClickApi(1));
enhancedOven.addEventListener("click", () => handleClickApi(2));
cookieFarm.addEventListener("click", () => handleClickApi(3));
robotBaker.addEventListener("click", () => handleClickApi(4));
cookieFactory.addEventListener("click", () => handleClickApi(5));
magicFlour.addEventListener("click", () => handleClickApi(6));
timeMachine.addEventListener("click", () => handleClickApi(7));
quantOven.addEventListener("click", () => handleClickApi(8));
alienTechnology.addEventListener("click", () => handleClickApi(9));
interdimensionalBaker.addEventListener("click", () => handleClickApi(10));
