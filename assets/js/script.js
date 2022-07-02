//Search for a City
//API call to get lat and long for city
//use lat and long to make API call for weather forecast of that city
//Display weather and icons 
    //Current weather with colour coded UV
    //5-day forecast
//save search to history



var response = fetch("http://api.openweathermap.org/geo/1.0/direct?q=Toronto,CA&limit=5&appid=57feaa838861618a32fcfcc4e97cb19d");
console.log(response)

var weather = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=42.93&lon=-81.23&exclude=minutely&appid=57feaa838861618a32fcfcc4e97cb19d");
console.log(weather)