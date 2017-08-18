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
= | Used to check for true/false in case of booleans | `if( check = true )`
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
|| | One of two (or more) conditions has to be true | `if( condition 1 || condition 2 )`

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