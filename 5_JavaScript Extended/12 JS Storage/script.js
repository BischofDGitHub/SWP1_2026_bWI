localStorage.setItem("name", "too old");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
// wird nie geloescht

sessionStorage.setItem("name", "Max");      // Jeder Key kann nur einen Wert haben 
sessionStorage.setItem("name", "Raphael");  // Der Wert des Keys "name" wird ueberschrieben
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
// wird nach schließen des Tabs geloescht




// new Date().toUTCString(); wandelt das gewuenschte Datum in ein UTC Datum um
// Hier ist das expire Date beim 2. Januar 2025; Danach ist der Cookie ungueltig
// Wenn wir wollen, dass der Cookie niemals expired, dann muss kann zum Beispiel ein Datum, so weit in der Zukunft, angegeben
// werden, dass es egal ist (zum Beispiel das Jahr 9999. In diesem Jahr wird der Cookie nicht mehr relevant sein)
document.cookie = "name=Kyle; expires=" + new Date(2025, 2, 1).toUTCString();

//document.cookie fuegt ein Cookie hinzu, anstatt ihn zu ueberschreiben/loeschen
document.cookie = "lastName=Smith; expires=" + new Date(2025, 2, 1).toUTCString(); 

document.cookie = "name=Andi; expires=" + new Date(2025, 2, 1).toUTCString();
// Cookies koennen ueberschrieben werden, indem der gleiche Schluessel/key nochmals verwendet wird

console.log(document.cookie);
// Sehr schwer zu verwenden, daher wird es empfohlen eine library zu verwenden,
// die das Arbeiten mit Cookies erleichtert