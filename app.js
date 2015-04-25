var express = require('express');
var favicon = require('serve-favicon');
var app = express();
var rootDir = "/home/mrobison/appspirin";

app.use(favicon(__dirname + '/images/favicon.ico'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    //show splash screen for n seconds
    //redirect to login page
    res.sendFile('templates/home.html', { root: rootDir });
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
    res.sendFile('templates/login.html', { root: rootDir });
});

app.post('/login', function(req, res){
    //is it a login or a create?
    //if it's a create, make a new user object, new email in the cron job and redirect to home
    //if it's a login, load the user appropriately (probably sessions) and redirect to home
	res.sendFile('templates/home.html', { root: rootDir });
});

app.get('/createAccount', function(req, res){
	res.sendFile('templates/newAccount.html', {root: rootDir });
});

app.post('/createAccount', function(req, res){
	res.sendFile('templates/home.html', {root: rootDir });
});

app.get('/home', function(req, res){
    //just render the home page
    //links to logout, settings, checkin, history, resources
    res.sendFile('templates/home.html', { root: rootDir });
});

app.get('/settings', function(req, res){
    //render settings page
    //a lot of stuff will post here
    res.sendFile('templates/settings.html', { root: rootDir });
});

app.post('/settings', function(req, res){
    //change the JSON objects appropriately
});

app.get('/logout', function(req, res){
    //logout
    //redirect to login
    res.sendFile('templates/login.html', { root: rootDir });
});

app.get('/history', function(req, res){
    //render the appropriate page
    res.sendFile('templates/history.html', { root: rootDir });
});

app.get('/resources', function(req, res){
    //just render the page
    res.sendFile('templates/resources.html', { root: rootDir });
});

app.get('/checkin', function(req, res){
    //record timestamp and pre-level
    //send on to suggestions
    res.sendFile('templates/checkin.html', { root: rootDir });
});

app.post('/checkin', function(req, res){
    //display suggestions for user and level, ordered by usage
    //send on to strategy page
	if(req.body.stress==0){
		res.sendFile('templates/noStress.html', { root: rootDir });
	}
	else if(req.body.stress==5){
		res.sendFile('templates/moreHelp.html', { root: rootDir });
	}
	else{
    	res.sendFile('templates/suggestions.html', { root: rootDir });
	}
});

app.get('/strategies', function(req, res){
	res.sendFile('templates/suggestions.html', { root: rootDir });
});

app.get('/strat/:strategy', function(req, res){
    var strategy = req.params.strategy;
    //render strategy
    //send on to post checkin
    res.sendFile('templates/strategy.html', { root: rootDir });
});

app.get('/checkinPost', function(req, res){
    //record post score
    //send to stratEnd
    res.sendFile('templates/checkinPost.html', { root: rootDir });
});

app.get('/newStrategy', function(req, res){
	//render the page, 
	//then send back to settings if they came from settings 
	//or the checkin flow if they came from checkin
	res.sendFile('templates/newStrategy.html', { root: rootDir });
});

app.post('/newStrategy', function(req, res){
	//put the info in the right places
	//route back to settings
	res.sendFile('templates/editStrategies.html', { root: rootDir});
});

app.get('/editStrategies', function(req, res){
	res.sendFile('templates/editStrategies.html', { root: rootDir});
});

app.post('/editStrategies', function(req, res){
	res.sendFile('templates/settings.html', { root: rootDir});
});

app.get('/historyStrats', function(req, res){
	res.sendFile('templates/historyStrats.html', { root: rootDir});
});

app.get('/successful', function(req, res){
	res.sendFile('templates/successful.html', { root: rootDir});
});

app.get('/unsuccessful', function(req, res){
	res.sendFile('templates/unsuccessful.html', { root: rootDir});
});

app.get('/moderate', function(req, res){
	res.sendFile('templates/moderate.html', { root: rootDir});
});

app.get('/moreHelp', function(req, res){
	res.sendFile('templates/moreHelp.html', { root: rootDir});
});

app.get('/noStress', function(req, res){
	res.sendFile('templates/noStress.html', { root: rootDir});
});

app.get('/notifications', function(req, res){
	res.sendFile('templates/notifications.html', { root: rootDir});
});

app.get('/talk', function(req, res){
	res.sendFile('templates/talk.html', { root: rootDir});
});

app.get('/resources/phone', function(req, res){
	res.sendFile('templates/resources/phoneNumbers.html', { root: rootDir});
});

app.get('/resources/chat', function(req, res){
	res.sendFile('templates/resources/chat.html', { root: rootDir});
});

app.get('/resources/faq', function(req, res){
	res.sendFile('templates/resources/counselingFAQ.html', { root: rootDir});
});

app.get('/resources/time', function(req, res){
	res.sendFile('templates/resources/timeManagement.html', { root: rootDir});
});

app.get('/resources/stress', function(req, res){
	res.sendFile('templates/resources/stressManagement.html', { root: rootDir});
});

app.use("/static", express.static(rootDir + '/static'));
app.use("/images", express.static(rootDir + '/images'));

var server = app.listen(3000, function(){

    var host = server.address().address
    var port = server.address().port

    console.log('Appspirin listening at http://%s:%s', host, port)

});
