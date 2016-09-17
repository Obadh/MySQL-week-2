API server example: TODO list with mysql
========================================

## Requirements (works with)

* MySQL 5.6
* node.js 6.2.2

## Setup

* Install MySQL Server with root password: ```root```
* Create a table named ```todos``` with fields id(autoincrement), name(text), done(smallint(1))
* start the application with ```node todosServer.js```

## How it works

### Add a new todo item

send a POST request to http://localhost:8080/todo.my_new_task and you will have a new task, named my_new_task

### Get a todo item

send a GET request to http://localhost:8080/todo?id=1

### Delete a todo item

send a DELETE request to http://localhost:8080/todo/1 (we're expecting the first id to be 1)


