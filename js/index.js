document.getElementsByTagName("input")[0].addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(event) {
    if(event.code == "Enter") {
        alert("You pressed 'enter'");
    }
}

if (window.location.href==="https://jamespear.github.io/") {
    window.location.href = "https://cal-cs184-student.github.io/hw-webpages-sp24-jamespear/"; 
}