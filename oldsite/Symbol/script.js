const symbols = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'v', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'x', 'y', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '-', '[', ']', ';', ':', ',', '.', '/', '<', '>', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

let updateInterval = 1000; // Initial interval in milliseconds
const minInterval = 20; // Minimum interval after which to stop updating

let lastSymbols = ['', '']; // Array to store the last two displayed symbols

// Function to get a random symbol from the array, ensuring it's different from the last two symbols
function getRandomSymbol() {
    let randomIndex;
    let symbol;
    
    do {
        randomIndex = Math.floor(Math.random() * symbols.length);
        symbol = symbols[randomIndex];
    } while (symbol === lastSymbols[0] || symbol === lastSymbols[1]); // Repeat until a different symbol is picked

    lastSymbols.shift(); // Remove the oldest symbol from the array
    lastSymbols.push(symbol); // Add the new symbol to the array
    
    return symbol;
}

// Function to update the symbol displayed on the page
function updateSymbol() {
    const symbolDiv = document.getElementById('symbolDisplay');
    symbolDiv.textContent = getRandomSymbol();

    // Reduce update interval gradually
    updateInterval -= 5;
    if (updateInterval < minInterval) {
        updateInterval = minInterval;
    }

    // Update symbol again after the reduced interval
    setTimeout(updateSymbol, updateInterval);
}

// Call updateSymbol initially to display a random symbol when the page loads
updateSymbol();