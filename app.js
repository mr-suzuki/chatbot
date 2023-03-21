const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#textInput");
const send = document.querySelector(".send");

send.addEventListener("click", function() {
    // const userInput = textInput.value;
    renderUserMessage();
    // textInput.value = "";
});

textInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessages(userInput, "user");
    textInput.value="";
    setTimeout(() => {
        renderChatBotResponse(userInput.toString().toLowerCase());
        setScroll();
    }, 600);
}

const renderChatBotResponse = (userInput) => {
    const response = getChatBotResponse(userInput);
    renderMessages(response, "chatBot");
};

const renderMessages = (msg, msgType) => {
    let className = "userMessage";
    if (msgType !== "user"){
        className = "chatBotMessage";
    }
    const messages = document.createElement("div");
    const messageNode = document.createTextNode(msg);
    messages.classList.add(className);
    messages.append(messageNode);
    chatBody.append(messages);
};

const getChatBotResponse = (userInput) => {
    return chatBotResponse[userInput] ==undefined?"Please try asking something like 'Should I hire Mr Suzuki?'":chatBotResponse[userInput];
};

const setScroll = () => {
    if (chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}