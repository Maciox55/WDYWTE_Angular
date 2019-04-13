var creds = require('./creds/creds');
var request = require('request');
module.exports = {
    geocode : function(zip, callback){
        request('https://maps.googleapis.com/maps/api/geocode/json?address='+zip+'&key='+creds.placesAPIKey,function(error,response,body){
            if(!error){
                result = JSON.parse(body);
                coords = {
                    lat:result.results[0].geometry.location.lat,
                    lon:result.results[0].geometry.location.lng
                }
                callback(null,coords);
            }
            else
            {
                console.log('error',error);
            }
            if(response.statusCode === 200){
                //console.log(coords.lat+','+coords.lon);
                
               return coords;
                //return coords.lat+','+coords.lon;
            }
            
            else{
                return "API request was not successful";

            }
        });
    },placeSearch : function(location,radius,filters,pricerange,callback){
        var result;
        var coords
        request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius='+radius+'&type=restaurant&keyword='+filters+'&maxprice='+pricerange+'&key='+creds.placesAPIKey,function(error,response,body){
            if(!error){
                result = JSON.parse(body);
                console.log(result);
                
                callback(null,result);
            }
            else
            {
                console.log('error',error);
            }
            if(response.statusCode === 200){
                return result;
            }
            else{
                return "API request was not successful";

            }
            
        });
      
    },
    placeDetail: function(placeID, callback){
        request('https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeID+'&key='+creds.placesAPIKey,function(error,response,body){
            if(!error)
            { 
                var resul = JSON.parse(body);
                console.log(resul);
                callback(null,resul);
            }
            else
            {
                console.log('error',error);
            }
            if(response.statusCode === 200){
                //console.log(coords.lat+','+coords.lon);
                
               return JSON.parse(body);
                //return coords.lat+','+coords.lon;
            }
            
            else{
                return "API request was not successful";

            }
        });
    }


}