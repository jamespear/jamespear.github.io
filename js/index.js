document.getElementsByTagName("input")[0].addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(event) {
    if(event.code == "Enter") {
        alert("You pressed 'enter'");
    }
}