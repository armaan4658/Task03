//declaring arr1 and arr2
let arr1=[1,5,7,3,2,8,9];
let arr2=[20,18,11,14,35,41,37];
//creating anonymous function to find out the median
let merge = function(list1,list2){
    for(let i in list2){
        list1.push(+list2[i]);
    }
    list1.sort(function(a, b){return a-b});
    if(list1.length%2===0){
        let median = list1.length/2;
        //printing out the output
        console.log("-------------using anonymous function------------");
        console.log("Median = "+ (list1[median-1]+list1[median]));
    }else{
        let median = list1.length/2;
        //printing out the output
        console.log("-------------using anonymous function------------");
        console.log("Median = "+ list1[Math.round(median)]);
    }
}
//calling anonymous function
merge(arr1,arr2);
//creating IIFE function
(function(list1){
    if(list1.length%2===0){
        let median = list1.length/2;
        //printing out the output
        console.log("---------------using IIFE function ----------");
        console.log("Median = "+ (list1[median-1]+list1[median]));
    }else{
        let median = list1.length/2;
        //printing out the output
        console.log("---------------using IIFE function ----------");
        console.log("Median = "+ list1[Math.round(median)]);
    }
})(arr1);

