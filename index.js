// GLOBAL CONSTANTS //

const exitButton = document.querySelector(".exit-button")
const messageWindow = document.querySelector("#message-window")
const fileSpan = document.querySelector("#file")
const profileButton = document.querySelector(".file-options span:nth-child(2)")
const helpButton = document.querySelector("#help")
const messages = document.querySelector(".messages")
const messageForm = document.querySelector(".message-form")

// CALLBACK FUNCTIONS //

function handleClickExitButton() {
  messageWindow.remove()
}

// EVENT HANDLERS //

exitButton.addEventListener("click", handleClickExitButton)

fileSpan.addEventListener("click", function(event) {
  console.log("Hello world")
  console.log(event)
})

profileButton.addEventListener("mouseover", () => {
  console.log("Welcome current user blah blah blah blah")
})

helpButton.addEventListener("click", (event) => {
  const newPTag = document.createElement("p")
  newPTag.innerHTML = '<span class="blue-text">2:08pm</span> Hi I\'m Clippy!'
  messages.append(newPTag)
  console.log(event.target)
})

messageForm.addEventListener("submit", (event) => {
  event.preventDefault()
  // console.log(event.target.messageInput.value)
  const messageForm = event.target
  const messageInput = messageForm.messageInput
  const messageValue = messageInput.value
  // console.log(messageValue)
  const myFancyNewParagraphTag = document.createElement("p")

  const currentDate = new Date()
  const minutes = currentDate.getMinutes()
  const hours = currentDate.getHours()

  myFancyNewParagraphTag.innerText = messageValue

  const timeSpan = document.createElement("span")
  timeSpan.textContent = `${hours}:${minutes}`
  timeSpan.className = "blue-text"

  myFancyNewParagraphTag.prepend(timeSpan)

  const messages = document.querySelector(".messages")
  messages.append(myFancyNewParagraphTag)
})

// here is an alternate way of attaching event listeners 
// exitButton.onclick = () => messageWindow.remove()
// exitButton.onmouseover = handleClickExitButton