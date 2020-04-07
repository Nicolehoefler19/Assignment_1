
//Alert-Spam
/*
alert("Willkommen! Wir begrüßen die recht herzlich auf unserer Webseite! >_<");

do {
  var nameneingabe = prompt("Wie dürfen wir dich begrüßen? Gib mindestens 3 Zeichen ein:");
  var pruefungLaenge = nameneingabe.length; //prufeungLaenge wird zu Int
  
  if (pruefungLaenge > 1) {
      alert("Gut " + nameneingabe + "! Dann können wir gleich loslegen. Doch ich brauche noch mehr Infos!"); //Shorthand noch machen
  }
  
  else {
      console.log("Eingabe war ungültig! Eingabe hat weniger als 2 Buchstaben");
      alert("Ups. Dein Name hat bestimmt mehr als zwei Buchstaben ;).");
  }
  }
while(pruefungLaenge < 2);

var alterEingabe = prompt("Jetzt brauchen wir noch dein Alter. Du musst mindestens 15 Jahre alt sein. Wie alt bist du?");

alert(setAge(alterEingabe));

function setAge(alter){

    let pruefungAlter = alter; //in Int umwandeln 
    var result;
    if (pruefungAlter > 14){
        result = "Glückwunsch du bist mit deinem Alter von " + alterEingabe + " alt genug!";
    }

    else if (pruefungAlter < 15){
        result = "Oh du bist nur " + alterEingabe + "! Hmmmm... ok ausnahmsweise darfst du trotzdem rein.";
    }

    else {
        do {
           neuesAlter = prompt("Bitte gib doch ein richtiges Alter an... ich glaube wohl kaum, dass du " + alterEingabe + " Jahre alt bist:");
        }
        while (isNaN(neuesAlter) == true || neuesAlter === "");
        result = "Danke geht doch... :P";
        alterEingabe = neuesAlter;
    }
    return result;
}

alert("Also du heißt " + nameneingabe + " und bist " + alterEingabe + " Jahre alt.");
alert("Genug Alerts für heute! Ist auch nicht gerade für die UX gut ;=)! Jetzt viel Spaß auf unserer Seite.");
*/

var nameneingabe = "NikiTEST"; //muss später WEG!!!
var meinTitle = document.getElementById("meintitle");
meinTitle.innerHTML = "Willkommen " + nameneingabe + " zu Modelling: deinem Modeberater!"; //Personalisiert die Seite

//Button Feature

//var element = document.getElementById('rabatt'); //Button wird aufgerufen
//element.addEventListener('click', getRabatt);

//Rabattbutton

//counter
var counterForQuestion = 0;
var counterForRadio = 0;

function getRabatt() {

    //Rabattfrage
    if (counterForQuestion<1){

        counterForQuestion++;
        var myh2ForConfirm = document.createElement('h2');
        var myConfirmQuestion = document.createTextNode('Willst du diesen Rabatt wirklich haben?');

        myh2ForConfirm.appendChild(myConfirmQuestion);

        var printInSection = document.getElementById('a');
        printInSection.appendChild(myh2ForConfirm);
    }

    else {
        document.getElementById('rabatt'). disabled = true;
    }
    
    document.getElementById('rabatt'). disabled = false;

    //Überprüfung auf Aktivität des Buttons
    if (document.getElementById('rabatt').disabled === false){
        console.log("Rabatt-Button ist aktiv");
    }

    else if(document.getElementById('rabatt').disabled = true){
        console.log("Rabatt-Button ist noch inaktiv");
    }

    else{
        console.log("ERROR: Ein Fehler ist aufgetreten!");
    }

    //Radio kreieren
    while (counterForRadio<1){ //funktioniert auch

        if (counterForRadio<1){
            document.getElementById('a').innerHTML += "<input type='radio' id='yes'>Ja</input>" + "<input type='radio' id='no'>Nein</input>";
            counterForRadio++;//Kann man aber nicht mehr anklicken (radio)
        }

        else {
            document.getElementById('rabatt').disabled = true;
            document.getElementById('a').innerHTML += "<input type='radio' id='yes'>Ja</input>" + "<input type='radio' id='no'>Nein</input>";
        }

    }

    //Auswahlmöglichkeiten

    var yesRadio = document.getElementById('yes');
    var noRadio = document.getElementById('no');

    yesRadio.addEventListener('click', myFunction);
    noRadio.addEventListener('click', myOtherFunction);

    function myFunction(){
        document.getElementById('no').disabled = true;

        document.getElementById('a').innerHTML += '<h3>Super! Für deine Antwort bekommst du nochmal 90% Rabatt!<h3/>';
        //gif animieren (JS Animation)

        document.getElementById('a').innerHTML += '<input type="button" id="shutdownButton" value="Weiter"></input>';
        //Button mit weiter -> wenn der klickt -> Shutdown


    }

    function myOtherFunction(){
        document.getElementById('yes').disabled = true;
        
        document.getElementById('a').innerHTML += '<h3>Waaas? Warum nimmst du ein solches Angebot nicht an? Wähle eine oder mehrere Antwort! (Ich bin enttäuscht :()<h3/>';
        document.getElementById('a').innerHTML += 
        '<form><input type="checkbox" id="choice1" name="choices">Ich hab kein Bock mehr!</input></form>' + //vereinfachen
        '<form><input type="checkbox" id="choice2" name="choices">Ich will mehr Rabatt</input></form>' + 
        '<form><input type="checkbox" id="choice3" name="choices">Keine Ahnung ich bin lost!</input></form>';

        //Eigene Antwort
        document.getElementById('a').innerHTML += 
        '<form><input id="freechoice" name="choices" value="Eigene Antwort"></input></form>'; //Style + InnerText wegmachen

        document.getElementById('a').innerHTML += '<form><input type="submit" id="ok" value="senden"></input></form>';

        window.document.getElementById('ok').addEventListener('click', submitted);

        function submitted(){
            //Machwas
        }


    }

}
/*
var onoffsetter = false;

function changeArticlesOne(){
    var clothelist = Array.from(window.document.getElementsByClassName("clothes"));
    if (!onoffsetter){
        clothelist.forEach(function (addthis){

           // addthis.classList.toggle("fashionlist"); //das in Dokumentation betonen als neue Funktion
            addthis.innerHTML += '<form><input type="button" class="moreinfo" value="Just hover to see more details"></input></form>'; //wird immer wieder produziert

            //let moreInformation = window.document.getElementById("moreinfo"); //cooler, wenn man drüber Hovert
            //moreInformation.innerHTML += '<p>Platzhalter</p>' //hier muss erster Index angesprochen werden
        })//warum flasch
        //Inhalte vllt noch CSS verändern
        var myArray = Array.from(window.document.getElementsByClassName("moreinfo"));

        var firstButton = myArray[0];

        firstButton.addEventListener('mouseover', ausgabe1);

        function ausgabe1(){
            window.document.getElementById("dress").innerHTML += '<label>Platzhalter</label>'; //funktioniert aber 4x
            console.log("Erfolgreich ausgegeben");
        }

        var secondButton = myArray[1];

        secondButton.addEventListener('mouseover', ausgabe2);

        function ausgabe2(){
            window.document.getElementById("skirt").innerHTML += '<label>Platzhalter</label>'; //funktioniert aber 4x
            console.log("Erfolgreich ausgegeben");
        }

        var thirdButton = myArray[2];

        thirdButton.addEventListener('mouseover', ausgabe3);

        function ausgabe3(){
            window.document.getElementById("tshirt").innerHTML += '<label>Platzhalter</label>'; //funktioniert aber 4x
            console.log("Erfolgreich ausgegeben");
        }

        var fourthButton = myArray[3];

        fourthButton.addEventListener('mouseover', ausgabe4);

        function ausgabe4(){
            window.document.getElementById("shoes").innerHTML += '<label>Platzhalter</label>'; //funktioniert aber 4x
            console.log("Erfolgreich ausgegeben");
        }
        
        onoffsetter = true;

    }

    else{

        var hidebuttons = document.getElementsByClassName("fashionlist");
        hidebuttons.style.display = 'none';
        /*clothelist.forEach(function (addthis){
            addthis.classList.toggle("fashionlist");
            addthis.innerHTML += "Fashion articles";
        })*/
        onoffsetter = false;
    }//prüfen was falsch ist
}

function changeArticlesTwo(){
//kommt dasselbe wie oben rein nur anderer Text
//die andere Funktion muss gehidded werden

}


