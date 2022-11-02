function rechnen(event) {
    event.preventDefault();
    let grösse = document.getElementById("grösse").value;
    let alter = document.getElementById("alter").value;
    let gewicht = document.getElementById("gewicht").value;
    console.log(gewicht);
    let weiblich = document.getElementById("Frau").checked;
    // let männlich = document.getElementById("Mann").checked; Ist nicht notwendig wegen der SChreibweise des if-else.
    let grundumsatzkcal = 0;
    let grundumsatzKj = 0;
    let activity = Number(document.getElementById("activity").value);

    // Hier werden die Variablen verarbeitet
    if (weiblich == true) {
        grundumsatzkcal = GuF(grösse, alter, gewicht);
        grundumsatzKj = GuF(grösse, alter, gewicht) * 4.184;

    } else {
        grundumsatzkcal = GuM(grösse, alter, gewicht);
        grundumsatzKj = GuM(grösse, alter, gewicht) * 4.184;
    }

    //  Hier geht die Ausgabe los:
    document.getElementById("Gukcal").innerHTML = grundumsatzkcal.toFixed(2);
    document.getElementById("GukJ").innerHTML = grundumsatzKj.toFixed(2);
    document.getElementById("Geskcal").innerHTML = (grundumsatzkcal * activity).toFixed(2);
    document.getElementById("GeskJ").innerHTML = (grundumsatzKj * activity).toFixed(2);
}
function GuF(grösse2, alter2, gewicht2) {
    GrundumsatzFrauen = 655.1 + (9.6 * gewicht2) + (1.8 * grösse2) - (4.7 * alter2);
    return GrundumsatzFrauen;
    // Das Return ist notwendig damit diese Funktion in der vorherigen Funktion auch genutzt werden kann. 
    // Man könnte hier die Aktivität als 4. Parameter einbauen (in der Klammer) und in der Formel eine große setzen  (vor 655.1 und nach alter2) und danach * den Value-Wert.
}
function GuM(grösse3, alter3, gewicht3) {
    GrundumsatzMänner = 664.7 + (13.7 * gewicht3) + (5 * grösse3) - (6.8 * alter3);
    return GrundumsatzMänner;
}

// In diesem Fall kann die 2. Funktion auch unten stehen, denn die Funktion "rechne" wird erst mit dem Buttonclick abgerufen.

