function showAlert() {
    alert("Hello, world!");
}

function enlarge() {
    document.getElementById("inputField").style.fontSize = "24pt";
}

function fancy() {
    var textArea = document.getElementById("inputField");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function plain() {
    var textArea = document.getElementById("inputField");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooSuffix() {
    let textArea = document.getElementById("inputField");
    let text = textArea.value.toUpperCase();
    text = text.replace(/\./g, "-Moo.");
    textArea.value = text;
}
