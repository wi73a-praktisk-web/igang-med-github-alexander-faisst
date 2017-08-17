###### igang-med-github-alexander-faisst

# At oprette et repository

1. Go To Front Page
1. Click "New Repository"
1. Fill Out Form
   1. Chose public/private
   1. Chose gitignore yes/no
   1. Chose license 
1. Click Create
1. Example url for creating a new rep. : 
http://github.com/new - automatic!
1. Link with a hidden url, points to the same location as the link above, but prettier [GitHub](http://github.com/new) 

# Emphasis Illustration & Strikethrough


*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

_You **can** combine them_

~~Some **crossed out** text~~

## How *Console.log('')* works: 

1. Den første del, *"Console"*, fortæller computeren at det er konsollen der skal arbejdes med.
1. Den anden del, *"log"*, fortæller den hvad den skal have konsollen til at gøre, nemlig at udskrive det som står i paranteserne. 
1. Jeg tror ikke der er så meget mere at sige til det.   


# Image located on server/the internetz
### What appears to be a normal link
![GitHub Logo](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)
### What appears to be the same link but with an alternative text in case something goes wrong
Alt Text: ![Alt Text](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)


# Image located in local folder
### What appears to be a normal link
![GitHub Logo](Octocat.png)
### What appears to be the same link but with an alternative text in case something goes wrong
Alt Text: ![Octocat.png](Octocat.png)


# Blockquotes
As Kanye West said:

> We're living the future so
> the present is our past.

# Inline code
I think you should use an
`<addr>` element here instead.

# Task Lists, example

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

# Tables, example 

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

# Here starts the actual documentation, as per instruction

### Documentation Loops

Loop | Description
-----|------------
For Loop | Loops through a block of code a number of times
For/in Loop | Loops through the properties of an object
For/of Loop | Loops through a objects enumerables
While Loop | loops through a block of code while a specified condition is true
Do/while Loop | also loops through a block of code while a specified condition is true 
For Each Loop | Performs an operation once for every element in the collection (usually used for iterating through arrays)

### Documentation Operators

Operator | Description
---------|------------
= | Used to check for true/false in case of booleans
== | Equal to
=== | Equal value and equal type
! | False
!= | Not equal
!== | Not equal value or type
< | Smaller than
\> | Bigger than
<= | Smaller than or equal
\>= | Bigger than or equal
+ | Operator for addition
- | Operator for subtraction
* | Operator for multiplication
/ | Operator for division
% | Operator for modulus 
&& | Both conditions have to be true
|| | One of two (or more) conditions has to be true

### Documentation if-else 

If-else statements make use of true/false values in order to compare all kinds of object. Depending on the input and the result of the comparison, they navigate through a virtual flow-chart in order to determine the correct outcome. If-else statements are often combined with different kinds of loops and operators (as described above). 

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