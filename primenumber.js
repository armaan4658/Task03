//return all prime numbers in an array
//declaring and initializing array
let  array = [13,12,14,15,20,19,27,32];
//creating an anonymous function
let primenumber = function(list){
    //creating an empty array "prime" to store prime numbers using "filter" and arrow function
    let prime = list.filter((element)=>{
        let divided = 0;
        for(let i = 0; i < 100 ; i++){
            if(element%i===0){
                divided++;
            }
        }
        return divided<3;
    });
    //printing out the result
    console.log(`Prime elements : ${prime.join(" ")}`);
}
//calling anonymous function
primenumber(array);

//creating IIFE function
((function (list){
    //creating an empty array "prime" to store prime numbers using "filter" and arrow function
    let prime = list.filter((element)=>{
        let divided = 0;
        for(let i = 0; i < 100 ; i++){
            if(element%i===0){
                divided++;
            }
        }
        return divided<3;
    });
    //printing out the result
    console.log(`Prime elements : ${prime.join(" ")}`);
})(array));