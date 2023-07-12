const exitButton = document.querySelector(".exit-button")
const messageWindow = document.querySelector("#message-window")
const fileSpan = document.querySelector("#file")
const profileButton = document.querySelector(".file-options span:nth-child(2)")
const helpButton = document.querySelector("#help")

function handleClickButton() {
  messageWindow.remove()
}

exitButton.addEventListener("click", handleClickButton)

// exitButton.onclick = () => messageWindow.remove()
// exitButton.addEventListener("click", handleClickButton)
// exitButton.onmouseover = handleClickButton
// console.log(exitButton)

fileSpan.addEventListener("click", function(event) {
  console.log("Hello world")
  console.log(event)
})

profileButton.addEventListener("mouseover", () => {
  console.log("Welcome current user blah blah blah blah")
})

function createMessage(input="Hello I am Clippy!") {
  const newMessage = document.createElement("p")
  const messageText = document.querySelector(".messages")
  newMessage.innerText = input
  messageText.append(newMessage)
}

helpButton.addEventListener("click", createMessage)
