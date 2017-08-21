// Opret en funktion som kan modtage en enkelt værdi, og console.logge værdien.
// Omskriv et forEach kald, så det ikke benytter en anonym funktion, men så det i stedet modtager den navngivet funktion du lige har oprettet.
//Øvelse 1

var data = [1, 2, 3, 4, 5, 6];

var printData = function (element) {
    console.log(element);
}

data.forEach(printData);

// Skriv din egen funktion, der kalder en callback funktion.

//     første funktion modtager en streng, og en callback funktion. funktionen skal tilføje et html <p> tag omkring strengen.
//     callback funktionen modtager den ændrede streng, og console.log'er den. men kaldet skal ske fra den første funktion.
//Øvelse 2

function addP(s, fun) {
    s = "<p> " + s + " </p";
    fun(s);
}

function callBack(s) {
    console.log(s);
}

addP("string", callBack);

// Afprøv ovenstående kode, og forsøg med egne ord at beskrive hvad det er der sker. Bryd kode eksemplet op i små bidder og benyt markdown til at beskrive det.
//Øvelse 3

//function keyword, function name, function parameters
function getData(dataURI, callback) {
    //console.log'ing
    console.log('første linje i getData funktionen...');
    //timeout startes, dvs det som står i krølleparanteser kommer til at blive kørt i baggrunden mens resten af programmet fortsætter, indtil den fastsatte tid er gået. 
    var timer = setTimeout(function () {
        //som der bliver log'et er der gået 2 sekunder, når log'en logges (havde det slet ikke sjovt med denne her formulering)
        console.log('Her der der gået 2 sekunder.');
        //arrayet som skal bruges om lidt bliver defineret
        var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
        //Et kald til outputData laves, med det netop definerede array som parameter. Denne eksekverer mens timeoutet kører. 
        callback(dataArray);
        //her defineres tiden på timeoutet i milisekunder (1000 ms = 1 s)
    }, 2000);
}

//metoden tager et array og udskriver det samtidigt med at tilføje noget tekst til udskriften
function outputData(myData) {
    console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
}

//kalder getData med en URL og en metode som parametre
getData('http://www.domain.com/something', outputData);

//meningen med næste linje er at illustrere, at selvom den normalt var blevet udskrevet til sidst, da den teknisk set står sidst i eksekveringsrækkefølgen, 
//så udskrives den ikke sidst i det her tilfælde, da koden som står "inde i timeouten" bliver sat på en slags pause, mens resten af programmet kører. 
console.log("Denne kode linje burde være den sidste.");


//alt i alt bruges timeoutet/eksemplet til at illustrere hvordan programmet kører flydende videre mens dataen hentes fra URL'en, samtidigt med at callbacks 
//illustreres på meningsfuld vis - nu er det ikke helt 100% det der sker, men nu er det hele også bare et eksempel. 
//der skal ikke for meget til for at skabe en sammenhæng mellem at hende data fra en url og at anvende asynkronitet/timeouts