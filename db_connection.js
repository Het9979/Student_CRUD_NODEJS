var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*con.query("select * from students;",function(error, result, field){
    if(error)
        console.log(error);
    console.log(result);
});*/
module.exports.conn = con;