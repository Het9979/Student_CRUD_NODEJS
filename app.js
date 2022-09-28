//const bodyParser = require("body-parser");
const http = require("http");
var connection = require('./db_connection.js');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
const httpserver = http.createServer(function(req,res){

    if(req.url == '/liststudents')
    {

        connection.conn.query("Select * from students", function(err,result,field){
            if(err)
                console.log(err);
            console.log(result);
            res.end("get information of all the students");

            /*res.result.end("get information");*/
        });
        
        //console.log(req.url);
        /*console.log(req.body)
        /*res.end("get information of all the students");*/
    }
    /*else if(req.url == '/viewstudent')
    {
        res.end("to view student with particular id");
    }
    else if(req.url == '/deletestudent')
    {
        res.end("to delete student with particular id");
    }
    else if(req.url == '/addstudent')
    {
        res.end("to add a new student");
    }
    else if(req.url == '/updatestudent')
    {
        res.end("to update information of student with particular id");
    }
    else if(req.url == '/listcourse')
    {
        res.end("get information of all the courses");
    }
    else if(req.url == '/viewcourse')
    {
        res.end("to view course with particular id");
    }
    else if(req.url == '/deletecourse')
    {
        res.end("to delete course with particular id");
    }
    else if(req.url == '/addcourse')
    {
        res.end("to add a new course");
    }
    else if(req.url == '/updatecourse')
    {
        res.end("to update information of course with particular id");
    }
    else if(req.url == '/listresult')
    {
        res.end("get information of all the result of all students");
    }
    else if(req.url == '/viewresult')
    {
        res.end("to view result with particular id");
    }
    else if(req.url == '/deleteresult')
    {
        res.end("to delete result with particular id");
    }
    else if(req.url == '/addresult')
    {
        res.end("to add a new result");
    }
    else if(req.url == '/updateresult')
    {
        res.end("to update result with particular id");
    }*/
    else
    {
        res.end("  Hello world because there is no such route ");
    }
    
});

httpserver.listen(3000,()=>{
    console.log("Listening on port 3000...");
})