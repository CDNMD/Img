const loadingMessages = [
    "MAKING🦠 ",
    "STARTING🔐",
    "EDITING🧬 ",
    " POWERED BY CHALAH MD"
];

let currentMessageIndex = 0;
let loadingInterval;
let generatedImageUrl = '';  
const API_BASE_URL = "https://dark-shan-yt.koyeb.app/ai/generate-image-v2?prompt=";

// Function to update loading message
function updateLoadingMessage() {
    document.getElementById('loadingMessage').textContent = loadingMessages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % loadingMessages.length;
}

// Function to stop loading animation
function stopLoadingInterval() {
    clearInterval(loadingInterval);
    document.getElementById('loadingMessage').textContent = loadingMessages[3];
}

// Function to generate image
function generateImage(prompt) {
    if (!prompt) {
        alert("Please enter a prompt!");
        return;
    }

    document.getElementById('loadingMessage').style.display = 'block';
    loadingInterval = setInterval(updateLoadingMessage, 1000);
    document.getElementById('imageContainer').innerHTML = '';

    let finalPrompt = encodeURIComponent(prompt);
    let imageUrl = `${API_BASE_URL}${
