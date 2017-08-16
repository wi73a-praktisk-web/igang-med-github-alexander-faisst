var cars = ["Volvo","Opel","Mercedes", "BMW", "Citroen","Audi","Skoda"];
cars.name = "alle bilerne";
cars[10] = "Ford";

//for_loops
for(i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for(var item of cars){
    console.log(item);
}

//forEach_loops
cars.forEach(function(item){
    console.log(item)
});

function logEachItem(item,index,array){
    console.log('cars[' + index + '] = ' + item);
}

cars.forEach(logEachItem);

//while_loops

var j = 0;
while(j <= 50){
    console.log("j = " + j);
    j++;
}

