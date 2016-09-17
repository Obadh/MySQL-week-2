var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var todosAPI = require('./todosAPI').todosAPI;

// Try this out - guess what it prints before you uncomment it!
//console.log(todosAPI);

// Create a new application.
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todos'
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ...");
    } else {
        console.log("Error connecting database ...");
    }
});

// Use JSON body parser middleware.
app.use(bodyParser.json());

// Actions
//Get todos
app.get('/todo', function(request, response) {
    var id = request.params.id;
    var rows = todosAPI.getTodos(connection, id, function(rows) {
        console.log('Rows received by get: ', rows);
        response.json(rows);
        response.end();
    });
});

// Insert a todo
app.post('/todo.:text', function(request, response) {
    var todo = request.body;

        var insertItem = request.params.text;
        var insertFunction = todosAPI.insertTodo(connection,insertItem, function() {
            response.end();
        });


});

// Delete a todo
app.delete('/todo/:id(\\d+)', function(request, response) {
    var id = request.params.id;
    var deleteFunction = todosAPI.deleteTodo(connection, id, function() {
        response.end();
    });

});

// Update a todo
app.put('/todo/:id(\\d+)&:text', function(request, response) {
    var id = request.params.id;

    var updateItem = request.params.text;
    var updateFunction = todosAPI.updateTodo(connection,updateItem,id, function() {
        response.end();
    });
});

// Select a todo
app.get('/todo/:id(\\d+)', function(request, response) {
    var id = request.params.id;
    var selectFunction = todosAPI.selectTodo(connection, id, function(rows) {
        console.log('Rows received by get: ', rows);
        response.json(rows);
        response.end();

    });

});

function sendError(response, code, message) {
    response.statusCode = code;
    response.json({
        error: message
    });
    response.end();
}


// Start the server.
app.listen(8080);
