var todosAPI = {


    getTodos: function(connection, id, callback) {
        if (!id) {
            connection.query('select id, name, done from todos', function(err, rows, fields) {
                if (!err) {
                    callback(rows);
                } else {
                    console.warn('Error in getTodos');
                    callback(null);
                }
            });
        }
    },

    insertTodo: function(connection, insertItem, callback) {

            connection.query('insert into todos (Name) VALUES (?)',insertItem, function(err) {
                if (!err) {
                    callback(null);

                } else {
                    console.warn('Error in insertTodo');
                    callback(null);
                }
            });
    },

    updateTodo: function(connection, updateItem,id, callback) {

        connection.query('UPDATE todos SET name = ? Where id = ?',
            [updateItem, id], function(err) {
            if (!err) {
                callback(null);

            } else {
                console.warn('Error in updateTodo');
                callback(null);
            }
        });
    },

    deleteTodo: function(connection, id, callback) {
        if (id) {
            connection.query('DELETE FROM todos WHERE id = ?',[id], function(err) {
                if (!err) {
                    callback(null);
                } else {
                    console.warn('Error in deleteTodo');
                    callback(null);
                }
            });
        }
    },

    selectTodo: function(connection, id, callback) {
        if (id) {
            connection.query('select * from todos where id = ?',[id], function(err, rows, fields) {
                if (!err) {
                    callback(rows);
                } else {
                    console.warn('Error in selectTodo');
                    callback(null);
                }
            });
        }
    }
};

module.exports.todosAPI = todosAPI;
