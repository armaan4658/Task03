function checkPalindrome(str) {
    // find the length of a string
    const len = str.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 0;
        }
    }
    return 1;
}

let string=["mom","move","movom"];
//creating anonymous function
let palindrome = function(str){
    console.log("-------------using anonymous function------------");
    for (i in str){
        if(checkPalindrome(str[i])==1){
            //printing out the output            
            console.log(str[i]);
        }
    }
}
palindrome(string);
//creating an IIFE function
(function (str){
    console.log("---------------using IIFE function ----------");
    for (i in str){
        if(checkPalindrome(str[i])==1){
            //printing out the output
            console.log(str[i]);
        }
    }
})(string);
