
// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = quote;
}

// Event listener for the button click
document.getElementById('generate-button').addEventListener('click', generateRandomQuote);

// Initial quote generation
generateRandomQuote();
