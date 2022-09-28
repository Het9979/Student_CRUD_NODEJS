const http = require("http");
const mysql = require('mysql');
const express = require('express');
//var connection = require('./db_connection.js');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database : 'node_test'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log("Connected successfully with the database:))))");
    else 
    console.log("Cannot connect to the database:((( " + JSON.stringify(err,undefined,2));
});

app.listen(3000, ()=> console.log('Developement server is running on port 3000'));


//get all students
app.get('/students', (req,res)=>{
    mysqlConnection.query('SELECT * FROM students', (err, rows, fields)=>{
        if (!err)
            res.send(rows);
        else
        console.log(err);
    })
});

//Get student with particular id 
app.get('/student/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM students WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete student with particular id
app.delete('/student/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM students WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert new student
app.post('/students', (req, res) => {
    let stu = req.body;
    var sql = "SET @Id = ?;SET @Name = ?;SET @Address = ?;";
    mysqlConnection.query(sql, [stu.Id, stu.Name, stu.Address], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted Student id : '+element[0].Id);
            });
        else
            console.log(err);
    })
});

//Update student information
app.put('/student', (req, res) => {
    let stu = req.body;
    var sql = "SET @Id = ?;SET @Name = ?;SET @Address = ?;";
    mysqlConnection.query(sql, [stu.Id, stu.Name, stu.Address], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});