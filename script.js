// Plastic Form Submission Logic
document.getElementById("plasticForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const plasticCollected = document.getElementById("plasticCollected").value;
  const earnings = (plasticCollected / 1000) * 10; // Calculate earnings based on grams to kilograms
  sessionStorage.setItem("plasticEarnings", earnings.toFixed(2)); // Store earnings in session storage
  window.location.href = "index1.html"; // Redirect to thank you page
});

// Chatbot Logic
const chatbot = document.getElementById("chatbot");
const chatbotOpen = document.getElementById("chatbotButton");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotInput = document.getElementById("chatbotInput");
const sendChatbotMessage = document.getElementById("sendChatbotMessage");

// Open chatbot
chatbotOpen.addEventListener("click", () => {
  chatbot.style.display = "block"; // Show chatbot
  chatbot.style.left = "20px"; // Move chatbot into view
});

// Close chatbot
chatbotClose.addEventListener("click", () => {
  chatbot.style.left = "-400px"; // Move chatbot out of view
});

// Sending messages in the chatbot
sendChatbotMessage.addEventListener("click", () => {
  const userMessage = chatbotInput.value;
  if (userMessage) {
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = "You: " + userMessage;
    chatbotMessages.appendChild(userMessageElement);
    chatbotInput.value = "";

    // Simple if-else responses hey sumiksha then add questions
    let botResponse = "";
    if (userMessage.toLowerCase().includes("hello")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("plastic")) {
      botResponse = "Plastic is harmful to the environment. Reduce, reuse, and recycle!";
    } else if (userMessage.toLowerCase().includes("reward")) {
      botResponse = "You earn ₹10 for every kilogram of plastic you collect.";
    } else {
      botResponse = "I'm sorry, I didn't understand that. Can you ask something else?";
    }

    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = "Bot: " + botResponse;
    chatbotMessages.appendChild(botMessageElement);

    // Scroll to the bottom of messages
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});
// Get the sign in and register buttons
const signInButton = document.getElementById('signInButton');
const registerButton = document.getElementById('registerButton');

// Get the sign in and register forms
const signInForm = document.getElementById('signInForm');
const registerForm = document.getElementById('registerForm');

// Get the register link in sign in form
const registerLink = document.getElementById('registerLink');

// Get the sign in link in register form
const signInLink = document.getElementById('signInLink');

// Add event listeners to buttons
signInButton.addEventListener('click', () => {
    signInForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerButton.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
});

// Add event listeners to links
registerLink.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
});

signInLink.addEventListener('click', () => {
    signInForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});
function confirmSubmission(){
  return confirm("Are you sure you want to submit the form?");
}