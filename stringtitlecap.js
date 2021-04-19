//declaring the string
let str = 'my name is armaan';
//creating an anonymous function
let titleCase = function (string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //printing out the output
    console.log("-------------using anonymous function------------");
    console.log(sentence.join(" "));
 }
//calling anonymous function
titleCase(str);
//creating IIFE function
(function (string){
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //printing out the odd array
    console.log("---------------using IIFE function ----------");
    console.log(sentence.join(" "));
})(str);
