const heading = document.querySelector
("#heading")

//adding blue text color 
const changeFontColor = () => {
    heading.classList.add("blue-text")
}

heading.addEventListener("click",changeFontColor);




const subheading = document.querySelector
("#subheading")

//adding blue text color 
const changeFontColors = () => {
    subheading.classList.add("blue-text");
}

subheading.addEventListener("click",changeFontColors); 



// reply button shows text box (remove hidden) 

const replyButton = document.querySelector
("#reply-button");
const replyMessage = document.querySelector
("#reply-message");

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}

replyButton.addEventListener("click", openReplyMessage); 


//send and cancle bttons hide text box (add hidden)
const sendButton = document.querySelector
("#send-button");

const cancelButton = document.querySelector 
("#cancel-button");


const closeReplyMessage = () => {
    replyMessage.classList.add("hidden"); 
}


sendButton.addEventListener("click", closeReplyMessage); 
cancelButton.addEventListener("click", closeReplyMessage);



const openButton = document.querySelector
("#open-button"); 

const isreadButton = document.querySelector
("#is-read"); 


const openButtonMessage = () => {
    openButtonMessage.class.remove("hidden");
}

openButton.addEventListener("click",openButtonMessage); 
isreadButton.addEventListener("click",openButtonMessage);




