//print odd numbers in an array
//declaring and initializing array
let  array = [13,12,14,15,20,19,27,32];
//creating anonymous function
let odd = function (list){
    //creating empty array "odd" and using "filter" method 
    //to return odd elments of the array
    let odd = list.filter((element)=>{return element%2!==0;});
    //printing out the odd array
    console.log("Odd Array : " +odd.join(" "));
}
//calling the anonymous function
odd(array);
//creating IIFE function
(function (list){
    //creating empty array "odd" and using "filter" method 
    //to return odd elments of the array
    let odd = list.filter((element)=>{return element%2!==0;});
    //printing out the odd array
    console.log("Odd Array : " +odd.join(" "));
})(array);