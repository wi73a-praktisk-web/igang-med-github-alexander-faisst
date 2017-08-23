###### igang-med-github-alexander-faisst

### Documentation Loops

Loop | Description| Example 
-----|------------|----------------
For Loop | Loops through a block of code a number of times | `for( i = 0; i < arr.length; i++ ) { execute code }`
For/in Loop | Loops through the properties of an object | `for( var value in iterable ) { execute code }`
For/of Loop | Loops through a objects enumerables | `for( var value of iterable ) { execute code }`
While Loop | loops through a block of code while a specified condition is true | `var i = 0; while( i < x ) { i++; }`
Do/while Loop | also loops through a block of code while a specified condition is true | `do{ i++; } while( i < x )`
For Each Loop | Performs an operation once for every element in the collection (usually used for iterating through arrays) | `arr.forEach( function( item, index,arr )){ execute code }`

### Documentation Operators

Operator | Description | Example
---------|-------------|-------------
= | Used to check for true/false in case of booleans and for assigning a variables value | `if( check = true )` <br/> `var x = n;`
== | Equal to | `if( x == 2 )`
=== | Equal value and equal type | `if( x === 2 )`
! | False | `if( !check )`
!= | Not equal | `if( x != 0 )`
!== | Not equal value or type | `if( x !=== 0 )`
< | Smaller than | `if( x < 0 )`
\> | Bigger than | `if( x > 0 )`
<= | Smaller than or equal | `if( x <= 0 )`
\>= | Bigger than or equal | `if( x >= 0 )`
 \+ | Operator for addition | `x + 2`
\- | Operator for subtraction | `x - 2`
\* | Operator for multiplication | `x * 2`
/ | Operator for division | `x / 2`
% | Operator for modulus | `x % 2`
&& | Both conditions have to be true | `if( condition 1 && condition 2 )`
\|\| | One of two (or more) conditions have to be true | `if( condition 1 \|\| condition 2 )`

### Documentation if-else 

If-else statements make use of true/false values in order to compare all kinds of object. Depending on the input and the result of the comparison, they navigate through a virtual flow-chart in order to determine the correct outcome. If-else statements are often combined with different kinds of loops and operators (as described above). 

```
if(condtion) {
    // exectue code ...
}
else if(condition) {
    // execute code ...
}
else {
    // execute code ...
}
```

### Documentation Functions

Term | Description
-----|------------
funktioner | Operations performed in order to perform some action. Return types and parameters are optional. Functions can be declared normally, anonymously, inside of other functions and most likely in many other ways as well. 
argumenter | Arguments/Parameters are the optional input one can pass a function, which occasionally are nessecary in order for the function to function properly (pun not entirely intended)
instruktioner | Basically everything inside of the methods "curly brackets" - the functions body. The actual operations to be performed. 
returværdier | The values that a function produces and passes back to the caller - note that not all methods have a return type (in which case the return type is called "void")
funktionskald | A function being called, optionally with parameters. I find it difficult to put it differently or more elaborately. 
hoisting | Calling a method that is defined further down in the file - not that while this works for standard functions, it doesn't work for anonymous ones. 
funktioner i funktioner | This concepts main purpose, as far as i understand, is to perform the same operations on fewer lines of code, as well as possibly making ones code more elegant. This concept can also be used in order to perform recursive functions, but much more on that later. 

#### Arrow functions 

```
if (currentUser) {
  function test() { // this is the important line ...
    console.log('Nope.');
  }
}
```
is precisely the same as 

```
let test;
if (currentUser) {
  test = () => { // this is the line important line ...
    console.log('Yup.');
  };
}
```

### Documentation Callbacks

Callbacks are functions that are sent to other functions in form of function parameters. 
 - i dette tilfælde er det en anonym callback funktion
```
var data = [1, 2, 3, 4, 5, 6];
data.forEach(function (element) {
   console.log(element);
});
```

Funktionen outputSomething kan kaldes uafhængigt af andre funktioner, mens doSomething skal have en funktion sendt med som argument.
```
// tænk på dette som den primære funktion der kaldes fra vores kode
function doSomething(someValue, callback){
   callback(someValue);
}
// denne funktion vil blive udført som en callback FRA doSomething funktionen
function outputSomething(value){
   console.log(value);
}

doSomething('text', outputSomething);
```

### Documentation Promises

# Promises
Callbacks er noget I kommer til at benytte rigtig meget, men det kan hurtigt blive en ordentlig omgang spagettikode... Specielt når der er tale om **askynkronisitet** 

Det er derfor der er introduceret et nyt koncept, kaldet **Promises**

Formålet er at komme væk fra at skulle medsende callbacks. I stedet kan vi **chaine** to nye funktioner **then** og **catch** til koderne.

.then() og .catch() er funktioner JavaScript stiller til rådighed igennem et **Promise**

```javascript
doOneThing().then().catch();
```  
Det er selvfølgelig lidt mere kompliceret end at sætte tre funktioner efter hinanden.

Et Promise benytter faktisk callbacks, men på en lidt speciel måde. Når vi skriver koden, benyttes et nyt JavaScript objekt (Objekter kommer vi mere ind på senere på uddannelsen). Promise objektet oprettes og skal have to callbacks, der populært kaldes **resolve** og **reject** 

**resolve()** bliver til **.then()** og **reject()** bliver til **.catch()**

Et eksempel, det er nok mere tydeligt. Her undlades **reject/catch**
```javascript
let firstPromise = new Promise(function (resolve, reject) {
   resolve('success');
});

firstPromise.then(function (successMessage) {
   console.log(successMessage);
});
```

## Hvorfor er det så smart? .. det ser jo vildt mystisk ud... 

En klar fordel ved Promises, er at vi får en meget tydelig kodestruktur, som er nemmere at vedligeholde end en masse tilfældige callback funktioner.

Lad os se et eksempel der bygger oven på det forrige eksempel, og implemeterer både reject og resolve
```javascript
let secondPromise = new Promise(function (resolve, reject) {
   // her kunne der være masser af kode der skulle udføres
   // og derefter afsluttes med at resolve eller reject
   // alt efter om alting lykkedes eller ej
   if (true) {
      resolve('success');
   } else {
      reject('Det var ikke en succes');
   }
});

secondPromise.then(successMessage => {
   console.log(successMessage);
}).catch(errorMessage => {
   console.log(errorMessage);
});
```
prøv koden af, og skift **true** ud med **false**!



## Funktioner der retunerer et promise

Et promise er principielt et ikke fysiskt, konceptuelt objekt der repræsenterer et løfte om, at en proces er igang, omend ikke færdig endnu. Ift. callbacks giver promises mulighed for 
at have flere promises i luften ad gangen (man kan godt med callbacks, men det er meget mere besværligt). Det smarte er, at man kan "arbejde videre" med resultatet på trods af at 
processen stadig er igang. Dette er meget fordelagtigt, hvis man har flere processer som er afhængige af hinanden - hvor f.eks. den ene proces har brug for den forriges output/data til at kunne gå igang. Velegnet til kombination med asynkronitet. 

```javascript
function thirdPromise(someBoolValue) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (someBoolValue) {
            resolve('Denne besked kommer fra "resolve"');
         } else {
            reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
         }
      }, 2000);
   })
}

thirdPromise(true)
   .then((success) => {
      console.log(success);
      //throw new Error('lad os sige noget gik galt!');
      return 'Information sendes videre';
   }).then((nextSuccess) => {
      console.log(nextSuccess);
   }).catch((error) => {
      console.log(error);
   })
```
Læg i øvrigt mærke til hvad der sker når reject funktionen kaldes. Der benyttes **new Error()** til at sende en detaljeret fejlbesked til **.catch()** funktionen. 

En anden detalje der er værd at se nærmere på, er at der er **to** .then() efter hindanden... 
Dette minder i nogen grad om callbacks, dog med en væsentlig forskel: for en enkel operation (fetch something, process it and display it) er callbacks helt fine - men 
så snart der kommer flere requests samtidigt, bliver koden meget hurtigt meget kludret. Promises derimod løser dette problem på elegant vis, ikke mindst ift. error handling.  
Det fungerer således: 


### Documentation Asynkronitet

Javascript kan have flere bolde i luften på en gang, det er super smart. F.eks kan man sætte programmet igang med at hente data fra en databaseserver, og alt imens det sker, kan programmet fortsætte frem for at gå i stå mens der hentes data.
```
function getData(dataURI, callback) {
   console.log('første linje i getData funktionen...');
   var timer = setTimeout(function () {
      console.log('Her der der gået 2 sekunder.');
      var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
      callback(dataArray);
   }, 2000);
}

function outputData(myData) {
   console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
}

getData('http://www.domain.com/something', outputData);
console.log("Denne kode linje burde være den sidste.");
```

### Documentation json & jquery 