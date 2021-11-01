function myFunction() {
    let colour = randomColour();
    // let text = "Background Colour: " + colour;
    document.body.style.backgroundColor = colour;
    document.getElementById("colour").innerHTML = colour;
    document.getElementById("colour").style.color = colour;
}

function randomColour() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    return "#" + randomColor
}

