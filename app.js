var express = require('express')
var app = express()

app.get('/', function(req, res){
    //show splash screen for n seconds
    //redirect to login page
    res.send('Hello World!')
})

app.get('/u/:user',function(req, res){
    //show splash screen for n seconds
    var user = req.params.user;
    //log in as :user
    //  if :user doesn't exist, redirect to login
    //redirect to home
}) 

app.get('/login', function(req, res){
    //login or create account - just render
})

app.post('/login', function(req, res){
    //is it a login or a create?
    //if it's a create, make a new user object, new email in the cron job and redirect to home
    //if it's a login, load the user appropriately (probably sessions) and redirect to home
})

app.get('/home', function(req, res){
    //just render the home page
    //links to logout, settings, checkin, history, resources
})

app.get('/settings', function(req, res){
    //render settings page
    //a lot of stuff will post here
})

app.post('/settings', function(req, res){
    //change the JSON objects appropriately
})

app.post('/logout', function(req, res){
    //logout
    //redirect to login
})

app.get('/history', function(req, res){
    //render the appropriate page
})

app.get('/resources', function(req, res){
    //just render the page
})

app.get('/checkin', function(req, res){
    //record timestamp and pre-level
    //send on to suggestions
})

app.get('/suggestions', function(req, res){
    //display suggestions for user and level, ordered by usage
    //send on to strategy page
})

app.get('/strat/:strategy', function(req, res){
    var strategy = req.params.strategy;
    //render strategy
    //send on to post checkin
})

app.get('/checkinPost', function(req, res){
    //record post score
    //send to stratEnd
})

app.get('/stratEnd', function(req, res){
    //render appropriate end message for score difference
    //send to home
}

var server = app.listen(3000, function(){

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})
