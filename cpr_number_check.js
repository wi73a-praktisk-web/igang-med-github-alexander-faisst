/*
    it checks for: 
        * the number being 10 characters long
        * those characters being nothing but digits
        * the day, month and year having correct values
        * the 7th digit (technically) matching the year's value
    if either one of the cases above fail, the program breaks or throws a simple error message

    i am however considering also running a check/control on the entire number, using the modulus-11 method. However, ït's 
    been officially outdated since 2007, so it would mostly be for experimental purposes. 
*/

/* var cpr_number = "0104909995"; */
var cpr_number = "04111923193";

// var cpr_number = "1509819996";

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
        var gender = cpr_number.charAt(9)%2 == 0 ? 'woman' : 'man';
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

checkCPR(cpr_number);