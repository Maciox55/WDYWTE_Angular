var express = require('express');
var bodyParser = require('body-parser');
var requests = require('./server/requests');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('port',(process.env.PORT || 3000));

app.post('/api/searchAround/',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("Test: " + JSON.stringify(req.body.params.zip));
    locat = requests.geocode(req.body.params.zip,function(err,result){
		if(err)
		{
			console.log('Something went wrong'+ ' Result: ' + result);
			res.render('Something Went Wrong', '404');
		}
		else{
			req.body.params.results = result;
			console.log(req.body.params.results.lat+','+req.body.params.results.lon);
			next();
		}
	});
    
},function(req,res){
    requests.placeSearch(req.body.params.results.lat+','+req.body.params.results.lon,req.body.params.range*1609.34,req.body.params.type,req.body.params.priceRange,function(err,ret){
		if(err){
			console.log('Something went wrong');
			res.render('Something Went Wrong', '404');	
		}
		else{
			if(ret.status != 'OVER_QUERY_LIMIT'){
				
				res.results = ret;
				//req.session.random = randomGen.getRandomIntInclusive(0,results.results.length);
				//Later render the Results instead of single one, have to make a partial and Results view first
				//res.render('result',{title:'Test',
				//placeName:ret.results[req.session.random].name,
				//placeAddress:ret.results[req.session.random].formatted_address,
				//placeRating:ret.results[req.session.random].rating,
				//placePricePoint:ret.results[req.session.random].price_level,
				//placeURL:'https://www.google.com/maps/embed/v1/place?key='+credentials.placesAPIKey+'&q=place_id:'+ret.results[req.session.random].place_id});
				console.log(req.body.params.results);
				res.send(
					{data:{
						geo:req.body.params.results,
						results:ret.results
					}}
				);
			}
			else{
				res.render('dailyQuota');
			}
		}
	});
});



app.listen(app.get('port'),function(){
    
    console.log('Express started in ' + app.get('env')+' mode '+ 'on localhost:' + app.get('port') + ' Ctrl+C to Terminate');
});