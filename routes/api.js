var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('handlebars')

//Database Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kennedi05',
    database: 'teamapp'
});

exports.connection = connection.connect();


//SQL Statments

/*var insertData = function(req, res){
    connection.query('INSERT into teamapp_test set ?', req.body, function(err, results){
        if(err){
            res.status(500).json({status:err});
        } else {
        console.log(req) 
            res.status(200).json({status:'ok'})
        }
        connection.end();
    });
};*/


var insertData = function(req, res) {
    connection.query("CALL sproc_addUser(" +
        connection.escape(req.body.name) + ", " +
        connection.escape(req.body.age) + "," +
        connection.escape(req.body.favColor) + ")", req.body,
        function(err, results) {
            if (err) {
                console.log(req.body)
                res.status(500).json({ status: err });

                connection.end();
            } else {
                console.log(req)
                res.status(200).json({ status: 'ok' });
                connection.end();
            }
            //
        });
};

var selectData = function(req, res) {
    connection.query("CALL findUsers(" +
        connection.escape(req.body.firstName) + ", " +
        connection.escape(req.body.age) + "," +
        connection.escape(req.body.favColor) + ")", req.body,
        function(err, results) {
            if (err) {
                console.log(req.body)
                res.status(500).json({ status: err });

                connection.end();
            } else {
                console.log(req.body)
                console.log('Results', results)
                res.json({ "Results": results })
                connection.end();
            }
            //
        });
}


//Return/Post Data

//router.get('/', selectData)

router.post('/adduser', insertData)
router.post('/finduser', selectData)


module.exports = router;