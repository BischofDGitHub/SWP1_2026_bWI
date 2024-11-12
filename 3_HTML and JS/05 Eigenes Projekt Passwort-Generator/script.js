function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}



function copyToClipboard() {
    let output = document.getElementById("output");
    output.select();

    document.execCommand("copy");
    document.getElementById("info").innerText = "Copied to clipboard ✓";
}

/*
function formArray() {
    let chars = [];
    if (document.getElementById("capital").checked) {
        chars += ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }

    if (document.getElementById("lowercase").checked) {
        chars += ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    if (document.getElementById("numbers").checked) {
        chars += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }    

    if (document.getElementById("special").checked) {
        chars += ["$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"'];
    }

    return chars;
}
*/

function checkParameters() {
    let parameters = [
        "capital",
        "lowercase",
        "numbers",
        "special"
    ]

    let info = document.getElementById("info");

    if (document.getElementById("length").value > 0) {       
        for (let value of parameters) {                      //durchläuft alle werte des arrays parameters (let id in parameter würde alle indizes durchgehen(0, 1, 2, 3))
            if (document.getElementById(value).checked) {    //bei einem input mit dem type "checkbox" wird der wert (true, false)
                return true;                                 //mit .checked ausgegeben und nicht mit .value
            }
        }  
    }
    else {
        info.innerText = "The length of you password must be over 0!";
        return false;
    }
    info.innerText = "You have to tick at least one option for your password!";
    return false;
    
}

function formArray() {
    let chars = [];

    const options = {                                   //Array aus key value Paaren (hier ist der Index(key) nicht 0,1,2,...
        "capital": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",        // sondern die angegebenen keys("capital", "lowercase"))
        "lowercase": "abcdefghijklmnopqrstuvwxyz",
        "numbers": "0123456789",
        "special": "$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""
    };

    for (let id in options) {                           //id wird bei jeder Iteration um 1 erhöht (solange bis der letzte Index des
        if (document.getElementById(id).checked) {      // Arrays erreicht wird (hier: "special", da es key value paare sind))
            chars = chars.concat(options[id].split(""));
        }
    }

    return chars;
}

function printPassword() {
    let chars = formArray();
    let password = "";
    let randomIndex = 0;
    let len = document.getElementById("length").value;
    //let genText = "Generating.";
    let element = document.getElementById("output");
    
    if (checkParameters()) {
        for (let index = 0; index < len; index++) {                             //Erzeugung des zufälligen Passworts
            randomIndex = Math.floor(Math.random() * (chars.length + 1));

            while (randomIndex >= chars.length) {                               //überprüft ob der höchstmögliche zuffällige Wert
                randomIndex--;                                                  //erreicht wird (der Zufallswert zwischen 0 und 1
            }                                                                   //müsste genau 1 sein (sehr unwahrscheinlich))

            password += chars[randomIndex];
            //sleep(57);
            //sleep(Math.floor(Math.random() * 500 + 333));

            /*setTimeout(() => {
                if (element.innerText == "Generating...")
                {
                    element.innerText = genText;
                    genText = "Generating.";
                }
                else {
                    element.innerText = genText;
                    genText += ".";
                }
            }, 57);
            */
        }
        document.getElementById("info").innerText = "Password generated";
        element.innerText = password;  //Passwort wird auf der Website angezeigt
    }
    
}