function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    if (messageInput.value.trim() !== '') {
        const message = document.createElement('p');
        message.textContent = messageInput.value;
        chatBox.appendChild(message);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
