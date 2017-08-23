
cpr_number = "0411923193";
var day = cpr_number.charAt(0) + cpr_number.charAt(1),
    month = cpr_number.charAt(2) + cpr_number.charAt(3),
    year = cpr_number.charAt(4) + cpr_number.charAt(5),
    cp7 = parseInt(cpr_number[6]),
    gender = cpr_number.charAt(9) % 2 == 0 ? 'woman' : 'man';
console.log("day = " + day + "month = " + month + "year = " + year + "cp7 = " + cp7);

//check at dagen har en korrekt værdi
var checkDay = number => {
    return new Promise((resolve, reject) => {
        if (number >= 1 && number <= 31) {
            resolve('the day is valid');
        } else {
            reject(new Error('the day is invalid'));
        }
    });
}

//check at måneden har en korrekt værdi
var checkMonth = number => {
    return new Promise((resolve, reject) => {
        if (number >= 1 && number <= 12) {
            resolve('the month is valid');
        } else {
            reject(new Error('the month is invalid'));
        }
    })
}

//check at året har en korrekt værdi
var checkYear = number => {
    return new Promise((resolve, reject) => {
        if (number >= 0 && number <= 99) {
            resolve('the year is valid');
        } else {
            reject(new Error('the year is invalid'));
        }
    })
}

//check at nummeret har den rigtige længde
let checkLength = s => {
    return new Promise((resolve, reject) => {
        if (s.length === 10) {
            resolve('the cpr number has the correct length');
        } else {
            reject(new Error('cpr number has an invalid length'));
        }
    })
}

//check at nummeret består af tal
var checkIfNan = number => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < cpr_number.length - 1; i++) {
            //check for hver character i cpr nummeret om det er et tal
            if (!isNaN(parseInt(cpr_number[i]))) {
                resolve("success, all character are digits");
            }
            else {
                reject("cpr number contains a letter and is hence invalid");
            }
        }
    })
}

//evaluer det 7. ciffer
var checkCP7 = number => {
    return new Promise((resolve, reject) => {
        //check at det 7'ende ciffer har en korrekt værdi
        switch (cp7) {
            //cp7 between 0-3 (both inclusive)
            case 0: case 1: case 2: case 3:
                if (year >= 00 && year <= 99) {
                    var fullYear = parseInt("19" + year);
                    var age = 2017 - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                break;
            //cp7 is 4
            case 4:
                if (year >= 00 && year <= 36) {
                    var fullYear = parseInt("20" + year);
                    var age = new Date().getFullYear() - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                else if (year >= 37 && year <= 99) {
                    var fullYear = parseInt("19" + year);
                    var age = new Date().getFullYear() - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                break;
            //cp7 between 5 and 8 (both inclusive)
            case 5: case 6: case 7: case 8:
                if (year >= 00 && year <= 57) {
                    var fullYear = parseInt("20" + year);
                    var age = new Date().getFullYear() - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                else if (year >= 58 && year <= 99) {
                    var fullYear = parseInt("18" + year);
                    var age = new Date().getFullYear() - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                break;
            //cp7 is 9
            case 9:
                if (year >= 00 && year <= 36) {
                    var fullYear = parseInt("20" + year);
                    var age = 2017 - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                else if (year >= 37 && year <= 99) {
                    var fullYear = parseInt("19" + year);
                    var age = 2017 - fullYear;
                    resolve("the person's age is = " + age + " and the gender is = " + gender);
                }
                break;
            //cp7 is invalid
            default:
                reject("the 7th digit is invalid")
                break;
        }
    })
}

var checkCPR = number => {
    checkLength(cpr_number)
        .then(success => {
            console.log(success);
            return checkIfNan(cpr_number);
        }).then(nextSuccess => {
            console.log(nextSuccess);
            return checkDay(day);
        }).then(nextSuccess => {
            console.log(nextSuccess);
            return checkMonth(month);
        }).then(nextSuccess => {
            console.log(nextSuccess);
            return checkYear(year);
        }).then(nextSuccess => {
            console.log(nextSuccess);
            return checkCP7(cp7);
        }).then(nextSuccess => {
            console.log(nextSuccess);
        }).catch(error => {
            console.log(error);
        })
}

checkCPR(cpr_number);