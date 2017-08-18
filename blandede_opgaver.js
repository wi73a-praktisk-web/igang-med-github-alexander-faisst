//BMI 
/* var bmi = (w, h) => {
    var x = (w / h).toFixed(1);
    console.log(x + ' ' + h + ' ' + w);
    switch (true) {
        case x <= 18.4:
            console.log("undervægtig");
            break;
        case x >= 18.5 && x <= 24.9:
            console.log("normalvægtig");
            break;
        case x >= 25.0 && x <= 29.9:
            console.log("overvægtig");
            break;
        case x >= 30.0 && x <= 39.9:
            console.log("fedme");
            break;
        case x >= 40.0:
            console.log("svær fedme");
            break;
        default:
            console.log("invalid value");
            break;
    }
}

bmi(65, (Math.pow(1.75, 2))); */

//Fartbøder
/* hastighedsbregrænsning
kørt hastighed
vejarbejde j/n

Funktionen skal beregne og returnere bødetaksten, 
og evtentuelle Klip, betinget- eller ubetinget frakendelsle af kørekorten. */

var fartbode = (max, actual, roadwork) => {
    var bodetakst = 0;
    var klip = false;
    var betinget = false;
    var ubetinget = false;
    switch (max) {
        case 50:
            switch (true) {
                case actual >= 51 && actual <= 59:
                    bodetakst = 1000;
                    break;
                case actual === 60 && actual <= 64:
                    bodetakst = 1500;
                    break;
                case actual === 65:
                    bodetakst = 2500;
                    klip = true;
                    break;
                case actual >= 66 && actual <= 69:
                    bodetakst = 2500;
                    klip = true;
                    break;
                case actual >= 70 && actual <= 79:
                    bodetakst = 3000;
                    klip = true;
                    break;
                case actual === 80:
                    bodetakst = 3500;
                    betinget = true;
                    break;
                case actual >= 81 && actual <= 84:
                    bodetakst = 3500;
                    betinget = true;
                    break;
                case actual >= 85 && actual <= 89:
                    bodetakst = 4000;
                    betinget = true;
                    break;
                case actual >= 90 && actual <= 94:
                    bodetakst = 4500;
                    betinget = true;
                    break;
                case actual >= 95 && actual <= 99:
                    bodetakst = 5500;
                    betinget = true;
                    break;
                case actual == 100:
                    bodetakst = 6000;
                    betinget = true;
                    break;
                case actual > 101:
                    bodetakst = 6000;
                    ubetinget = true;
                    break;
                default:
                    console.log("invalid value inner");
                    break;
            }
            break;
        case 80:
            switch (true) {
                case actual >= 81 && actual <= 95:
                    bodetakst = 1000;
                    break;
                case actual >= 86 && actual <= 103:
                    bodetakst = 1500;
                    break;
                case actual === 104:
                    bodetakst = 2500;
                    break;
                case actual >= 105 && actual <= 111:
                    bodetakst = 2500;
                    klip = true;
                    break;
                case actual >= 112 && actual <= 127:
                    bodetakst = 3000;
                    klip = true;
                    break;
                case actual == 128:
                    bodetakst = 3500;
                    klip = true;
                    break;
                case actual >= 129 && actual <= 135:
                    bodetakst = 3500;
                    betinget = true;
                    break;
                case actual >= 136 && actual <= 139:
                    bodetakst = 4000;
                    betinget = true;
                    break;
                case actual >= 140 && actual <= 143:
                    bodetakst = 5000;
                    betinget = true;
                    break;
                case actual >= 144 && actual <= 149:
                    bodetakst = 5500;
                    betinget = true;
                    break;
                case actual >= 150 && actual <= 151:
                    bodetakst = 6000;
                    betinget = true;
                    break;
                case actual >= 152 && actual <= 159:
                    bodetakst = 7000;
                    betinget = true;
                    break;
                case actual === 160:
                    bodetakst = 8000;
                    betinget = true;
                    break;
                case actual > 161:
                    bodetakst = 8000;
                    ubetinget = true;
                    break;
                default:
                    console.log("Invalid value inner");
                    break;
            }
            break;
        case 110:
            switch (true) {
                case actual >= 111 && actual <= 131:
                    bodetakst = 1000;
                    break;
                case actual >= 132 && actual <= 139:
                    bodetakst = 1500;
                    break;
                case actual >= 140 && actual <= 142:
                    bodetakst = 2500;
                    break;
                case actual === 143:
                    bodetakst = 3000;
                    break;
                case actual >= 144 && actual <= 149:
                    bodetakst = 3000;
                    klip = true;
                    break;
                case actual >= 150 && actual <= 153:
                    bodetakst = 3500;
                    klip = true;
                    break;
                case actual >= 154 && actual <= 159:
                    bodetakst = 4500;
                    klip = true;
                    break;
                case actual >= 160 && actual <= 164:
                    bodetakst = 4500;
                    betinget = true;
                    break;
                case actual >= 165 && actual <= 169:
                    bodetakst = 5000;
                    betinget = true;
                    break;
                case actual >= 170 && actual <= 175:
                    bodetakst = 5500;
                    betinget = true;
                    break;
                case actual >= 176 && actual <= 179:
                    bodetakst = 6000;
                    betinget = true;
                    break;
                case actual >= 180 && actual <= 186:
                    bodetakst = 6500;
                    betinget = true;
                    break;
                case actual >= 187 && actual <= 189:
                    bodetakst = 7500;
                    betinget = true;
                    break;
                case actual >= 190 && actual <= 197:
                    bodetakst = 8000;
                    betinget = true;
                    break;
                case actual >= 198 && actual <= 199:
                    bodetakst = 8500;
                    betinget = true;
                    break;
                case actual >= 200 && actual <= 208:
                    bodetakst = 9000;
                    ubetinget = true;
                case actual === 209:
                    bodetakst = 10500;
                    ubetinget = true;
                    break;
                case actual >= 210 && actual <= 219:
                    bodetakst = 11000;
                    ubetinget = true;
                    break;
                case actual > 220:
                    bodetakst = 12500;
                    ubetinget = true;
                    break;
                default:
                    console.log("Invalid value inner");
                    break;
            }
            break;
        case 130:
            switch (true) {
                case actual >= 131 && actual <= 139:
                    bodetakst = 1000;
                    break;
                case actual >= 140 && actual <= 149:
                    bodetakst = 2000;
                    break;
                case actual >= 150 && actual <= 155:
                    bodetakst = 2500;
                    break;
                case actual >= 156 && actual <= 159:
                    bodetakst = 3000;
                    break;
                case actual >= 160 && actual <= 168:
                    bodetakst = 3500;
                    betinget = true;
                    break;
                case actual === 169:
                    bodetakst = 4000;
                    betinget = true;
                    break;
                case actual >= 170 && actual <= 179:
                    bodetakst = 4500;
                    betinget = true;
                    break;
                case actual >= 180 && actual <= 181:
                    bodetakst = 5000;
                    betinget = true;
                    break;
                case actual >= 182 && actual <= 189:
                    bodetakst = 5500;
                    betinget = true;
                    break;
                case actual >= 190 && actual <= 194:
                    bodetakst = 6000;
                    betinget = true;
                    break;
                case actual >= 195 && actual <= 199:
                    bodetakst = 7500;
                    betinget = true;
                    break;
                case actual === 200:
                    bodetakst = 7000;
                    ubetinget = true;
                    break;
                default:
                    console.log("invalid value inner");
                    break;
            }
            break;
        default:
            console.log("invalid value outer");
            break;
    }
    if (roadwork) {
        bodetakst = (bodetakst * 2);
    }
    //console.log("Bødetakst: " + bodetakst + ",\n" + "Klip: " + klip + ",\n" + "Betinget frakendelse: " + betinget + ",\n" + "Ubetinget frakendelse: " + ubetinget);
}

fartbode(80, 200, true);

/**
 * promille = promille
 * x = amount of times stopped
 * y = amount of years having had a license
 * funktionen virker sådan nogenlunde, men lige foreløbigt har jeg brug for at lave noget andet/en anden opgave
 */

var spritkorsel = (promille, x, y) => {
    var bode = "";
    var konsekvenser = "";
    var betinget = false;
    var fangselBetinget10Dage = false, fangselBetinget20Dage = false, fangselBetinget30Dage = false;
    var fangselUbetinget30Dage = false, fangselUbetinget50Dage = false;
    var fangselUbetingetMindst20Dage = false, fangselUbetingetMindst40Dage = false;
    var forbudPermanent = false;
    var forbudMindst3Aar = false;
    var forbud3AarUbetinget = false, forbud5AarUbetinget = false;

    switch (x) {
        case 1:
            switch (true) {
                case promille >= 0.51 && promille <= 2.1:
                    betinget = true;
                    konsekvenser += "betinget frakendelse" + betinget.toString();
                    break;
                case promille >= 1.2:
                    forbudMindst3Aar = true;
                    konsekvenser += "Frakendelse i mindst 3 år " + forbudMindst3Aar.toString();
                    break;
                case promille >= 0.5 && y <= 3:
                    if (y < 3) {
                        forbudPermanent = true;
                        konsekvenser += "Ubetinget permanent frakendelse " + forbudPermanent.toString();
                    }
                    break;
                case promille >= 2:
                    fangselBetinget20Dage = true;
                    konsekvenser += "betinget fængsel i 20 dage " + fangselBetinget20Dage.toString();
                    break;
                case promille >= 0.51 && promille <= 2.0:
                    bode = "netto maanedslon x promille";
                    break;
                case promille >= 2.1:
                    bode = "netto maanedslon";
                    break;
                default:
                    console.log("invalid value inner 1");
                    break;
            }
            break;
        case 2:
            switch (true) {
                case promille >= 0.51 && promille <= 1.2:
                    forbud3AarUbetinget = true;
                    fangselBetinget10Dage = true;
                    konsekvenser += "betinget frakendelse" + forbud3AarUbetinget.toString() + "betinget fængsel i 10 dage = " + fangselBetinget10Dage.toString();
                    bode = "netto månedsløn";
                    break;
                case promille >= 1.2:
                    forbud5AarUbetinget = true;
                    konsekvenser += "5 års ubetinget frakendelse" + forbud5AarUbetinget.toString();
                    bode = "netto månedsløn";
                    break;
                case promille >= 1.21 && y <= 3:
                    fangselBetinget10Dage = true;
                    konsekvenser += "betinget fængsel 10 dage" + fangselBetinget10Dage.toString();
                    bode = "netto månedsløn";
                    break;
                case promille >= 2:
                    fangselBetinget30Dage = true;
                    konsekvenser += "betinget frakendelse" + fangselBetinget30Dage.toString();
                    bode = "netto månedsløn";
                    break;
                default:
                    console.log("invalid value inner 2");
                    break;
            }
            break;
        case 3:
            switch (true) {
                case promille >= 0.51 && promille <= 1.2:
                    bode = "netto månedsløn";
                    forbud3AarUbetinget = true;
                    fangselUbetingetMindst20Dage = true;
                    konsekvenser += "3 års ubetinget frakendelse" + forbud3AarUbetinget.toString() + "ubetinget fængsel i mindst 20 dage" + fangselUbetingetMindst20Dage.toString();
                    break;
                case promille >= 1.21 && promille <= 2.0:
                    bode = "netto månedsløn";
                    fangselUbetingetMindst20Dage = true;
                    forbud10AarUbetinget = true;
                    konsekvenser += "ubetinget fængsel i mindst 20 dage = " + fangselUbetingetMindst20Dage.toString() + "10 års ubetinget forbud" + forbud10AarUbetinget.toString();
                    break;
                case promille >= 2:
                    bode = "netto månedsløn";
                    fangselUbetingetMindst40Dage = true;
                    konsekvenser += "40 års ubetinget fængsel" + fangselUbetingetMindst40Dage.toString();
                    break;
                default:
                    console.log("invalid value inner 3");
                    break;
            }
            break;
        case 4:
            switch (true) {
                case promille >= 0.5 && promille <= 2:
                    fangselUbetinget30Dage = true;
                    konsekvenser += "30 dages ubetinget fængsel = " + fangselUbetinget30Dage.toString();
                    bode = "fastsat af retten"
                    break;
                case promille >= 2:
                    fangselUbetinget50Dage = true;
                    konsekvenser += "50 dages ubetinget fængsel = " + fangselUbetinget50Dage.toString();
                    bode = "fastsat af retten";
                    break;
                default:
                    console.log("invalid value inner 4");
                    break;
            }
            break;
        default:
            console.log("invalid value outer BOOOO");
            break;
    }

    var result = "Personen havde en promille på " + promille + "og har overtrådt loven den " + x + "'te gang. Derfor er bøden " + bode + " og konsekvenserne er " + konsekvenser;
    console.log(result);
}

spritkorsel(1, 1, 4);

//Palindrome
var palindrome = s => {
    var sReverse = s.split('').reverse().join("");
    var sNormal = s.split('').join("");
    console.log(sNormal + " " + sReverse);
    if (sReverse == sNormal) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}

palindrome("anna");

//Plum Bus
for (i = 1; i < 137; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        console.log("Plum Bus");
    }
    else if (i % 3 === 0 && i !== 0) {
        console.log("Plum");
    }
    else if (i % 5 === 0 && i !== 0) {
        console.log("Bus")
    }
    else {
        console.log(i);
    }
}

//Remove Spaces
var removeSpaces = s => { console.log(s.trim()); return s.trim(); }
removeSpaces("    anna     ");

//Lig Eller Ulig
//Mit bud må være et man vel kunne runde decimaler op eller ned, men det ville stadig give unøjagtige resultater. Et decimaltal vil vel være og forblive et decimaltal. 
//Det eneste virkelige alternativ ville være at gange det med hvad der end skal til for at man ender med enten 0 eller 1 hvis man så bagefter tager modulus af det - 
//lidt á la hvordan man ganger med 100 i procentregning - men det virker rimelig uhensigtsmæssigt. 
var ligeEllerUlig = x => {
    if (x % 2 === 0) {
        console.log("even");
        return 1;
    }
    else if (x % 2 === 1) {
        console.log("uneven");
    }
    else {
        console.log("Error");
    }
}

ligeEllerUlig(10);
ligeEllerUlig(5);
ligeEllerUlig(10.5);

//Roulette Array
var rouletteArray = (p,x) => {
    console.log(p[x]);
    return p[x];
}

; // returnerer ".bright"
[".bright", ".dark"];  // returnerer ".dark"
rouletteArray([".bright", ".dark"], 0);
rouletteArray([".bright", ".dark"], 1);
rouletteArray(["rød", "grøn", "blå"],0);
rouletteArray(["rød", "grøn", "blå"],1);
rouletteArray(["rød", "grøn", "blå"],2);

//Vinkel 360
//virker dog mærkeligt at skulle gøre det på denne måde..funktionen fungerer perfekt bare ved at returnere x's rest efter man har taget modulus af 360, men det tager ikke højde
//-10 der returnerer 350..er ikke sikker på hvad der er meningen her, men der må jo være en

var vinkel360 = x => {
    if(x >= 0) {
        console.log(Math.abs(x)%360);
        return Math.abs(x)%360;
    }
    else {
        console.log(x+360);
        return x+360;
    }
}

vinkel360(0);
vinkel360(360);
vinkel360(720);
vinkel360(10);
vinkel360(-10);
vinkel360(365);
vinkel360(725);

//Vinkel 2D
var vinkel2D = (x1,y1,x2,y2) => {
    console.log(Math.sqrt(Math.pow((x2-x1),2) +  Math.pow((y2-y1),2)));

    return Math.sqrt(Math.pow((x2-x1),2) +  Math.pow((y2-y1),2));
}

vinkel2D(0,  0,  1,  0);
vinkel2D(0,  0,  5,  0);
vinkel2D(2,  0,  5,  0);
vinkel2D(0,  0,  1,  1);
vinkel2D(1,  1,  2,  2);
vinkel2D(2,  2,  3,  3);
vinkel2D(0,  0,  2,  2);
vinkel2D(-1,  -1,  1,  1);

//Fejlbeskeder
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var navn = "";
var alder = "";
var adresse = "";

var fejlbeskeder = "";

if (navn == "") {
	fejlbeskeder += "Du skal udfylde navn feltet\n";
}

if (alder == "") {
	fejlbeskeder += "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
	fejlbeskeder += "Du skal udfylde adresse feltet\n";
}

console.log (fejlbeskeder);

//Fejlbeskeder #2
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var brugernavn = "";
var password = "";
var email = "";

var fejlbeskeder = [];

if (brugernavn == "") {
	fejlbeskeder.push(["Du skal udfylde brugernavn feltet\n"]);
}

if (password == "") {
	fejlbeskeder.push(["Du skal udfylde password feltet\n"]);
}

if (email == "") {
	fejlbeskeder.push(["Du skal udfylde email feltet\n"]);
}


//Fejlbeskeder #3
//Problemet er plingerne. De udgør forskellen om man bare lægger en række strings sammen eller om man referer til de variabler man prøver at sende funktionen i kaldet. 
console.log (fejlbeskeder);

function sammensaetTekst (forste, anden) {
	return forste + " " + anden;
}

var resultat = sammensaetTekst ("Mickey", "Mouse");

console.log (resultat); // Forventede resultat: "Mickey Mouse"