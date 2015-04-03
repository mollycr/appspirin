var express = require('express');
var app = express();

app.get('/', function(req, res){
    //show splash screen for n seconds
    //redirect to login page
    res.sendFile('templates/home.html', { root: __dirname });
})

app.get('/u/:user',function(req, res){
    //show splash screen for n seconds
    var user = req.params.user;
    //log in as :user
    //  if :user doesn't exist, redirect to login
    //redirect to home
}); 

app.get('/login', function(req, res){
    //login or create account - just render
    res.sendFile('templates/login.html', { root: __dirname });
});

app.post('/login', function(req, res){
    //is it a login or a create?
    //if it's a create, make a new user object, new email in the cron job and redirect to home
    //if it's a login, load the user appropriately (probably sessions) and redirect to home
});

app.get('/home', function(req, res){
    //just render the home page
    //links to logout, settings, checkin, history, resources
    res.sendFile('templates/home.html', { root: __dirname });
});

app.get('/settings', function(req, res){
    //render settings page
    //a lot of stuff will post here
    res.sendFile('templates/settings.html', { root: __dirname });
});

app.post('/settings', function(req, res){
    //change the JSON objects appropriately
});

app.get('/logout', function(req, res){
    //logout
    //redirect to login
    res.sendFile('templates/login.html', { root: __dirname });
});

app.get('/history', function(req, res){
    //render the appropriate page
    res.sendFile('templates/history.html', { root: __dirname });
});

app.get('/resources', function(req, res){
    //just render the page
    res.sendFile('templates/resources.html', { root: __dirname });
});

app.get('/checkin', function(req, res){
    //record timestamp and pre-level
    //send on to suggestions
    res.sendFile('templates/checkin.html', { root: __dirname });
});

app.get('/suggestions', function(req, res){
    //display suggestions for user and level, ordered by usage
    //send on to strategy page
    res.sendFile('templates/suggestions.html', { root: __dirname });
});

app.get('/strat/:strategy', function(req, res){
    var strategy = req.params.strategy;
    //render strategy
    //send on to post checkin
    res.sendFile('templates/strategy.html', { root: __dirname });
});

app.get('/checkinPost', function(req, res){
    //record post score
    //send to stratEnd
    res.sendFile('templates/checkinPost.html', { root: __dirname });
});

app.get('/stratEnd', function(req, res){
    //render appropriate end message for score difference
    //send to home
    res.sendFile('templates/stratEnd.html', { root: __dirname });
});

app.get('/newStrategy', function(req, res){
	//render the page, 
	//then send back to settings if they came from settings 
	//or the checkin flow if they came from checkin
	res.sendFile('templates/newStrategy.html', { root: __dirname });
});

app.post('/newStrategy', function(req, res){
	//put the info in the right places
});

app.use("/static", express.static(__dirname + '/static'));

var server = app.listen(3000, function(){

    var host = server.address().address
    var port = server.address().port

    console.log('Appspirin listening at http://%s:%s', host, port)

});
