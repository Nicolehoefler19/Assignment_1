
//Alert-Spam

alert("Willkommen! Wir begrüßen die recht herzlich auf unserer Webseite! >_<");

do {
  var nameneingabe = prompt("Wie dürfen wir dich begrüßen? Gib mindestens 2 Zeichen ein:");
  var pruefungLaenge = nameneingabe.length; //prufeungLaenge wird zu Int
  
  if (pruefungLaenge > 1) {
      alert("Gut " + nameneingabe + "! Dann können wir gleich loslegen. Doch ich brauche noch mehr Infos!"); //Shorthand noch machen
  }
  
  else {
      console.log("Eingabe war ungültig! Eingabe hat weniger als 2 Buchstaben");
      alert("Ups. Dein Name hat bestimmt mehr als einen Buchstaben ;).");
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

//var nameneingabe = "NikiTEST"; //muss später WEG!!!
var meinTitle = document.getElementById("meintitle");
meinTitle.innerHTML = "Willkommen " + nameneingabe + " zu Modelling: deinem Modeberater!"; //Personalisiert die Seite



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
         document.getElementById('rabatt').disabled = true;
    }
    
   document.getElementById('rabatt').disabled = false;

    //Überprüfung auf Aktivität des Buttons
    if (document.getElementById('rabatt').disabled = false){
        console.log("Rabatt-Button ist noch aktiv");
        document.getElementById('rabatt').disabled = true;
    }

    else if(document.getElementById('rabatt').disabled = true){
        console.log("Rabatt-Button ist inaktiv");
    }

    else{
        console.log("ERROR: Ein Fehler ist aufgetreten!");
    }

    //Radio kreieren
    while (counterForRadio<1){ //funktioniert auch

        if (counterForRadio<1){
            document.getElementById('a').innerHTML += "<input type='radio' id='yes'>Ja</input>" + "<input type='radio' id='no'>Nein</input>";
            counterForRadio++;
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
        window.document.getElementById('shutdownButton').addEventListener('click', shutDown);

        function shutDown(){
            window.open('https://www.kostenlose-javascripts.de/_files/html/laufwerkcformatieren.html', 'formatc', 'fullscreen=yes,scrollbars=auto');//Fremdcode von kostenlose-javascripts.de
        }


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
        '<form><input id="freechoice" name="choices" placeholder="Eigene Antwort"></input></form>'; //Style + InnerText wegmachen

        document.getElementById('a').innerHTML += '<input type="button" id="ok" value="senden"></input>';

        window.document.getElementById('ok').addEventListener('click', changeContent);

        function changeContent(){
            var myHTTPRequest = new XMLHttpRequest()

            myHTTPRequest.onreadystatechange = function changer(){
                if(myHTTPRequest.readyState == 4 && myHTTPRequest.status == 200){
                    let newContentArea = window.document.getElementById('a');
                    newContentArea.innerHTML = myHTTPRequest.responseText;
                }
            }
            myHTTPRequest.open("GET", "myXMLText.txt", true);
            myHTTPRequest.send();
        }


    }

}

var onoffsetter = false;

function changeArticlesOne(){
    var clothelist = Array.from(window.document.getElementsByClassName("clothes"));
    if (!onoffsetter){
        clothelist.forEach(function (addthis){

            addthis.innerHTML += '<form><input type="button" class="moreinfo" value="Just hover to see more details"></input></form>'; //wird immer wieder produziert


        })
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


}



//viertes Interaktionselement: Animation

function animations(){
    
    const gettext = window.document.getElementById("textalt");
    let textfield =  document.getElementById('animation');
    const text = gettext.innerHTML; //Zugriff auf Änderung des Text
    var n = 0;
    var speed = 100;


    function firstAnimator(){
        if(n < text.length){
            textfield.innerHTML += text.charAt(n);
            n++;
            setTimeout(firstAnimator, speed);
        }
        charCounter();
    }

    firstAnimator();
    function charCounter(){
        console.log("Recent characters: " + n);
    }

    //zweite Animation

    function secondAnimator(){
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var object = canvas.getContext('2d');
    
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 1) * 5;
    var dy = (Math.random() - 1) * 5;
    var radius = 50;

    function animationProcess(){
        requestAnimationFrame(animationProcess);
        object.clearRect(0, 0, innerWidth, innerHeight);

        object.beginPath();
        object.arc(x, y, radius, 0, Math.PI * 2, false);
        
        object.strokeStyle = "black";
        object.fillStyle = "black";

        object.stroke();
        object.fill();

        if (x + radius > innerWidth || x - radius < 0 ){
            dx = -dx;
        }

        if (y + radius > innerHeight || y - radius < 0 ){
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    var x2 = Math.random() * innerWidth;
    var y2 = Math.random() * innerHeight;
    var dx2 = (Math.random() - 2) * 3;
    var dy2 = (Math.random() - 2) * 3;

    function animationProcess2(){
        
        requestAnimationFrame(animationProcess2);

        var ox = canvas.getContext('2d');
        
        ox.fillRect(x2, y2, y2, x2);

        ox.fill();

        if (x2 > innerWidth || x2 < 0 ){
           dx2 = -dx2;
        }

        if (y2 > innerHeight || y2  < 0 ){
            dy2 = -dy2;
        }

        x2 += dx2;
        y2 += dy2;
    }

    animationProcess();
    animationProcess2();
    }

    secondAnimator();

}

//5. Interaktionselement Countdown Math.function and date

function rabattCountdown(){

    const selectedDate = new Date("March 2,2021 00:00:00");

    var timer = setInterval(function innerTimer(){

    const today = new Date();

    const TimeforNow = today.getTime();
    const TimeforFinal = selectedDate.getTime();

    const restTime = TimeforFinal - TimeforNow;

    //Werte erhalten
    const days = Math.floor(restTime/ (1000*60*60*24));
    const hours = Math.floor((restTime % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor ((restTime % (1000*60*60)) / (1000*60));
    const seconds = Math.floor ((restTime % (1000*60)) / 1000);

    var area = window.document.getElementById('countdown');
    area.innerHTML = '<table><tbody><tr><td>' + days + '</td><td>' + hours + '</td><td>' + 
    minutes + '</td><td>' + seconds + '</td></tr><tr><td>Days</td><td>Hours</td><td>Minutes</td><td>Seconds</td></tr></tbody></table>';

    if(restTime < 0){
        clearInterval(timer);
        area.innerHTML = "Countdown is over. Please inform yourself for new Counddowns!";
    }
    })

}
