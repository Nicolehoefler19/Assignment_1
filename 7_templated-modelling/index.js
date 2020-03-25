
//Alert-Spam
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
           neuesAlter = prompt("Bitte gib doch ein richtiges Alter an... ich glaube wohl kaum, dass du " + alterEingabe + " Jahre alt bist");
        }
        while (isNaN(neuesAlter) == true || neuesAlter === "");
        result = "Danke geht doch... :P";
        alterEingabe = neuesAlter;
    }
    return result;
}

alert("Also du heißt " + nameneingabe + " und bist " + alterEingabe + " Jahre alt.");
alert("Genug Alerts für heute! Ist auch nicht gerade für die UX gut ;=)! Jetzt viel Spaß auf unserer Seite.");
