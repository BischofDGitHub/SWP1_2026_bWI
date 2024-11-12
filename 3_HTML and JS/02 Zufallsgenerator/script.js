function generateClicked() {
    num1 = parseFloat(document.getElementById("number1").value);
    num2 = parseFloat(document.getElementById("number2").value);

    let range = Math.abs(num2 - num1);
    let randomNumber = 0;

    if (num1 < num2) {
        randomNumber = Math.floor(Math.random() * range + num1);
    }
    else {
        randomNumber = Math.floor(Math.random() * range + num2);
    }
    
    if (randomNumber == 0) {
        var audio = new Audio('cat-laughing.mp3');
        audio.play();  
        setTimeout(function(){}, 500)
        document.getElementById("output").innerHTML = "Deine Zufallszahl ist " + randomNumber + '. Du hast ein Easteregg gefunden ;) <img id="image" src="image.png">';
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", '_blank');     
                 //https://www.myinstants.com/en/search/?name=cat+laugh  für mehr cat meme sounds
        
        try {
            document.getElementById("body").id = "bodySecret";
        } catch (error) {
            
        }
    }
    else {
        document.getElementById("output").innerText = "Deine Zufallszahl ist " + randomNumber;
        try {
            document.getElementById("bodySecret").id = "body";
        } catch (error) {
            
        }
    }

}

function deleteOnClick(event) {
    document.getElementById(event.target.id).value = "";
}

alert("Benutze alert(...) um diese Nachricht anzuzeigen! PS: Versuche die Zahl 0 zu bekommen ;)");