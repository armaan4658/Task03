var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
//creating anonymous function
let unique = function(name){
    let uniqueChars = [];
    names.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    //printing out the output
    console.log("-------------using anonymous function------------");
    console.log(`unique name = ${uniqueChars.join(" ,")}`);
}
//calling the anonymous function
unique(names);
//creating IIFE function
(function(name){
    let uniqueChars = [];
    names.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    //printing out the output
    console.log("---------------using IIFE function ----------");
    console.log(`unique name = ${uniqueChars.join(" ,")}`);
})(names);
