# Reference type vs Value ( Primitive ) type

The ECMAScript language types (primitive/value types) are Undefined, Null, Boolean, Number, and Object

The only "reference" types are Objects, Arrays and Functions

The main difference between the two types lies in their physical size. Primitive types always have a fixed size, which at most is 8 bytes (numbers) and at least 1 bit (boolean values). 

Reference types however have no fixed size, since they can contain any amount of elements, lines of code etc. As a result of this, their values can't be stored directly in the 8 bytes of memory associated with each variable. Instead a reference to the value is stored - typically a pointer or memory adress. 

To illustrate the distinction, i will make use of the following two examples. 

´´´
    var a = 3.14;  // Declare and initialize a variable
    var b = a;     // Copy the variable's value to a new variable
    a = 4;         // Modify the value of the original variable
    alert(b)       // Displays 3.14; the copy has not changed
´´´

In this example, a's value is assigned directly to a new value b, which holds the value itself. Therefore, b's value doesn't change when a's value is altered. 

´´´
    var a = [1,2,3];  // Initialize a variable to refer to an array
    var b = a;        // Copy that reference into a new variable
    a[0] = 99;        // Modify the array using the original reference
    alert(b);         // Display the changed array [99,2,3] using the new reference
´´´

In this example, b's value IS altered. This is because a doesn't hold the array itself - it holds only a reference to it's physical location. As a result, when a's value 
is assigned to b, b doesn't receive a value - it receives a reference to the array. In other words, a second reference to the array is created, instead of a copy of the value itself (of the array itself). This means that when one of the references pointing to the array is used in order to alter that array, the array will precisely have been altered, when 
the second reference is used to access that same array. 