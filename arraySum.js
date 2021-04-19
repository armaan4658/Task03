//printing out sum of all numbers in an array
//declaring and initializing array
let  array = [13,12,14,15,20,19,27,32];
//creating anonymous function
let sum = function(list){
    //creating a variable 's' to store the sum of array using arrow function
    let s = array.reduce((cv,elements)=>{return cv+elements;});
    //priting out the sum of array
    console.log("-------------using anonymous function------------");
    console.log(`Sum of array : ${s}`);
}
//calling the anonymous array
sum(array);
//creating IIFE function
(function (list){
    //creating a variable 's' to store the sum of array using arrow function
    let s = array.reduce((cv,elements)=>{return cv+elements;});
    //printing out the sum of array
    console.log("---------------using IIFE function ----------");
    console.log(`Sum of array : ${s}`);
    
})(array);
