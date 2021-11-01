const hex = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function myFunction() {
    let colour = randomColour();
    // let text = "Background Colour: " + colour;
    document.body.style.backgroundColor = colour;
    document.getElementById("colour").innerHTML = colour;
    document.getElementById("colour").style.color = colour;
}

function randomColour() {
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
        hexColour += hex[randomNumber()];
    }
    return hexColour;
}

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}