//creating xml request
var req = new XMLHttpRequest();
//initiate a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//loading the function
req.onload=function(){
    //converting the data to JSON
    var data = JSON.parse(this.response);
    console.log("Countries : Tempreature");
    //using for in loop to iterate through the country names
    for(let i in data){
        ///creating xml request
        var weatherRequest = new XMLHttpRequest();
        //creating IIFE  funnction
        (function (name=data[i].name,latitude=data[i].latlng[0],longitude=data[i].latlng[1]){
            //creating api link
            var link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=23b7b7bef60148649dd074cf98a39b6e`;
            //using try block to handle exceptions
            try{
                //checking if "latitude" & "longitude" is defined
                if((latitude!=undefined)&&(longitude!=undefined))
                    {//initiate a connection       
                    weatherRequest.open('GET',link,true);
                    //sending the request
                    weatherRequest.send();}
                else{
                    //if "latitude" and "longitude" is not defined
                    //an error will be thrown
                    throw new Error("Lat lng not found");
                }
                
            }
            catch(e){
                console.log(e);
            }
            
            //loading the function
            weatherRequest.onload=function(){
                //converting the data to JSON
                var data2 = JSON.parse(this.response);
                
               
                //checking if the latitude or longitude is undefined
                if((longitude!=undefined)&&(latitude!=undefined)){
                    //printing out the output
                    console.log(`${name}  : ${data2.main.temp}`);
                }
            }
        })();
    }
}