const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const message = messageInput.value.trim();

    if (message !== '') {
        addMessageToChat(message, 'user');
        // You can replace 'user' with the username or any identifier for the sender.
        
        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
}
