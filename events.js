var clearAll = document.getElementById("clear-all");
// clearAll.setAttribute("disabled", true);
clearAll.disabled = true;

// TRIGGER MESSAGE TRANSFER FUNCTION ON ENTER KEY (KEYUP)
var messageInput = document.getElementById("message-input");
messageInput.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    transferMessage();
  }
});

// TRANSFER MESSAGE TO MESSAGE BOARD AND ENABLE CLEAR-ALL BUTTON
var messageBoard = document.getElementById("message-board");
function transferMessage() {
  // console.log("in function transferMessage");
  messageBoard.innerHTML += "<div>" + messageInput.value + " <input class='clear-message' type='button' value='Delete Message'>" + "<br>" + "</div>";
  messageInput.value = "";
  // clearAll.setAttribute("disabled", false);
  clearAll.disabled = false;
}

// CLEAR ENTIRE MESSAGE BOARD
var clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click", function () {
  // console.log("messageBoard should clear");
  messageBoard.innerHTML = "";
  clearAll.disabled = true;
});

// DELETE INDIVIDUAL MESSAGE LINES
document.querySelector("body").addEventListener("click", function(event) {
  // console.log(event);
  if (event.target.className === "clear-message") {
    // console.log("You clicked on `Delete Message`");
    // console.log(event.target.parentElement);
    // console.log("events:", event);
    // event.target.parentElement.innerHTML = "";
    event.target.parentElement.setAttribute("hidden", true);
  }
  // if (messageBoard.innerHTML.length < 1) {     // WORK ON THIS
  // 	clearAll.disabled = true;
  // }
});

// CHANGE COLOR THEME
var container = document.getElementById("container");

document.getElementById("dark-theme").addEventListener("click", function() {
	if (this.checked) {
	    container.style.backgroundColor = "DarkGray";
	    container.style.color = "SeaShell";
	 }
	else {
		container.style.backgroundColor = "White";
		container.style.color = "Black";
	}
});

// CHANGE FONT SIZE
document.getElementById("large-theme").addEventListener("click", function() {
	if (this.checked) {
	    messageInput.style.fontSize = "1.4rem";
	    messageBoard.style.fontSize = "1.4rem";
	 }
	else {
	    messageInput.style.fontSize = "1rem";
	    messageBoard.style.fontSize = "1rem";
	}
});





