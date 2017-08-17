/*
    this version right now is super basic
    it checks for: 
        * the number being 10 characters long
        * those characters being nothing but digits
        * the day, month and year having correct values
        * the 7th digit (technically) matching the year's value
    if either one of the cases above fail, the program breaks or throws a simple error message
    
    NOTE: som algoritmen er skrevet lige nu, kan den godt spytte mærkelige resultater ud ift. sammenligningen af det 7. ciffer og årstallet - 
    dette skyldes at det 7. ciffer både kan indikere at man er født helt tilbage i 1858, eller så langt inde i fremtiden som 2057. 

    Jeg vil undersøge om man kan programmere sig uden om dette problem, men hvis ikke, så kan det være at der bare kræves en vis mængde 
    sund fornuft udover de funktioner som algoritmen dækker over. 

    Derudover har jeg tænkt mig at tilføje funktionalitet der siger noget om, om man er mand eller kvinde baseret på sit cpr nummer - 
    teknisk set findes dette ikke længere siden 2007, men sådan bare for sjovt - for my purposes it should still largely work.  
*/

/* var cpr_number = "0104909995"; */
/* var cpr_number = "0411923193"; */
var cpr_number = "1509819996";

function checkCPR(number) {
    //check at nummeret har den rigtige længde
    if (cpr_number.length === 10) {
        console.log("cpr number has the correct length")
        for (i = 0; i < cpr_number.length - 1; i++) {
            //check for hver character i cpr nummeret om det er et tal
            if (!isNaN(parseInt(cpr_number[i]))) {
                console.log(cpr_number[i]);
            }
            else {
                console.log("cpr number contains a letter and is hence invalid")
                break;
            }
        }
        var day = cpr_number.charAt(0) + cpr_number.charAt(1);
        console.log("day = " + day);
        var month = cpr_number.charAt(2) + cpr_number.charAt(3);
        console.log("month = " + month);
        var year = cpr_number.charAt(4) + cpr_number.charAt(5);
        console.log("year = " + year);
        var cp7 = parseInt(cpr_number[6]);
        console.log("cp7 = " + cp7);
        var gender = getGender(cpr_number.charAt(9));
        //check at dagen har en korrekt værdi
        if (day >= 1 && day <= 31) {
            console.log("the day is valid")
            //check at måneden har en korrekt værdi
            if (month >= 1 && month <= 12) {
                console.log("the month is valid")
                //check at året har en korrekt værdi
                if (year >= 0 && year <= 99) {
                    console.log("the year is valid")
                    //check at det 7'ende ciffer har en korrekt værdi
                    switch (cp7) {
                        //cp7 between 0-3 (both inclusive)
                        case 0: case 1: case 2: case 3:
                            if (year >= 00 && year <= 99) {
                                var fullYear = parseInt("19" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                                /* console.log("cipher #7 checks out"); */
                            }
                            break;
                        //cp7 is 4
                        case 4:
                            if (year >= 00 && year <= 36) {
                                var fullYear = parseInt("20" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                            }
                            else if (year >= 37 && year <= 99) {
                                var fullYear = parseInt("19" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                                /* console.log("cipher #7 checks out"); */
                            }
                            break;
                        //cp7 between 5 and 8 (both inclusive)
                        case 5: case 6: case 7: case 8:
                            if (year >= 00 && year <= 57) {
                                var fullYear = parseInt("20" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                            }
                            else if (year >= 58 && year <= 99) {
                                var fullYear = parseInt("18" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                                /* console.log("cipher #7 checks out"); */
                            }
                            break;
                        //cp7 is 9
                        case 9:
                            if (year >= 00 && year <= 36) {
                                var fullYear = parseInt("20" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                            }
                            else if (year >= 37 && year <= 99) {
                                var fullYear = parseInt("19" + year);
                                var age = 2017 - fullYear;
                                console.log("the person's age is = " + age + " and the gender is = " + gender);
                                /* console.log("cipher #7 checks out"); */
                            }
                            break;
                        //cp7 is invalid
                        default:
                            console.log("ERROR ERROR ERROR ERROR")
                            break;
                    }
                }
                else {
                    console.log("the year is invalid")
                }
            }
            else {
                console.log("the month is invalid")
            }
        }
        else {
            console.log("the day is invalid");
        }
    }
    else {
        console.log("the number has the wrong length and is invalid ")
    }
}

function getGender(n) {
    var x = n % 2;
    if (x == 0) {
        return "woman";
    }
    else if (x == 1) {
        return "man";
    }
}

checkCPR(cpr_number);


